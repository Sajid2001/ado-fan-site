import Bio from "./Components/Bio";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Music from "./Components/Music";

function App() {
  return (
    <div className="bg-black">
      <Hero/>
      <Bio/>
      <Music/>
      <Footer/>
    </div>
  );
}

export default App;
