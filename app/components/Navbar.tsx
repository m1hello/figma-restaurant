"use client";

import Link from "next/link";
import { useState, useEffect, type MouseEvent } from "react";
import { SignInButton, SignOutButton, useAuth, useClerk } from "@clerk/nextjs";
import styles from "./Navbar.module.css";

interface NavbarProps {
  variant?: "dark" | "light";
  layout?: "default" | "whoAreWe";
  cart?: CartItem[];
  onAddToCart?: (item: Omit<CartItem, "quantity">) => void;
  onRemoveFromCart?: (itemId: string) => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variantId?: string;
}

interface CartWidgetProps {
  cart: CartItem[];
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
  onRemoveFromCart: (itemId: string) => void;
}

export function CartWidget({ cart, onAddToCart, onRemoveFromCart }: CartWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { userId } = useAuth();
  const { openSignIn } = useClerk();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => { setMounted(true); }, []);

  const handleCheckout = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    if (!userId) {
      openSignIn({ redirectUrl: window.location.href });
      return;
    }

    if (cart.length === 0) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    setCheckoutError("");
    setIsCheckingOut(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, userId }),
      });
      const { checkoutUrl } = await response.json();

      if (!response.ok || !checkoutUrl) {
        throw new Error("Unable to create a checkout session.");
      }

      window.location.href = checkoutUrl;
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Unable to create a checkout session.",
      );
      setIsCheckingOut(false);
    }
  };

  return (
    <div className={styles.cartWidget}>
      <button
        className={styles.cartTrigger}
        type="button"
        aria-label="Shopping cart"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {mounted && totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
      </button>
      {isOpen && (
        <div className={styles.cartDropdown} onClick={(e) => e.stopPropagation()}>
          {cart.length === 0 ? (
            <p className={styles.cartEmpty}>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className={styles.cartItem} key={item.id}>
                  <span className={styles.cartItemName}>{item.name}</span>
                  <button type="button" className={styles.cartQuantityButton} onClick={() => onRemoveFromCart(item.id)} aria-label={`Remove one ${item.name}`}>&minus;</button>
                  <span className={styles.cartItemQuantity}>{item.quantity}</span>
                  <button type="button" className={styles.cartQuantityButton} onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })} aria-label={`Add one ${item.name}`}>+</button>
                  <span className={styles.cartItemSubtotal}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className={styles.cartFooter}>
                <button
                  className={styles.checkoutButton}
                  type="button"
                  disabled={isCheckingOut}
                  onClick={handleCheckout}
                >
                  {isCheckingOut ? "OPENING CHECKOUT..." : "CHECKOUT"}
                </button>
                <p className={styles.cartTotal}>Total: ${totalPrice.toFixed(2)}</p>
              </div>
              {checkoutError && <p className={styles.checkoutError}>{checkoutError}</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar({
  variant = "dark",
  layout = "default",
  cart,
  onAddToCart,
  onRemoveFromCart,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const iconColor = variant === "dark" ? "#CFD2C6" : "#36392D";

  const handleEventsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    event.preventDefault();
    const section = document.getElementById("events");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#events");
  };
  const handleMenuClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    event.preventDefault();
    const section = document.getElementById("who-are-we-menu");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#who-are-we-menu");
  };
  const handleTeamClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    event.preventDefault();
    const section = document.getElementById("our-team");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#our-team");
  };
  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    event.preventDefault();
    const section = document.getElementById("footer");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#footer");
  };

  return (
    <nav className={`${styles.navbar} ${styles[variant]} ${styles[layout]}`} aria-label="Primary">
      <div className={styles.navLeft}>
        <button
          className={styles.hamburgerBtn}
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.33334 8.14815C3.33334 7.32995 3.9822 6.66667 4.78261 6.66667H35.2174C36.0178 6.66667 36.6667 7.32995 36.6667 8.14815C36.6667 8.96635 36.0178 9.62963 35.2174 9.62963H4.78261C3.9822 9.62963 3.33334 8.96635 3.33334 8.14815ZM3.33334 20C3.33334 19.1818 3.9822 18.5185 4.78261 18.5185H35.2174C36.0178 18.5185 36.6667 19.1818 36.6667 20C36.6667 20.8182 36.0178 21.4815 35.2174 21.4815H4.78261C3.9822 21.4815 3.33334 20.8182 3.33334 20ZM3.33334 31.8519C3.33334 31.0337 3.9822 30.3704 4.78261 30.3704H35.2174C36.0178 30.3704 36.6667 31.0337 36.6667 31.8519C36.6667 32.6701 36.0178 33.3333 35.2174 33.3333H4.78261C3.9822 33.3333 3.33334 32.6701 3.33334 31.8519Z"
              fill={iconColor}
            />
          </svg>
        </button>
        <Link href="/#who-are-we-menu" className={styles.navLink} onClick={handleMenuClick}>
          Menu
        </Link>
        <Link href="/#our-team" className={styles.navLink} onClick={handleTeamClick}>
          Team
        </Link>
      </div>
      <div
        id="mobile-nav-menu"
        className={`${styles.mobileDropdown} ${isMobileMenuOpen ? styles.mobileDropdownOpen : ""}`}
      >
        <Link href="/#who-are-we-menu" className={styles.mobileDropdownLink} onClick={handleMenuClick}>
          Menu
        </Link>
        <Link href="/#our-team" className={styles.mobileDropdownLink} onClick={handleTeamClick}>
          Team
        </Link>
        <Link href="/#events" className={styles.mobileDropdownLink} onClick={handleEventsClick}>
          Events
        </Link>
        <Link href="/#footer" className={styles.mobileDropdownLink} onClick={handleContactClick}>
          Contact
        </Link>
      </div>

      <div className={styles.navLogo}>
        <Link href="/" className={styles.logoText}>Cibo gustoso</Link>
      </div>

      <div className={styles.navRight}>
        <Link href="/#events" className={styles.navLink} onClick={handleEventsClick}>
          Events
        </Link>
        <Link href="/#footer" className={styles.navLink} onClick={handleContactClick}>
          Contact
        </Link>
        {cart && onAddToCart && onRemoveFromCart && (
          <CartWidget cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
        )}
        {isSignedIn ? (
          <SignOutButton>
            <button className={`${styles.navLink} ${styles.navLinkLang}`}>Sign Out</button>
          </SignOutButton>
        ) : (
          <SignInButton>
            <button className={`${styles.navLink} ${styles.navLinkLang}`}>Sign In</button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}
