import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import styles from "@styles/layout/Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu open and close
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <DesktopNav />
      <MobileMenu isOpen={isOpen} />
      <MobileNav toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
    </header>
  );
}
