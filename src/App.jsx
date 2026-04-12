// import style Here
import style from "./App.module.css";

// import pages and Components Here
import HomePage from "./pages/home/HomePage";
import Nav from "./layouts/Nav/Nav";
import Footer from "./layouts/Footer/Footer";
// import { Helmet } from "react-helmet-async";

import logo from "./assets/kwl-logo.png";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>

      <section className={style.containeer}>
        <Nav />
        <section className={style.pageSection}>
          <HomePage />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default App;
