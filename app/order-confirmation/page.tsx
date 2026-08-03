"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function OrderDetails() {
  const params = useSearchParams();
  const orderId = params.get("orderId");
  const total = params.get("total");

  return (
    <div style={{ textAlign: "center", padding: "80px 24px", fontFamily: "Roboto, sans-serif", color: "#36392d" }}>
      <h1 style={{ fontFamily: "Clash Display, sans-serif", fontSize: 48, marginBottom: 16 }}>
        Order Confirmed!
      </h1>
      <p style={{ fontSize: 18, marginBottom: 8 }}>Order ID: <strong>{orderId}</strong></p>
      <p style={{ fontSize: 18, marginBottom: 40 }}>Total: <strong>${Number(total).toFixed(2)}</strong></p>
      <Link href="/" style={{ padding: "12px 32px", background: "#36392d", color: "#cfd2c6", textDecoration: "none", borderRadius: 8 }}>
        Back to Menu
      </Link>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense>
      <OrderDetails />
    </Suspense>
  );
}
