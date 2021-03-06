import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { client } from '../utils/ShopifyClient'

export default function Home(props) {
  const {products,infos} = props
  console.log(infos);
  return (
    <div>
      <Head>
        <title>{infos?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        this is index content
      </main>
    </div>
  )
}
// export const getServerSideProps = async (context) => {
//   const products = await client.product.fetchAll(); // Fetch product
//   const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
//   const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
//   return {
//    props: {
//    infos: JSON.parse(JSON.stringify(infos)),
//    policies: JSON.parse(JSON.stringify(policies)),
//    products: JSON.parse(JSON.stringify(products)),
//   },
//  };
// };