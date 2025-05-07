
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeatureSection from "@/components/FeatureSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
