import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/contacts.module.css";
import Image from "next/image";
const index = () => {
  return (
    <>
      <Navbar />
      <h1 className={`${styles.mainheading} page`}>This is contact page</h1>
      <Image
        src='https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
        width={300}
        height={200}
      ></Image>
    </>
  );
};

export default index;
