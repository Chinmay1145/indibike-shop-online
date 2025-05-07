
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Phantom RR 1200",
    brand: "IndiBike",
    price: 1875000,
    description: "The flagship sports bike from IndiBike, featuring cutting-edge technology and unmatched performance on Indian roads. With its aggressive styling and powerful engine, the Phantom RR 1200 delivers an exhilarating riding experience.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
    specs: {
      engine: "1198 cc",
      power: "202 HP",
      torque: "112 Nm",
      weight: "195 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "18 L",
    },
    colors: ["Red", "Black", "Blue"],
    inStock: true,
  },
  {
    id: "2",
    name: "Street Panther 890",
    brand: "IndiBike",
    price: 1250000,
    description: "A naked street fighter that combines power with everyday usability. Perfect for both city commutes and weekend getaways on winding roads.",
    image: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "naked",
    specs: {
      engine: "890 cc",
      power: "119 HP",
      torque: "93 Nm",
      weight: "187 kg",
      topSpeed: "240 km/h",
      fuelCapacity: "15 L",
    },
    colors: ["Orange", "White", "Black"],
    inStock: true,
  },
  {
    id: "3",
    name: "Voyager GT 1400",
    brand: "IndiBike",
    price: 2100000,
    description: "The ultimate touring machine designed for long-distance comfort without compromising on performance. Equipped with premium features for the discerning tourer.",
    image: "https://images.unsplash.com/photo-1605266862629-c926552aea7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "touring",
    specs: {
      engine: "1400 cc",
      power: "153 HP",
      torque: "136 Nm",
      weight: "334 kg",
      topSpeed: "220 km/h",
      fuelCapacity: "25 L",
    },
    colors: ["Blue", "Gray", "Black"],
    inStock: true,
  },
  {
    id: "4",
    name: "Thunderbolt 650",
    brand: "Lightning Motors",
    price: 850000,
    description: "A versatile middleweight motorcycle that offers an excellent balance of performance, handling, and value. Perfect for riders stepping up from smaller bikes.",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "naked",
    specs: {
      engine: "649 cc",
      power: "82 HP",
      torque: "67 Nm",
      weight: "176 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "14 L",
    },
    colors: ["Yellow", "Black", "Silver"],
    inStock: true,
  },
  {
    id: "5",
    name: "Velocity 600RR",
    brand: "SpeedForce",
    price: 950000,
    description: "A track-focused supersport that brings race technology to the street. Lightweight, powerful, and equipped with advanced electronics.",
    image: "https://images.unsplash.com/photo-1535360392524-0a993a9fa646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "sport",
    specs: {
      engine: "599 cc",
      power: "121 HP",
      torque: "64 Nm",
      weight: "168 kg",
      topSpeed: "265 km/h",
      fuelCapacity: "16 L",
    },
    colors: ["Red", "White", "Black"],
    inStock: true,
  },
  {
    id: "6",
    name: "Horizon ADV 900",
    brand: "ExploreTech",
    price: 1450000,
    description: "An adventure motorcycle built to take you anywhere. Featuring robust construction, long-travel suspension, and all-day comfort.",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    category: "touring",
    specs: {
      engine: "898 cc",
      power: "105 HP",
      torque: "92 Nm",
      weight: "229 kg",
      topSpeed: "210 km/h",
      fuelCapacity: "23 L",
    },
    colors: ["Green", "Gray", "Black"],
    inStock: true,
  },
  {
    id: "7",
    name: "Phoenix 1000R",
    brand: "FireBird",
    price: 1750000,
    description: "A premium litre-class sportbike that offers blistering performance and advanced rider aids. Track-ready yet street-friendly.",
    image: "https://images.unsplash.com/photo-1564396797382-e0321231081a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    category: "sport",
    specs: {
      engine: "999 cc",
      power: "189 HP",
      torque: "103 Nm",
      weight: "198 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "17 L",
    },
    colors: ["Red", "Black", "Silver"],
    inStock: true,
  },
  {
    id: "8",
    name: "Urban Fighter 750",
    brand: "CityRider",
    price: 990000,
    description: "A street-focused naked bike with aggressive styling and nimble handling. Perfect for urban environments and weekend canyon carving.",
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "naked",
    specs: {
      engine: "749 cc",
      power: "113 HP",
      torque: "73 Nm",
      weight: "183 kg",
      topSpeed: "245 km/h",
      fuelCapacity: "15 L",
    },
    colors: ["Blue", "Black", "White"],
    inStock: true,
  },
  {
    id: "9",
    name: "Touring Elite 1300",
    brand: "RoadKing",
    price: 1850000,
    description: "A luxury touring motorcycle designed for comfortable long-distance travel. Features electronically adjustable suspension and integrated luggage.",
    image: "https://images.unsplash.com/photo-1575466599502-39f4a4b075fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "touring",
    specs: {
      engine: "1301 cc",
      power: "160 HP",
      torque: "140 Nm",
      weight: "322 kg",
      topSpeed: "230 km/h",
      fuelCapacity: "28 L",
    },
    colors: ["Black", "Blue", "Silver"],
    inStock: true,
  },
  {
    id: "10",
    name: "Racer X 1100",
    brand: "VelocityX",
    price: 1650000,
    description: "A high-performance superbike that pushes the boundaries of speed and technology. Features aerodynamic winglets and a comprehensive electronics package.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "sport",
    specs: {
      engine: "1103 cc",
      power: "215 HP",
      torque: "112 Nm",
      weight: "192 kg",
      topSpeed: "299 km/h",
      fuelCapacity: "16 L",
    },
    colors: ["Red", "Black", "Carbon"],
    inStock: true,
  },
];

// Generate more products by duplicating and modifying
const generateMoreProducts = () => {
  const moreProducts: Product[] = [];
  const suffixes = ["Pro", "Sport", "Elite", "Ultra", "RS", "GT"];
  const years = ["2023", "2024", "2025"];
  
  for (let i = 11; i <= 55; i++) {
    const baseProduct = products[Math.floor(Math.random() * products.length)];
    
    // Create variations of the base product
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const year = years[Math.floor(Math.random() * years.length)];
    const newName = `${baseProduct.name.split(" ")[0]} ${suffix} ${year}`;
    
    // Randomize price slightly
    const priceFactor = 0.8 + (Math.random() * 0.4); // between 0.8 and 1.2
    
    moreProducts.push({
      ...baseProduct,
      id: `${i}`,
      name: newName,
      price: Math.round(baseProduct.price * priceFactor / 1000) * 1000, // Round to nearest thousand
    });
  }
  
  return moreProducts;
};

// Add more products to the list
export const allProducts = [...products, ...generateMoreProducts()];
