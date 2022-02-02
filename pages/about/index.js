import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/about.module.css";
import Image from "next/image";
const index = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainheading}>This is About page</h1>
        <Image src='/images.jpg' width={300} height={200} alt='image'></Image>
      </div>
    </>
  );
};

export default index;
