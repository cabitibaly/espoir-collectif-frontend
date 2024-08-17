import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import CagnoteCard from "./cagnoteCard";
// import handicap from '../assets/image/handicap.jpg';


const InputSearch = () => {
  const [terme, setTerme] = useState('');
  const [cagnottes, setCagnottes] = useState([]);

    // const width = `${(30/100) * 100}%`;

  const getCagnottes = async () => {
      const res = await fetch('http://127.0.0.1:8000/api/cagnottes/', {
          method: 'GET',
          headers: {
              'Content-Type' : 'application/json',
          },
      });
      const data = await res.json();
      if(data.status == 200) {
          setCagnottes(data.message);
      } else {
          window.location.reload();
      }
  }

  const recherche = async (e) => {
      e.preventDefault();
      setTerme(e.target.value);
      const res = await fetch('http://127.0.0.1:8000/api/cagnottes/search/'+terme, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
    });
    const data = await res.json();
    console.log(data);
    if(data.status == 200) {
        setCagnottes(data.message);
    } else {
        // window.location.reload();
    }
  }

  useEffect(() => {

      getCagnottes();

  }, []);

    return (
      <>
        <section className="w-full h-auto mt-20 flex items-center justify-center flex-col gap-8 max-650:p-4">
          <h3 className="font-bold text-4xl text-dark text-center max-990:text-3xl max-650:text-2xl">Rechercher des cagnote sur Espoir Collectif</h3>
          <div className="w-3/6 px-3 py-2 bg-pear rounded-full flex items-center justify-center gap-2 max-990:w-4/6 max-650:w-full">
            <Search size={25} strokeWidth={1.5} />
            <input 
              type="text" 
              className="w-full bg-transparent text-lg p-1 outline-none placeholder:text-gray-600" 
              placeholder="Rechercher" 
              onChange={recherche}
            />
          </div>
          <div className="p-4 md:px-16 w-full grid grid-cols-2 items-center justify-center gap-4 max-750:flex max-750:flex-col lg:grid-cols-3 lg:w-full">
                { cagnottes.length > 0 ?
                    cagnottes.map((cagnotte, index) => (
                        <CagnoteCard 
                            key={index}
                            url={'/cagnote/detail/'+cagnotte.id}
                            image={`http://127.0.0.1:8000${cagnotte.image_url}`}
                            titre={cagnotte.intitule} 
                            pourcentage={` ${(cagnotte.montant_collecte / cagnotte.objectif_montant_vise) * 100}% `}
                            montantRecolte={cagnotte.montant_collecte}
                        /> 
                    )) 
                    :
                    <div className="border border-solid border-black p-4 h-44 flex items-center justify-center">
                        <p className="font-bold text-xl text-center text-dark">Aucune cagnote trouvée avec le terme &quot;{terme}&quot;</p>
                    </div>
                }
          </div>
        </section>
      </>
    );
};
export default InputSearch;