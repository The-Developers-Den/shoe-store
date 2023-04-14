import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";

export default function App({ Component, pageProps }: AppProps) {
  // const myStore = createStore(store);

  return (
    <>
      <Head>
        <title>Nike Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
