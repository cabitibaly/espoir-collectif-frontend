import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X, User } from "lucide-react";
import { useEffect, useState} from "react";
import PropTypes from 'prop-types';

const Navbar = ({other = false}) => {
    const [is1090, set1090] = useState(false);
    const [is1250, set1250] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false); 
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setIsConnected(true);
        }
    }, [])
    
    const windowWidth = () => {
        
        window.innerWidth <= 1090 ? set1090(true): set1090(false);

        window.innerWidth <= 1250 ? set1250(true): set1250(false);
    }

    useEffect(() => {

        if(screen.width <= 1090) {
            set1090(true)
        }
        
    }, [])

    const scrollY = () => {
        window.scrollY > 150 ? setIsScroll(true): setIsScroll(false); 
    }

    window.addEventListener('resize', windowWidth)
    window.addEventListener('scroll', scrollY);

    return(
        <nav className={
                other ? 'nav-full-width nav-top-1090': isScroll ? "nav nav-top-1090 nav-top": "nav nav-top-1090"
            }
        > 
            <NavLink to="/recherche" className="flex items-start justify-center gap-2 nav-items nav-items-1250"><Search size={is1250 ? 22:25} color="black" strokeWidth={1} /> <span className={is1090 ? "hidden": ""}>Rechercher</span></NavLink>
            <NavLink to="/a-propos" className={`nav-items nav-items-1250 ${is1090 ? "hidden": ""}`}>A-propos</NavLink>
            <NavLink to="/creer-une-cagnote" className={`nav-items nav-items-1250 ${is1090 ? "hidden": ""}`}>Creer une cagnote</NavLink>
            <NavLink to="/" className="logo logo-1250">Espoir Collectif</NavLink>
            <NavLink to="/comment-ça-marche" className={`nav-items nav-items-1250 ${is1090 ? "hidden": ""}`}>Comment cela fonctionne</NavLink>
            {
                !isConnected ? 
                    <NavLink to="/login" className={`nav-items nav-items-1250 ${is1090 ? "hidden": ""}`}>Se connecter</NavLink> 
                    :
                    <Link to='/profile' className={`border border-solid border-gray-300 w-9 h-9 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:border-green-600 ${is1090 ? "hidden": ""}`}>
                        <User size={25} color="black" strokeWidth={1} />
                    </Link>
            }
            
            <Menu size={25} color="black" strokeWidth={1} 
                onClick={() => setIsOpen(!isOpen)} 
                className={is1090 ? "flex":"hidden" } 
            />
            
            {isOpen && (
                <div className="absolute top-0 left-0 bg-white w-screen h-screen flex items-start justify-start flex-col gap-4 p-20 max-520:p-10">
                    <X size={35} strokeWidth={1} 
                        className="cursor-pointer absolute right-5 top-4"
                        onClick={() => setIsOpen(false)}
                    />
                    <NavLink to="/" className="logo">Espoir Collectif</NavLink>
                    <NavLink to="/a-propos" className="nav-items">A propos</NavLink>
                    <NavLink to="/creer-une-cagnote" className="nav-items">Creer une cagnote</NavLink>
                    <NavLink to="/comment-ça-marche" className="nav-items">Comment cela fonctionne</NavLink>
                    {
                        !isConnected ? 
                            <NavLink to="/login" className="nav-items nav-items-1250">Se connecter</NavLink> 
                            :
                            <Link to='/profile' className="border border-solid border-gray-300 w-9 h-9 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:border-green-600">
                                <User size={25} color="black" strokeWidth={1} />
                            </Link>
                    }
                </div>
            )}
        </nav>
    );
}

Navbar.propTypes = {
    other: PropTypes.bool
}

export default Navbar;