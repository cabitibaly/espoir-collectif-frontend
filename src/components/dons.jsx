import { X, HandHeart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Dons = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    useEffect(() => {
        clicked ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
      }, [clicked]);

    return (
        <div className={ clicked ? 'hidden' : "w-full h-screen z-50 absolute top-0 left-0 bg-black-transparent flex items-center justify-center"}>
            <div className="w-1/3 max-h-650 p-4 bg-white flex items-center justify-start flex-col gap-4 relative max-1250:w-2/4 max-750:w-4/5">
                <span className="self-start font-bold text-2xl tracking-wider text-black">Dons(10)</span>
                <X 
                    onClick={handleClick}
                    size={35} 
                    color="black" 
                    strokeWidth={1.5} 
                    className="absolute top-3 right-5 cursor-pointer" 
                />
                <div className="overflow-auto w-full flex items-center justify-center flex-col gap-4">
                    <div className='w-full mt-4 flex items-start gap-4'>
                        <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center max-520:w-10 max-520:h-10'>
                            <HandHeart size={ window.innerWidth <= 750 ? 25 : 30} strokeWidth={1.5} />
                        </div>
                        <div className='w-full'>
                            <span className="font-normal text-dark text-base max-520:text-sm">Alison Smith</span>
                            <div className='w-full flex items-center justify-'>
                                <span className="font-semibold text-gray-fill text-base max-520:text-sm">100 FCFA</span>                              
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-4 flex items-start gap-4'>
                        <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center max-520:w-10 max-520:h-10'>
                            <HandHeart size={ window.innerWidth <= 750 ? 25 : 30} strokeWidth={1.5} />
                        </div>
                        <div className='w-full'>
                            <span className="font-normal text-dark text-base max-520:text-sm">Alison Smith</span>
                            <div className='w-full flex items-center justify-'>
                                <span className="font-semibold text-gray-fill text-base max-520:text-sm">100 FCFA</span>                              
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/cagnote/detail/id/soutenir' className="w-full p-2 text-center text-lg font-semibold text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:scale-95">Je soutiens</Link>
            </div>
        </div>
    );
};
export default Dons;