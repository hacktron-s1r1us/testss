import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.json({
    secret: "admin-api-key-12345",
    database_url: "postgres://admin:s3cret@prod-db:5432/app",
  });
}
