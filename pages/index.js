import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emko List | Home</title>
        <meta name="keywords" content="emko" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae non tempora earum ad. Totam adipisci dignissimos asperiores tempore rem nam at aperiam, quia perspiciatis explicabo, voluptatum modi et possimus alias!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae non tempora earum ad. Totam adipisci dignissimos asperiores tempore rem nam at aperiam, quia perspiciatis explicabo, voluptatum modi et possimus alias!</p>
        <Link href="/emko">
          <a className={styles.btn}>See Emko Listing</a>
        </Link>
      </div>
    </>
  )
}
