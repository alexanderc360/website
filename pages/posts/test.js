import Link from 'next/link';
import Layout from '../../components/layout';
import Nav from '../../components/navBar'


export default function FirstPost() {
  return (
    <Layout>
      <Nav>
      <Link href="/">i like this, wow</Link>
      </Nav>
    </Layout>
  );
}