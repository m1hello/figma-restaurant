import { NextResponse } from "next/server";

export async function GET() {
  const PRODUCT_ID = process.env.LEMON_SQUEEZY_PRODUCT_ID;
  const API_KEY = process.env.LEMON_SQUEEZY_API_KEY;

  console.log("PRODUCT_ID:", PRODUCT_ID);
  console.log("API_KEY exists:", !!API_KEY);

  if (!PRODUCT_ID) {
    return NextResponse.json(
      { error: "Missing LEMON_SQUEEZY_PRODUCT_ID env variable" },
      { status: 500 }
    );
  }

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Missing LEMON_SQUEEZY_API_KEY env variable" },
      { status: 500 }
    );
  }

  const res = await fetch(
    `https://api.lemonsqueezy.com/v1/variants?filter[product_id]=${PRODUCT_ID}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    }
  );

  const json = await res.json();
  console.log("LS response status:", res.status);
  console.log("LS response body:", JSON.stringify(json));

  if (!res.ok) {
    return NextResponse.json(
      { error: json.errors?.[0]?.detail ?? "Failed to fetch variants" },
      { status: res.status }
    );
  }

  const variants = json.data.map((v: { id: string; attributes: { name: string; price: number } }) => ({
    id: v.id,
    name: v.attributes.name,
    price: v.attributes.price,
  }));

  return NextResponse.json({ variants });
}
