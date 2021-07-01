import styles from '../../styles/Emko.module.css'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props: { emkos: data }
    };
}

const Emko = ({ emkos }) => {
    return (
        <>
            <Head>
                <title>Emko List | EmkoList</title>
                <meta name="keywords" content="About" />
            </Head>
            <div>
                <h1>All Emkos</h1>
                {emkos.map(emko => (
                    <Link href={'/emko/' + emko.id} key={emko.id}>
                        <a className={styles.single}>
                            <h3>{emko.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Emko;