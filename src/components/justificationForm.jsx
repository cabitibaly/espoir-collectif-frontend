import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';   
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/save.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useState } from "react";


const JustificationForm = () => {
    const [nom, setNom] = useState('');
    const [contact, setContact] = useState('');
    const [model, setModel] = useState('');

    console.log(nom, contact);

    return (
        <>
            <section className="w-full h-auto p-4 flex items-center justify-center bg-pear">
                <div className="w-3/6 bg-white rounded-xl p-4 flex items-center justify-center flex-col gap-4 max-1090:w-5/6 max-750:w-full">
                    <h5 className="font-bold text-2xl text-dark">Justification</h5>
                    <form onSubmit={e => e.preventDefault()} className="w-5/6 flex items-center justify-center flex-col gap-4 max-1090:w-5/6 max-520:w-full">                        
                        <div className="p-2 w-full">
                            <label htmlFor="titre" className="block mb-2 text-base font-bold text-gray-900">Cagnotte</label>                            
                            <select onChange={e => setNom(e.target.value)} className="bg-gray-50 border border-gray-fill text-gray-900 text-sm rounded-lg outline-none focus:border-green-700 block w-full p-2.5" required>
                                <option value="">Choisissez une cagnotte</option>
                                <option value="1">Une lunière au bout du tunnel</option>
                                <option value="2">AIde au développement</option>
                            </select>
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="titre" className="block mb-2 text-base font-bold text-gray-900">Montant</label>
                            <input onChange={e => setNom(e.target.value)} type="text" id="titre" className="bg-gray-50 border border-gray-fill text-gray-900 text-sm rounded-lg outline-none focus:border-green-700 block w-full p-2.5" required/>
                        </div>
                        <div className="p-2 w-full">
                            <label htmlFor="titre" className="block mb-2 text-base font-bold text-gray-900">Nom et Prénom</label>
                            <input onChange={e => setNom(e.target.value)} type="text" id="titre" className="bg-gray-50 border border-gray-fill text-gray-900 text-sm rounded-lg outline-none focus:border-green-700 block w-full p-2.5" required/>
                        </div>
                        <hr className='w-full h-0.25 bg-gray-100' />
                        <div className="p-2 w-full">
                            <label htmlFor="objectif" className="block mb-2 text-base font-bold text-gray-900">Contact</label>
                            <input onChange={e => setContact(e.target.value)} type="text" id="objectif" className="bg-gray-50 border border-gray-fill text-gray-900 text-sm rounded-lg outline-none focus:border-green-700 block w-full p-2.5" required/>
                        </div>
                        <hr className='w-full h-0.25 bg-gray-100' />
                        <span className="self-start text-left block mb-2 text-base font-bold text-gray-900">Pourquoi soutenir cette personne ?</span>
                        <div className="p-2 w-full">
                            <FroalaEditorComponent 
                                model={model}
                                onModelChange={e => setModel(e)}
                                tag='textarea'
                                config={{
                                    placeholderText:"writing your text here...",
                                    height: 400,
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
        </>
        
    );
};
export default JustificationForm;