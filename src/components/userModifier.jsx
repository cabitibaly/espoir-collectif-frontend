import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UserModifier = () => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');
    const navigate = useNavigate();

    console.log(username, email, passwordOld, passwordNew);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/user/modifier', {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                username,
                email,
                passwordOld,
                passwordNew
            })
        });
        const data = await res.json();
        console.log(data);
        if(data.status == 200) {
            toast.success(data.message);
            setTimeout(() => {
                navigate('/profile')
            }, 1000);
        } else {
            toast.error(data.message);
        }
    };

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
            setUsername(data.user.username);
            setEmail(data.user.email);
        } else {
            toast.error(data.message);
            navigate('/profile');
        }
    };

    useEffect(() => {
        getUserInformation();
    }, [])

    const handleChange = (e, set) => {
        set(e.target.value);
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <ToastContainer />
            <div className="w-2/3 h-full flex items-center justify-center flex-col gap-7 max-990:w-full">
                <span className="text-2xl font-bold">Modification de compte</span>
                <form onSubmit={handleSubmit} className='p-4 w-4/6 max-520:w-5/6'>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" value={username} onChange={e => handleChange(e, setUsername)} id="username" className="block py-2.5 px-0 w-full font-semibold text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" "  />
                        <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom et Prénom</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" value={email} onChange={e => handleChange(e, setEmail)} id="email" className="block py-2.5 px-0 w-full font-semibold text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" "  />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" value={passwordOld} onChange={e => handleChange(e, setPasswordOld)} id="pwd-old" className="block py-2.5 px-0 w-full font-semibold text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" "  />
                        <label htmlFor="pwd-old" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mot de passe actuel</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" value={passwordNew} onChange={e => handleChange(e, setPasswordNew)} id="pwd-new" className="block py-2.5 px-0 w-full font-semibold text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" "  required = { passwordOld != '' ? true : false} />
                        <label htmlFor="pwd-new" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nouveau mot de passe</label>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button type="submit" className="text-white transition duration-300 ease bg-green-700 hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-40 px-5 py-2.5 text-center">Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UserModifier;