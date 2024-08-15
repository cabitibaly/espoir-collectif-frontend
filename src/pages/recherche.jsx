import Footer from "../components/footer";
import InputSearch from "../components/inputSearch";
import Navbar from "../components/navbar";


const Recherche = () => {
    return (
        <>
            <Navbar other={true} />
            <InputSearch />
            <Footer />
        </>
    );
};
export default Recherche;