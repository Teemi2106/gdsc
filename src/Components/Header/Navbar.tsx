import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = ["About", "Services", "Team", "Contact"];

  return (
    <>
      {/* Desktop/iPad Navigation */}
      <nav className="desktop-nav">
        <ul className="flex justify-around gap-8 text-gray-700">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-900 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button
          onClick={toggleMenu}
          className="hamburger-btn"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Offcanvas Menu Overlay */}
      <div
        ref={overlayRef}
        className={`offcanvas-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Offcanvas Menu */}
      <div
        ref={mobileMenuRef}
        className={`offcanvas-menu ${isMenuOpen ? "active" : ""}`}
      >
        <button
          onClick={closeMenu}
          className="close-btn"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <nav role="navigation" aria-label="Mobile navigation">
          <ul>
            {navItems.map((item, index) => (
              <li key={item}>
                <button
                  onClick={closeMenu}
                  className="mobile-menu-item"
                  type="button"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
