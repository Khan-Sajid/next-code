import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/404.module.css";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      <h1 className={styles.mainheading}>Sorry! No page Found.</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back to next js page
      </button>
      <Link href='/'>
        <a>Back to next js page</a>
      </Link>
    </>
  );
};

export default ErrorPage;
