import Banner from "./Components/Banner";
import Bio from "./Components/Bio";
import Footer from "./Components/Footer";
import Music from "./Components/Music";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Banner/>
      <Bio/>
      <Music/>
      <Footer/>
    </div>
  );
}

export default App;
