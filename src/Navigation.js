import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrollOffSet, setScrollOffSet] = useState(0);

  useEffect(() => {
    let handler = (e) => setScrollOffSet(window.scrollY);
    window.addEventListener("scroll", handler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  let headerAlpha = Math.min(0.5, scrollOffSet / 300);
  let menuBrightness = Math.min(255, scrollOffSet);

  return (
    <header
      className="main-header"
      style={{ background: `rgba(0,0,0,${headerAlpha})` }}
    >
      <div className="main-header-logo">
        <a href="#top">B.</a>
      </div>
      <nav className="main-nav">
        <ul
          className="main-nav-list"
          style={{
            color: `rgb(${menuBrightness}, ${menuBrightness}, ${menuBrightness})`,
          }}
        >
          <li>
            <Link href="/#featured-projects">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className="hide">
            <Link href="/#about">
              <a>About</a>
            </Link>
          </li>
          <li className="hide">
            <a href="/beth.pdf">Resume</a>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="hide">
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
