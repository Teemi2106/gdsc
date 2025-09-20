import "./App.css";
import "./mobile-responsive.css";
import Extra from "./Components/Extra/Extra";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Little from "./Components/Little/Little";
import Organic from "./Components/Organic/Organic";
import Wellbeing from "./Components/Wellbeing/Wellbeing";

function App() {
  return (
    <div className="App overflow-x-hidden flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Wellbeing />
        <Organic />
        <Little />
        <Extra />
      </main>
      <Footer />
    </div>
  );
}

export default App;
