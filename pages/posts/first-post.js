import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

function navBar() {
    return <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h2>
            <Link href="/">link</Link>
        </h2>
        <h2>

            <Link href="test">um</Link>
        </h2>
    </Layout>
}

export default navBar