import FeatureSection from "./components/FeatureSection";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
