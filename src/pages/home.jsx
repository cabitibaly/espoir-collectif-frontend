import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cagnote from '../components/cagnote';
import Actualite from '../components/actualite';
import WhatIs from '../components/what-is';
import Footer from '../components/footer';

const Home = () => {
    return (
        <>
          <Navbar />
          <Hero />
          <Cagnote />
          <Actualite />
          <WhatIs />
          <Footer />
        </>
    )
};
export default Home;