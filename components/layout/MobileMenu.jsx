import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { GrServices, GrMoney } from "react-icons/gr";
import { RiArticleFill, RiGroupLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { MdPhoneInTalk } from "react-icons/md";
import styles from "@styles/layout/MobileMenu.module.css";

export default function MobileMenu({ isOpen }) {
  // Disable body scroll if MobileMenu is open
  useEffect(() => {
    const body = document.querySelector("body");

    isOpen ? (body.style.overflow = "hidden") : (body.style.overflow = null);
  });

  return (
    <div className={`${styles.mobile_menu} ${isOpen && styles.open}`}>
      <ul className={styles.nav_items}>
        <li>
          <a className={styles.WhatsApp} href="/hello" target="_blank">
            <BsWhatsapp />
            WhatsApp Us
          </a>
        </li>

        <li>
          <Link href="/services">
            <a>
              <GrServices />
              Services
            </a>
          </Link>
        </li>

        <li>
          <Link href="/portfolio">
            <a>
              <AiTwotoneFolderOpen />
              Portfolio
            </a>
          </Link>
        </li>

        <li>
          <Link href="/tools">
            <a>
              <VscTools />
              Tools
            </a>
          </Link>
        </li>

        <li>
          <Link href="/about-us">
            <a>
              <RiGroupLine />
              About Us
            </a>
          </Link>
        </li>

        <li>
          <Link href="/insights">
            <a>
              <RiArticleFill />
              Insights
            </a>
          </Link>
        </li>

        <li>
          <Link href="/contact-us">
            <a>
              <MdPhoneInTalk />
              Contact Us
            </a>
          </Link>
        </li>

        <li>
          <Link href="/request-a-quote">
            <a>
              <GrMoney />
              Request a Quote
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
