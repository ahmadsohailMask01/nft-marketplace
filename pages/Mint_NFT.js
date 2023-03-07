import React from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Mint_NFT.module.css";
import { Button } from "web3uikit";

export default function Mint_NFT() {
  return (
//     <div className={styles.container}>
//       <Head>
//         <title>Drag And Drop File Upload</title>
//         <meta name="description" content="Nextjs drag and drop file upload" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>Drag And Drop File Upload</h1>
//         <DropZone />
//       </main>

//       <footer className={styles.footer}>
//         <div>{new Date().getFullYear()}</div>
//       </footer>
//     </div>
    <div className={styles.container}>
          <div className={styles.flexing}>
            <label style={{fontSize:`50px`, color:`white`, fontWeight:`700`, marginBottom:`10%`}}>Mint Your NFT!</label>
            <input className={styles.input} type="text" autoFocus={true} autoSave={true} placeholder="Collection Name" title="Please enter the name of your collection"></input>
            <input className={styles.input} type="text" autoFocus={true} autoSave={true} placeholder="Art Name" title="Please enter the name of your Art"></input>
            <input className={styles.input} type="text" autoFocus={true} autoSave={true} placeholder="Creater or Owned by" title="Please enter the name of Creater (May be you)"></input>
            <input className={styles.input} type="text" autoFocus={true} autoSave={true} placeholder="Price in ETH" title="Enter price in ETH or any other Crypto"></input>
            <input className={styles.input} type="text" autoFocus={true} autoSave={true} placeholder="Description of Art" title="Enter description"></input>
            <input className={styles.btn} autoFocus={true}  data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit" value="Mint it!" title="Let's mint it"></input>
          </div>
    </div>
  );
}