import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { cart }: { cart: CartItem[] } = await req.json();

  if (!cart || cart.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderId = `ORD-${Date.now()}`;

  // TODO: save order to database here

  return NextResponse.json({
    checkoutUrl: `/order-confirmation?orderId=${orderId}&total=${total}`,
  });
}
