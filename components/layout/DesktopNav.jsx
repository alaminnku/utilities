import Link from "next/link";
import Image from "next/image";
import logo from "@public/layout/logo.png";
import { AiFillGithub } from "react-icons/ai";
import styles from "@styles/layout/DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.desktop_nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="Octib logo" priority />
          </a>
        </Link>
      </div>

      <ul className={styles.navigation}>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>

        <li>
          <Link href="/tech-stack">
            <a>Tech stack</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <div className={styles.github}>
        <a href="https://github.com/alaminnku" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </nav>
  );
}
