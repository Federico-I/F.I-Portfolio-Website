"strict mode";

import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen bg-blue-200">
      <div className=" self-center bg-gray-200 h-full w-8/12 place-content-stretch">
        <Header />
        <main className="h-full ">
          <Home />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
