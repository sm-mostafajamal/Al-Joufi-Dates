import Navbar from "./components/Navbar";
// eslint-disable-next-line no-undef
const slider = require("./images/3.jpg");

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {/* slider */}
        <img src={slider} alt="" />
        {/* gallery */}
        {/* about us */}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
