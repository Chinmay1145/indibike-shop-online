
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="product-card group">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="product-details">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-lg line-clamp-1 mb-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-1">
          {product.brand}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg flex items-center">
            <span className="text-sm text-muted-foreground mr-1">₹</span>
            {product.price.toLocaleString('en-IN')}
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => addToCart(product)}
            className="h-8 w-8 p-0"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
