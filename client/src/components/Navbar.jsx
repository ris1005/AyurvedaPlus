import { useEffect, useState } from "react";

const Navbar = ({ isHome }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar 
        ${isHome ? "home-navbar" : "solid-navbar"} 
        ${scrolled ? "scrolled" : ""}
      `}
    >
      <a href="/" className="nav-logo">🌿 AyurVedaPlus</a>

      <div className="nav-links">
        <a href="/guidance" className="btn-nav btn-nav-primary">Get Guidance</a>
        <a href="/post-recovery" className="btn-nav btn-nav-primary">Post Surgery-Recovery</a>
      </div>
    </nav>
  );
};

export default Navbar;
