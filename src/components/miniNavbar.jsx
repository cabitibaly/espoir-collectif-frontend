import { ChevronLeft, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const MiniNavbar = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setIsConnected(true);
        }
    }, [])

    return (
        <nav className="w-full h-20 p-4 flex items-center justify-around max-750:justify-between">
            <Link to='/' className="flex items-center text-lg transition duration-300 ease-in-out hover:-translate-x-4"><ChevronLeft size={25} strokeWidth={1.5} color="black" /> <p className="max-520:hidden">Accueil</p></Link>
            <span className="font-bold text-xl text-green-700 max-520:text-lg">Assoc-Caritative</span>
            {
                !isConnected ? 
                    <Link to='/login' className="w-28 p-2 border border-solid border-green-800 text-center font-semibold text-white bg-green-800 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black max-520:p-1.5 max-520:w-24 max-520:text-xs">Se connecter</Link>
                    :
                    <Link to='/profile' className={`border border-solid border-gray-300 w-9 h-9 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:border-green-600`}>
                        <User size={25} color="black" strokeWidth={1} />
                    </Link>
            }
            
        </nav>
    );
};
export default MiniNavbar;