
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  category: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    weight: string;
    topSpeed: string;
    fuelCapacity: string;
  };
  colors: string[];
  inStock: boolean;
}
