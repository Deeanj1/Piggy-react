
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Security from "./components/Security/Security";
import Savings from "./components/Savingsplan/Savings";
import Invest from "./components/Invest/Invest"
import Saver from "./components/Saver/Saver"
import Stories from "./components/Stories/Stories"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="maincontainer">
      <Header />
      <Hero />
      <Security />
      <Savings />
      <Invest />
      <Saver />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
