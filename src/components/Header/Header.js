import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">Site Test</Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            Login
            {/* <a href="https://github.com/colbyfayock/next-leaflet-starter" rel="noreferrer">
              <FaGithub />
            </a> */}
          </li>
          <li>Register</li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
