/* eslint-disable no-undef */
import Navigation from "./components/Navbar";
import Slidebar from "./components/Slidebar";
import './style/app.css'
// const slider = require("./images/1.jpg");
const icon = require("./images/icons/icon3.png")

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
        <img id="icon" src={icon} alt="" />
      </header>
      <main id="main-container">
        {/* slider */}
        <Slidebar />
        {/* <img src={slider} alt="" /> */}
        {/* gallery */}
        {/* about us */}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
