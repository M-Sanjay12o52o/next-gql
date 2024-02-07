import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;

  console.log("body: ", body);
  console.log("cookies: ", req.cookies);
  console.log("req.cookies.cookie: ", req.cookies.cookie);

  res.status(200).end();
};

export default handler;
