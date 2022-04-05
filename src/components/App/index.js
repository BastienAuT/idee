import { Routes, Route } from "react-router-dom";

import Header from "../Header";
import Banner from "../Banner";
import Navbar from "../Navbar";
import Home from '../Home';
import Projets from '../Projets';

import Footer from "../Footer";
import Cv from "../Cv";


import "./styles.scss";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
