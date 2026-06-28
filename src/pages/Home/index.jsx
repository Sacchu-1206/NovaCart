import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import FlashSale from "../../components/home/FlashSale";
import TrendingProducts from "../../components/home/TrendingProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <FlashSale/>
      <Categories />
      <FeaturedProducts />
      <TrendingProducts/>
      <WhyChooseUs />
    </>
  );
};

export default Home;