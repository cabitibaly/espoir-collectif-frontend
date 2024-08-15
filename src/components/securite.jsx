import { ShieldCheck, Smile, Sparkles } from "lucide-react";

const Securite = () => {
    return (
        <section className="w-full py-16 px-4 flex items-center justify-center flex-col gap-4 bg-pear">
            <p className="font-bold text-2xl text-dark max-750:text-lg">Votre plateforme d entraide à la fois conviviale, efficace et securisé</p>
            <div className="w-5/6 p-4 grid grid-cols-3 gap-4 max-1090:grid-cols-1 max-1090:gap-6 max-450:w-full max">
                <div className="flex justify-start gap-4">
                    <Smile size={40} strokeWidth={1} color="black" />
                    <div className="w-full flex items-start justify-start flex-col">
                        <span className="font-medium text-xl text-dark max-750:text-base">conviviale</span>
                        <p className="max-750:text-sm">Le processus de don est rapide et convivial</p>
                    </div>
                </div>
                <div className="flex justify-start gap-4">
                    <Sparkles size={40} strokeWidth={1} color="black" />
                    <div className="w-full flex items-start justify-start flex-col">
                        <span className="font-medium text-xl text-dark max-750:text-base">Efficace</span>
                        <p className="max-750:text-sm">Soutenez directement les personnes et les causes qui vous tiennent à coeur.</p>
                    </div>
                </div>
                <div className="flex justify-start gap-4">
                    <ShieldCheck size={40} strokeWidth={1} color="black" />
                    <div className="w-full flex items-start justify-start flex-col">
                        <span className="font-medium text-xl text-dark max-750:text-base">securisée</span>
                        <p className="max-750:text-sm">Votre don est protégé.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Securite;