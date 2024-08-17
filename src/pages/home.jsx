import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cagnote from '../components/cagnote';
import CommentUtiliser from '../components/commentUtiliser';
import WhatIs from '../components/what-is';
import Footer from '../components/footer';

const Home = () => {
    return (
        <>
          <Navbar />
          <Hero />
          <Cagnote />
          <CommentUtiliser />
          <WhatIs />
          <Footer />
        </>
    )
};
export default Home;