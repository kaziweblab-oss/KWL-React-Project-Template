import style from "./HeroSection.module.css";
import kwlLogo from "../../assets/kwl-logo.png";

export default function HeroSection() {
  return (
    <>
      <h2 className={style.sectionTitle}>
        Welcome to KTH React Project Template
      </h2>
      <img src={kwlLogo} alt="kwl-Logo" />
    </>
  );
}
