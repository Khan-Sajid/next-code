import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className='ul'>
          <li className='li'>
            <Link href='/'>
              <a>Next JS</a>
            </Link>
          </li>
          <li className='li'>
            <Link href='/home'>
              <a>Home</a>
            </Link>
          </li>
          <li className='li'>
            <Link href='/product'>
              <a>Product</a>
            </Link>
          </li>
          <li className='li'>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className='li'>
            <Link href='/help'>
              <a>Help</a>
            </Link>
          </li>
          <li className='li'>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
          <li className='li'>
            <Link href='/home/hi/sajid'>
              <a>Welcome</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
