
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
          <Link
            to="/"
            className="font-bold text-2xl tracking-tighter text-gradient"
          >
            IndiBikes
          </Link>
        </div>

        <nav
          className={`${
            isMobile
              ? `absolute top-16 left-0 w-full transform transition-transform duration-300 bg-background border-b ${
                  isOpen ? "translate-y-0" : "-translate-y-full"
                }`
              : "flex items-center space-x-4"
          }`}
        >
          <ul
            className={`${
              isMobile
                ? "flex flex-col items-start p-4 space-y-4"
                : "flex items-center space-x-4"
            }`}
          >
            <li>
              <Link
                to="/"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Superbikes
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-2">
          {searchOpen && !isMobile && (
            <div className="animate-fade-in">
              <Input
                type="search"
                placeholder="Search bikes..."
                className="w-[200px]"
              />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
      {searchOpen && isMobile && (
        <div className="container py-2 animate-fade-in">
          <Input type="search" placeholder="Search bikes..." />
        </div>
      )}
    </header>
  );
}
