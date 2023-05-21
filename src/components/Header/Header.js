import Link from 'next/link';
import Container from '@components/Container';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">Home</Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About Us</Link>
          </li>
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/Register">Register</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
