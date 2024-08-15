import { Routes, Route } from "react-router-dom"
import PublierCagnote from "./pages/publierCagnote"
import Home from "./pages/home"
import DetailCagnote from "./pages/detailCagnote"
import Singup from "./components/singup"
import Login from "./components/login"
import Recherche from "./pages/recherche"
import Soutenir from "./pages/soutenir"
import UserCagnote from "./pages/userCagnote"
import Justification from "./pages/justification"
import Profile from "./pages/profile"
import FaireJustification from "./pages/faireJustification"
import UserModifier from "./components/userModifier"
import Fonctionnement from "./pages/fonctionnement"
import APropos from "./pages/aPropos"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment-ça-marche" element={<Fonctionnement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/creer-une-cagnote" element={<PublierCagnote />} />
        <Route path="/cagnote/detail/id" element={<DetailCagnote />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/cagnotte/all" element={<UserCagnote />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modifier-information" element={< UserModifier />} />
        <Route path="/justification/je-fais-une-justification" element={<FaireJustification />} />
        <Route path="/justification/all" element={<Justification />} />
        <Route path="/cagnote/detail/id/soutenir" element={<Soutenir />} />
      </Routes>
    </>
  )
}

export default App
