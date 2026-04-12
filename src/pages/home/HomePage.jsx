import { Helmet } from "react-helmet";
import HeroSection from "../../components/Home/HeroSection";
import style from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>KWL React Project Template</title>
      </Helmet>
      <section className={style.HeroSection}>
        <HeroSection />
      </section>
    </>
  );
}
