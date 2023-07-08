import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Log the request body
  console.log('Request body:', req.body);

  const { email } = req.body;
  if (!email) {
    res.status(401).json({ error: 'Email is required' });
    return;
  }
  const mailChimpData = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
      }
    ]
  };
  try {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID as string;
    const URL = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${audienceId}`;
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`
      },
      body: JSON.stringify(mailChimpData)
    });

    // Check if response is correctly formatted JSON
    let data;
    try {
      data = await response.json();
    } catch (e) {
      res.status(500).json({
        error: 'Response from Mailchimp API is not correctly formatted JSON'
      });
      return;
    }

    // Error handling.
    if (data.errors && data.errors[0]?.error) {
      return res.status(401).json({ error: data.errors[0].error });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (e) {
    res
      .status(500)
      .json({ error: 'Something went wrong, please try again later.' });
  }
}
