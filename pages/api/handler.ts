import { NextApiRequest, NextApiResponse } from "next";

// This function can run for a maximum of 900 seconds
export const config = {
  maxDuration: 900,
};
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
