import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    `https://api.explodingtopics.com/api/v1/topics?pro=false&type=all&categories=crypto&sort=date_added&order=asc&timeframe=180&limit=100&response_timeframe=last_12_months&api_key=${process.env.EXPLODING_TOPICS_API_KEY}`
  );

  const data = await response.json();

  res.status(200).json(data);
}
