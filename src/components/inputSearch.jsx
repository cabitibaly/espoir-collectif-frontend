import { Search } from "lucide-react";
import { useState } from "react";
import CagnoteCard from "./cagnoteCard";
import handicap from '../assets/image/handicap.jpg';


const InputSearch = () => {
    const [text, setText] = useState('');

    const width = `${(30/100) * 100}%`;

    const handleChange = (e) => {
      setText(e.target.value);
    }

    console.log(text)

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
              onChange={handleChange}
            />
          </div>
          <div className="p-4 md:px-16 w-full grid grid-cols-2 items-center justify-center gap-4 max-750:flex max-750:flex-col lg:grid-cols-3 lg:w-full">
            <CagnoteCard 
              url={'/cagnote/detail/id'} 
              image={handicap}
              titre={'Senior health malade Senior health malade'} 
              pourcentage={width}
              montantRecolte={'19 187'}
            /> 
            <CagnoteCard 
              url={'/cagnote/detail/id'} 
              image={handicap}
              titre={'Senior health malade Senior health malade'} 
              pourcentage={width}
              montantRecolte={'19 187'}
            /> 
            <CagnoteCard 
              url={'/cagnote/detail/id'} 
              image={handicap}
              titre={'Senior health malade Senior health malade'} 
              pourcentage={width}
              montantRecolte={'19 187'}
            /> 
            <CagnoteCard 
              url={'/cagnote/detail/id'} 
              image={handicap}
              titre={'Senior health malade Senior health malade'} 
              pourcentage={width}
              montantRecolte={'19 187'}
            /> 
          </div>
        </section>
      </>
    );
};
export default InputSearch;