import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInformation = () => {
    const navigate = useNavigate();
    const [userInformation, setUserInformation] = useState({});

    const getUserInformation = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/user/', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        });
        const data = await res.json();
        console.log(data);
        if(data.status == 200) {
            setUserInformation(data.user);
        } else {
            toast.error(data.message);
            navigate('/profile');
        }
    };

    const logout = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/logout/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        });
        const data = await res.json();
        console.log(data.message);
        if(data.status == 200) {
            toast.success(data.message);
            localStorage.removeItem('token');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            toast.error(data.message);
            navigate('/profile');
        }        
    };

    useEffect(() => {
        getUserInformation();
    }, [])

    return (
        <>
            <ToastContainer />
            <div className="p-4 mt-20 w-full h-screen flex items-center justify-start flex-col gap-4">
                <div className="p-4 w-2/5 flex items-center justify-center flex-col gap-4 max-1250:w-3/5 max-750:w-full">
                    <span className="font-bold text-2xl text-black">Mon profil</span>
                    <div className="border-b border-solid border-gray-500 p-4 w-full flex items-start justify-center flex-col gap-4">
                        <span className="font-bold text-lg text-black">Nom</span>
                        <span className="font-medium text-lg text-black">{userInformation ? userInformation.username : ""}</span>
                    </div>
                    <div className="border-b border-solid border-gray-500 p-4 w-full flex items-start justify-center flex-col gap-4">
                        <span className="font-bold text-lg text-black">Adresse email</span>
                        <span className="font-medium text-lg text-black">{userInformation ? userInformation.email : ""}</span>
                    </div>
                    <Link to='/modifier-information' className="w-full p-2 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Modifier mes informations</Link>
                    <span className="font-bold mt-4 text-2xl text-black">Action</span>
                    <Link to='/cagnotte/all' className="w-full p-2 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Voir mes cagnottes</Link>
                    <Link to='/justification/all' className="w-full p-2 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Faire une justification</Link>
                    <button onClick={logout} className="w-full p-2 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Se déconnexion</button>
                </div>
            </div>
        </>
        
    );
};
export default UserInformation;