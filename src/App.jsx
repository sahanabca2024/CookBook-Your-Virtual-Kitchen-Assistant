import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndianRecipeGallery from "./assets/indian.jsx";
import ChineseRecipeGallery from "./assets/chinese.jsx";
import MexicanRecipeGallery from "./assets/mexican.jsx";
import ItalianRecipeGallery from "./assets/italian.jsx";
import JapaneseRecipeGallery from "./assets/japanese.jsx";
import ThaiRecipeGallery from "./assets/thai.jsx";
import SpanishRecipeGallery from "./assets/spanish.jsx";
import FrenchRecipeGallery from "./assets/french.jsx";

function About() {
  return (
    <section className="section" id="about">
      <h2>About Us</h2>
      <div className="about">
        <p>
          Welcome to <b>Cookbook</b> – your ultimate destination for mouthwatering recipes, diverse cuisines,
          and expert cooking insights. Whether you are an aspiring cook or a seasoned chef, we have something
          to inspire everyone.
        </p>
      </div>
    </section>
  );
}

// New Contact component
function Contact() {
  return (
    <footer id="contact">
      <p>
        📧 Contact us at:{" "}
        <a href="mailto:info@cookbook.com">info@cookbook.com</a> | © 2025 Cookbook
      </p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div>
          <nav className="navbar">
          <span className="logo">Cookbook</span>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="hero">
          <h1>Welcome to the Cookbook</h1>
        </header>

        <div className="section">
          <h2>Cuisines</h2>
          <div className="cuisines-container">
            <div className="cuisine-card">
              <Link to="/indian">
                <img src="https://t3.ftcdn.net/jpg/02/57/21/40/360_F_257214005_63auIfr9KN0gTHt28w6G8hoP2k45ScyP.jpg" alt="Indian" />
                <h3>Indian</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/chinese">
                <img src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=" alt="Chinese" />
                <h3>Chinese</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/mexican">
                <img src="https://t4.ftcdn.net/jpg/03/14/02/73/360_F_314027363_l7ryiD9Hp8lKy0CkfIoAtsmTv7GXvY5W.jpg" alt="Mexican" />
                <h3>Mexican</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/italian">
                <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-assortment_23-2149141339.jpg" alt="Italian" />
                <h3>Italian</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/japanese">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/6b/51/9a/kurazushi-japanese-food.jpg?w=900&h=500&s=1" alt="Japanese" />
                <h3>Japanese</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/thai">
                <img src="https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg" alt="Thai" />
                <h3>Thai</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/spanish">
                <img src="https://t3.ftcdn.net/jpg/01/99/21/38/360_F_199213830_3nPpEuLyGq0bq7fCNPiqqr2IOddloO2h.jpg" alt="Spanish" />
                <h3>Spanish</h3>
              </Link>
            </div>
            <div className="cuisine-card">
              <Link to="/french">
                <img src="https://media.istockphoto.com/id/962472932/photo/rustic-style-dinner-with-cheese-platter.jpg?s=612x612&w=0&k=20&c=MV6E1UuLmHjVzoAFkGlI0yG-59z5cK7kFC6oLRjESqs=" alt="French" />
                <h3>French</h3>
              </Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/indian" element={<IndianRecipeGallery />} />
          <Route path="/chinese" element={<ChineseRecipeGallery />} />
          <Route path="/mexican" element={<MexicanRecipeGallery />} />
          <Route path="/italian" element={<ItalianRecipeGallery />} />
          <Route path="/japanese" element={<JapaneseRecipeGallery />} />
          <Route path="/thai" element={<ThaiRecipeGallery />} />
          <Route path="/spanish" element={<SpanishRecipeGallery />} />
          <Route path="/french" element={<FrenchRecipeGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
