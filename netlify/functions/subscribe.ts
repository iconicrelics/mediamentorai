import { Handler } from '@netlify/functions';

const KLAVIYO_API_KEY = process.env.KLAVIYO_PRIVATE_KEY;
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID;

export const handler: Handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    if (!KLAVIYO_API_KEY || !KLAVIYO_LIST_ID) {
      throw new Error('Missing required environment variables');
    }

    // Create or update profile
    const profileResponse = await fetch('https://a.klaviyo.com/api/v3/profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Revision': '2023-12-15',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email,
            subscriptions: {
              email: {
                marketing: {
                  consent: 'SUBSCRIBED'
                }
              }
            }
          }
        }
      })
    });

    if (!profileResponse.ok) {
      const error = await profileResponse.json();
      throw new Error(error.detail || 'Failed to create profile');
    }

    const profileData = await profileResponse.json();
    const profileId = profileData.data.id;

    // Add to list
    const listResponse = await fetch(`https://a.klaviyo.com/api/v3/lists/${KLAVIYO_LIST_ID}/relationships/profiles/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Revision': '2023-12-15',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`
      },
      body: JSON.stringify({
        data: [{
          type: 'profile',
          id: profileId
        }]
      })
    });

    if (!listResponse.ok) {
      const error = await listResponse.json();
      throw new Error(error.detail || 'Failed to add to list');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Successfully subscribed to newsletter'
      })
    };

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter'
      })
    };
  }
};