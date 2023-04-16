import Head from 'next/head'
import Link from 'next/link'
import Section1 from '../components/home/section-1'


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Ahzu Direct Tech LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1 />
      
    </div>
  )
}
