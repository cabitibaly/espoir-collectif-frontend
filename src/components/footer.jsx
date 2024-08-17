import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="border-t border-solid border-black w-full bg-white">
            <div className="mx-auto w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <span className="self-center text-2xl text-green-700 font-semibold whitespace-nowrap">Espoir Collectif</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Lien Utiles</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Acceuil</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/a-propos" className="hover:underline">A propos</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/creer-une-cagnote" className="hover:underline">Créer une cagnote</Link>
                                </li>
                                <li>
                                    <Link to="/comment-ça-marche" className="hover:underline">Comment fonctionne Espoir Collectif</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <span className="hover:underline">Politique de confidencialité</span>
                                </li>
                                <li>
                                    <span className="hover:underline">Termes &amp; Conditions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-center">
                <span className="text-sm text-center text-gray-500 dark:text-gray-400">© 2024 <Link to="" className="hover:underline">Espoir Collectif</Link>. Tous droits reservés.</span>                
            </div>
            </div>
        </footer>
    );
};
export default Footer;