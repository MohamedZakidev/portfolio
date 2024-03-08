import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default App;
