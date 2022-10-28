/* eslint-disable no-undef */
import Navigation from "./components/Navbar";
import Slidebar from "./components/Slidebar";
import Cards from "./components/Cards";
import AboutUs from "./components/AboutUs";
import './style/app.css'
// const slider = require("./images/1.jpg");
// const logo = require("./images/icons/logo.png")
function App() {
  return (
    <div id="container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <header>
        <Navigation />
        <h1 id="logo">Al-Joufi Dates Logo</h1>
        {/* <img id="icon" src={logo} alt="Al Joufi Dates logo" /> */}
      </header>
      <main id="main-container">
        <Slidebar/>
        <h1 className="sectionHeadline">Dates Catagory</h1>
        <Cards />
        <h1 className="sectionHeadline">About Us</h1>
        <AboutUs />
      </main>
      <footer>
        <h1>Call Us</h1>
        <h1>+966 551007068</h1>
        <h3>Address: Al Ula ,Al Madina Munaoara, Kindom of Saudi Arabia.</h3>
      </footer>
    </div>
  );
}

export default App;
