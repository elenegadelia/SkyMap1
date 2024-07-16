"use client";

import Head from 'next/head';
import { useRef } from 'react';
import FlightDetails from './components/flightDetails/FlightDetails';
import Header from './components/header/Header';
import styles from './page.module.css';
import AviationTrends from './components/aviationTrends/AviationTrends';
import dynamic from 'next/dynamic';

const RealTimeFlightMap = dynamic(() => import('./components/realTimeFlightMap/RealTimeFlightMap'), { ssr: false });

export default function Home() {
  const flightDetailsRef = useRef();

  const handleLogoClick = () => {
    if (flightDetailsRef.current) {
      flightDetailsRef.current.resetState();
    }
  };

  return (
    <div className={styles.backgroundWrapper}>
      <Head>
        <title>SkyMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onLogoClick={handleLogoClick} />
      <div className={styles.contentWrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.headerText}>
            <h1 className={styles.headerTitle}>SkyMap</h1>
            <p className={styles.headerSubtitle}>
              Track your flight, accurate, <br /> 
              actionable data and insights <br /> 
              that inform every aviation decision.
            </p>
          </div>
          <div className={styles.flightDetailsContainer}>
            <FlightDetails ref={flightDetailsRef} />
          </div>
        </div>
        
        <RealTimeFlightMap />
        <AviationTrends />
      </div>
    </div>
  );
}
