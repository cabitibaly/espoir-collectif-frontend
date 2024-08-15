import Explication from "../components/explication";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Fonctionnement = () => {
    return (
        <>
            <Navbar other={true} />
            <Explication />
            <Footer />
        </>
    );
};
export default Fonctionnement;