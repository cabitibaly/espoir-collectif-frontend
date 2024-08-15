import apropos from '../assets/image/about-us.jpg';

const AboutUs = () => {
    return (
        <section className="p-4 mt-14 w-full h-auto flex items-start justify-center">
            <div className="w-4/5 h-auto flex items-center justify-center flex-col gap-4 max-990:w-full">
                <h3 className="font-bold text-center text-xl text-black sm:text-3xl">À propos de Espoir Collectif</h3> 
                <div className='mt-10 w-full h-500'>
                    <img src={apropos} className="w-full h-full rounded-xl object-cover" alt="aboutUs" />
                </div>
                <p className="mt-4 w-5/6 font-medium text-lg sm:text-xl text-black text-left">
                    Au fond de nous, nous rêvons tous d’un monde meilleur. Une étincelle nous pousse à aider autrui, à revitaliser un quartier, voire à transformer une nation. 
                    Nous croyons fermement que cette inspiration doit être partagée avec le plus grand nombre, car c&apos;est ainsi que les choses changent.
                    Grâce à notre application web, il devient facile d&apos;inspirer les autres et de transformer la compassion en actions concrètes. 
                    Nous donnons aux gens les outils nécessaires pour partager leur histoire et toucher un large public.
                </p>
            </div>
        </section>
    );
};
export default AboutUs;