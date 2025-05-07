
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-bold text-xl text-gradient">
              IndiBikes
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Premium superbikes for the Indian enthusiast. Quality, performance, and style.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground">
                  All Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=sport" className="text-muted-foreground hover:text-foreground">
                  Sport Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=touring" className="text-muted-foreground hover:text-foreground">
                  Touring Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=naked" className="text-muted-foreground hover:text-foreground">
                  Naked Bikes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/service-centers" className="text-muted-foreground hover:text-foreground">
                  Service Centers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-muted-foreground hover:text-foreground">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <p>© 2025 IndiBikes. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground">
              Facebook
            </Link>
            <Link to="#" className="hover:text-foreground">
              Instagram
            </Link>
            <Link to="#" className="hover:text-foreground">
              Twitter
            </Link>
            <Link to="#" className="hover:text-foreground">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
