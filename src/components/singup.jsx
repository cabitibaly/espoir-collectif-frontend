import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgSingup from '../assets/image/singup.jpg';

const Singup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    console.log(email, username, password, confirmPassword);
    
    const handleChange = (e, set) => {
        set(e.target .value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        const data = await res.json();
        console.log(data);
        if(data.status == 201) {
            toast.success(data.message);
            setTimeout(() => {
                navigate('/login')
            }, 1000);
        } else {
            toast.error(data.message);
            navigate('/signup');
        }
    }; 

    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="border border-solid boder-gray-800 w-1/3 h-full max-990:hidden">
                <img src={imgSingup} className="w-full h-full object-cover" alt="singup" />
            </div>
            <div className="w-2/3 h-full flex items-center justify-center flex-col gap-7 max-990:w-full">
                <span className="text-2xl font-bold">Création de compte</span>
                <form onSubmit={handleSubmit} className='p-4 w-4/6 max-520:w-5/6'>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" onChange={e => handleChange(e, setUsername)} name="Nom et Prénom" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom et Prénom</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" onChange={e => handleChange(e, setEmail)} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" onChange={e => handleChange(e, setPassword)} name="password1" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" onChange={e => handleChange(e, setConfirmPassword)} name="password2" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-700 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button type="submit" className="text-white transition duration-300 ease bg-green-700 hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-40 px-5 py-2.5 text-center">Soumettre</button>
                    </div>
                </form>
                <p className="text-lg text-gray-500">
                    Vous avez déjà un compte?
                    <Link to='/login' className="text-green-700 font-semibold transition duration-300 ease-in-out hover:font-bold hover:text-dark"> Login</Link>
                </p>
            </div>
            <ToastContainer />
        </section>
    );
};
export default Singup;