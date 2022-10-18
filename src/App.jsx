import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import CocktailDetails from "./components/CocktailDetails";
import Cocktails from "./components/Cocktails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-0 sm:p-7">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cocktail/:id" element={<CocktailDetails/>}/>
          <Route exact path="*" element={<Error/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
