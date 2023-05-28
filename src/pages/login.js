import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

export default function LoginPage() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Create mapping apps with Next.js Leaflet Starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Login</h1>

          <p className={styles.description}>
            <code className={styles.code}>yarn create next-app -e</code>
          </p>

          <p className={styles.view}>
            <Button href="/">Login</Button>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
