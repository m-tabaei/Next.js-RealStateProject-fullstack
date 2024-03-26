"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

import styles from "@/layout/Header.module.css";

function Header() {
  const { data } = useSession();
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/buy-residential">commercials </Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className="styles.login">
          <Link href="/dashboard">
            <FaUserAlt />
          <span>  
           User Panel   </span>
          </Link>
        </div>
      ) : (
        <div className="styles.login">
          <Link href="/signin">
            <FiLogIn />
            <span>Login</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
