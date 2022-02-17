import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const response = await fetch(process.env.CNB_RATES_TXT);

    const data = await response.text();
    

    res.setHeader('Content-Type', 'text/plain')
    res.send(data)
  }