import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";

const App = () => {
  return (
    <div className="overflow-x-hidden text-text-main antialiased">
      <div className="top-0 -z-10 h-full w-full"></div>
      <div className="absolute bg-dark-bg top-0 z-[-2] h-screen w-screen"></div>
      <div className="container mx-auto px-5 max-w-[1000px]">
        <div className="flex flex-col w-full">
          <Hero />
          <FeaturedProject />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
