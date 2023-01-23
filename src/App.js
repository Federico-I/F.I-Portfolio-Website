"strict mode";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
