import React from 'react';


//Import des pages
import Accueil from '../pages/Accueil';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Propos from '../pages/Propos';

//import des routes route & des Hook de localisation
import {Routes, Route, useLocation} from 'react-router-dom';


const AnimRoutes = () =>{
    return ( 
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
};

export default AnimRoutes;