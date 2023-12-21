import fetch from "node-fetch";
import { config } from "dotenv";
config();

async function main() {
  const body = {
    email: process.env.EMAIL_ADDRESS,
    chain: "ethereum",
  };

  const response = await fetch(
    `https://staging.crossmint.com/api/v1-alpha1/wallets`,
    {
      method: "POST",
      headers: {
        "X-PROJECT-ID": process.env.X_PROJECT_ID,
        "X-CLIENT-SECRET": process.env.X_CLIENT_SECRET,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const wallet = await response.json();
  console.log(wallet);
}

main();
