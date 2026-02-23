"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import styles from "./Footer.module.css";

function FacebookIcon() {
  return (
    <svg width="40" height="40" viewBox="856 192 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M889.667 209.042C889.667 199.819 882.2 192.333 873 192.333C863.8 192.333 856.333 199.819 856.333 209.042C856.333 217.129 862.067 223.862 869.667 225.416V214.054H866.333V209.042H869.667V204.865C869.667 201.64 872.283 199.017 875.5 199.017H879.667V204.029H876.333C875.417 204.029 874.667 204.781 874.667 205.7V209.042H879.667V214.054H874.667V225.667C883.083 224.831 889.667 217.714 889.667 209.042Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="40" height="40" viewBox="920 192 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M937 192.333C941.528 192.333 942.093 192.35 943.87 192.433C945.645 192.517 946.853 192.795 947.917 193.208C949.017 193.632 949.943 194.205 950.87 195.13C951.717 195.963 952.373 196.971 952.792 198.083C953.203 199.145 953.483 200.355 953.567 202.13C953.645 203.907 953.667 204.472 953.667 209C953.667 213.528 953.65 214.093 953.567 215.87C953.483 217.645 953.203 218.853 952.792 219.917C952.374 221.03 951.719 222.038 950.87 222.87C950.037 223.717 949.029 224.373 947.917 224.792C946.855 225.203 945.645 225.483 943.87 225.567C942.093 225.645 941.528 225.667 937 225.667C932.472 225.667 931.907 225.65 930.13 225.567C928.355 225.483 927.147 225.203 926.083 224.792C924.971 224.374 923.963 223.718 923.13 222.87C922.282 222.037 921.627 221.029 921.208 219.917C920.795 218.855 920.517 217.645 920.433 215.87C920.355 214.093 920.333 213.528 920.333 209C920.333 204.472 920.35 203.907 920.433 202.13C920.517 200.353 920.795 199.147 921.208 198.083C921.625 196.97 922.281 195.962 923.13 195.13C923.963 194.282 924.971 193.626 926.083 193.208C927.147 192.795 928.353 192.517 930.13 192.433C931.907 192.355 932.472 192.333 937 192.333ZM937 200.667C934.79 200.667 932.67 201.545 931.107 203.108C929.545 204.67 928.667 206.79 928.667 209C928.667 211.21 929.545 213.33 931.107 214.893C932.67 216.456 934.79 217.333 937 217.333C939.21 217.333 941.33 216.456 942.893 214.893C944.455 213.33 945.333 211.21 945.333 209C945.333 206.79 944.455 204.67 942.893 203.108C941.33 201.545 939.21 200.667 937 200.667ZM947.833 200.25C947.833 199.698 947.614 199.168 947.223 198.777C946.832 198.386 946.303 198.167 945.75 198.167C945.197 198.167 944.668 198.386 944.277 198.777C943.886 199.168 943.667 199.698 943.667 200.25C943.667 200.803 943.886 201.333 944.277 201.723C944.668 202.114 945.197 202.333 945.75 202.333C946.303 202.333 946.832 202.114 947.223 201.723C947.614 201.333 947.833 200.803 947.833 200.25ZM937 204C938.326 204 939.598 204.527 940.536 205.465C941.473 206.402 942 207.674 942 209C942 210.326 941.473 211.598 940.536 212.536C939.598 213.473 938.326 214 937 214C935.674 214 934.402 213.473 933.464 212.536C932.527 211.598 932 210.326 932 209C932 207.674 932.527 206.402 933.464 205.465C934.402 204.527 935.674 204 937 204Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="40" height="40" viewBox="984 196 34 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1017.67 199C1016.44 199.583 1015.12 199.967 1013.75 200.15C1015.15 199.267 1016.23 197.867 1016.74 196.183C1015.42 197.017 1013.95 197.6 1012.41 197.933C1011.15 196.5 1009.38 195.667 1007.37 195.667C1003.63 195.667 1000.57 198.867 1000.57 202.817C1000.57 203.383 1000.63 203.933 1000.75 204.45C995.073 204.15 990.022 201.3 986.66 196.983C986.07 198.033 985.736 199.267 985.736 200.567C985.736 203.05 986.931 205.25 988.779 206.5C987.648 206.5 986.596 206.167 985.672 205.667V205.717C985.672 209.183 988.03 212.083 991.153 212.733C990.15 213.02 989.098 213.06 988.078 212.85C988.511 214.271 989.358 215.514 990.501 216.405C991.645 217.296 993.026 217.789 994.451 217.817C992.035 219.817 989.04 220.899 985.959 220.883C985.417 220.883 984.875 220.85 984.333 220.783C987.361 222.817 990.962 224 994.818 224C1007.37 224 1014.27 213.1 1014.27 203.65C1014.27 203.333 1014.27 203.033 1014.26 202.717C1015.6 201.717 1016.74 200.45 1017.67 199Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="40" height="40" viewBox="1048 197 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1061.67 214L1070.32 209L1061.67 204V214ZM1080.93 200.95C1081.15 201.733 1081.3 202.783 1081.4 204.117C1081.52 205.45 1081.57 206.6 1081.57 207.6L1081.67 209C1081.67 212.65 1081.4 215.333 1080.93 217.05C1080.52 218.55 1079.55 219.517 1078.05 219.933C1077.27 220.15 1075.83 220.3 1073.63 220.4C1071.47 220.517 1069.48 220.567 1067.65 220.567L1065 220.667C1058.02 220.667 1053.67 220.4 1051.95 219.933C1050.45 219.517 1049.48 218.55 1049.07 217.05C1048.85 216.267 1048.7 215.217 1048.6 213.883C1048.48 212.55 1048.43 211.4 1048.43 210.4L1048.33 209C1048.33 205.35 1048.6 202.667 1049.07 200.95C1049.48 199.45 1050.45 198.483 1051.95 198.067C1052.73 197.85 1054.17 197.7 1056.37 197.6C1058.53 197.483 1060.52 197.433 1062.35 197.433L1065 197.333C1071.98 197.333 1076.33 197.6 1078.05 198.067C1079.55 198.483 1080.52 199.45 1080.93 200.95Z" />
    </svg>
  );
}

export default function Footer() {
  const handleEventsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("events");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#events");
  };
  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("footer");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#footer");
  };

  return (
    <footer id="footer" className={styles.footer} aria-label="Footer">
      <div className={styles.inner}>
        <nav className={styles.navItems} aria-label="Footer navigation">
          <Link href="/#who-are-we-menu" className={styles.navLink}>Menu</Link>
          <Link href="/#our-team" className={styles.navLink}>Team</Link>
          <Link href="/#events" className={styles.navLink} onClick={handleEventsClick}>
            Events
          </Link>
          <Link href="/#footer" className={styles.navLink} onClick={handleContactClick}>
            Contact
          </Link>
        </nav>

        <p className={styles.newsletterLabel}>Sign up to our newsletter</p>
        <div className={styles.newsletterField}>Email</div>
        <p className={styles.newsletterCredit}>Figma Design by Sakilaapokharel (Figma Community)</p>

        <Link href="/" className={styles.logo}>Cibo gustoso</Link>

        <div className={styles.social} aria-label="Social links">
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="YouTube">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
