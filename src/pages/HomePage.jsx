import ImageSlider from "../components/ImageSlider";
import Feature from "../components/Feature";
import Overview from "../components/Overwive";

const HomePage = () => {
  return (
    <main className="max-w-[1200px] mx-auto">
      <ImageSlider />
      <Feature />
      <Overview />
    </main>
  );
};

export default HomePage;
