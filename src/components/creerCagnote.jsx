import { useEffect, useState } from "react";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';   
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/save.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';


const CreerCagnote = () => {
    const [image, setImage] = useState(null);
    const [titre, setTitre] = useState('');
    const [objectif, setObjectif] = useState('');
    const [model, setModel] = useState('');
    const [editorHeight, setEditorHeight] = useState(400)

    console.log(titre);
    console.log(objectif);

    function handleChange(e) {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const setWidth450 = () => {
        window.innerWidth == 450 ? setEditorHeight(200): setEditorHeight(400);
    }

    useEffect(() => {

        if(screen.width <= 450) {
            setEditorHeight(200)
        }
        
    }, [])

    window.addEventListener('resize', setWidth450);

    return (
        <section className="w-full p-4 bg-pear flex item-center justify-center">
            <div className="w-4/6 bg-white rounded-xl p-4 flex items-center justify-center flex-col gap-4 max-1090:w-5/6 max-750:w-full">
                <h5 className="font-bold text-2xl text-dark">Information sur votre cagnote</h5>
                <form onSubmit={e => e.preventDefault()} className="w-4/6 flex items-center justify-center flex-col gap-4 max-1090:w-5/6 max-520:w-full">
                    <div className="flex items-center justify-center flex-col w-full">
                        {image == null ? 
                            <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Cliquez pour ajouter une photo</span></p>
                                    <p className="text-xs text-gray-500">PNG, JPG</p>
                                </div>
                                <input id="image" type="file" className="hidden" accept="image/*" onChange={(e) => handleChange(e)} />
                            </label> : 
                            <img src={image} className="w-full h-72 rounded-lg object-cover" />
                        }
                        <button onClick={() => setImage(null)} className="w-full p-2 mt-4 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Supprimez la photo</button>
                    </div> 
                    <hr className='w-full h-0.5 bg-gray-100' />
                    <div className="p-2 w-full">
                        <label htmlFor="titre" className="block mb-2 text-base font-bold text-gray-900">Titre</label>
                        <input onChange={e => setTitre(e.target.value)} type="text" id="titre" className="bg-gray-50 border border-gray-fill text-gray-900 text-sm rounded-lg outline-none focus:border-green-700 block w-full p-2.5" />
                    </div>
                    <hr className='w-full h-0.25 bg-gray-100' />
                    <div className="p-2 w-full">
                        <label htmlFor="objectif" className="block mb-2 text-base font-bold text-gray-900">Objectif</label>
                        <input onChange={e => setObjectif(e.target.value)} type="text" id="objectif" className="bg-gray-50 border border-gray-fill text-gray-900 text-sm rounded-lg outline-none focus:border-green-700 block w-full p-2.5" />
                    </div>
                    <hr className='w-full h-0.25 bg-gray-100' />
                    <span className="self-start text-left block mb-2 text-base font-bold text-gray-900">Racontez-nous votre histoire</span>
                    <div className="p-2 w-full">
                        <FroalaEditorComponent 
                            model={model}
                            onModelChange={e => setModel(e)}
                            tag='textarea'
                            config={{
                                placeholderText:"writing your text here...",
                                height: editorHeight,
                                saveInterval: 1000,
                                events: {
                                    "save.before": (html) => {
                                        localStorage.setItem("saveText", html)
                                    }
                                }
                            }}
                        />
                    </div>
                    <hr className='w-full h-0.25 bg-gray-100' />
                    <button type="sublit" className="w-full p-2 mt-4 border border-solid border-gray-500 text-center font-semibold text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:text-black hover:bg-gray-200">Soumettre</button>
                </form>
            </div>
        </section>
    );
};
export default CreerCagnote;