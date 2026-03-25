// import style Here
import style from "./App.module.css";

// import pages and Components Here
import HomePage from "./pages/home/HomePage";
import Nav from "./layouts/Nav/Nav";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <>
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
