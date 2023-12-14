import { NextApiRequest, NextApiResponse } from "next";

export const maxDuration = 60;

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
