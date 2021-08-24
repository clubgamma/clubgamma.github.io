import React from "react";

import styles from "./AboutUs.module.css";
import AppPage from "./AppPage/AppPage";
import AboutPage from "./AboutPage/AboutPage";
import SpecialAboutUs from "./SpecialAboutUs/SpecialAboutUs";

const aboutUs = (props) => (
  <div  className={styles.aboutUs}>
    <AppPage />
    <section id="aboutUs">
      <AboutPage />
    </section>
    <SpecialAboutUs />
  </div>
);

export default aboutUs;
