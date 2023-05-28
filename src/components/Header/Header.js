import Link from 'next/link';
import Container from '@components/Container';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link legacyBehavior href="/">
            Home
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link legacyBehavior href="/">
              Home
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/register">
              Register
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
