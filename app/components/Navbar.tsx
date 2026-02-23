"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  variant?: "dark" | "light";
  layout?: "default" | "whoAreWe";
}

export default function Navbar({ variant = "dark", layout = "default" }: NavbarProps) {
  const iconColor = variant === "dark" ? "#CFD2C6" : "#36392D";
  const handleEventsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("events");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#events");
  };
  const handleMenuClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("who-are-we-menu");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#who-are-we-menu");
  };
  const handleTeamClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("our-team");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#our-team");
  };
  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("footer");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#footer");
  };

  return (
    <nav className={`${styles.navbar} ${styles[variant]} ${styles[layout]}`} aria-label="Primary">
      <div className={styles.navLeft}>
        <button className={styles.hamburgerBtn} type="button" aria-label="Open menu">
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
        <Link href="#" className={`${styles.navLink} ${styles.navLinkLang}`}>EN</Link>
      </div>
    </nav>
  );
}
