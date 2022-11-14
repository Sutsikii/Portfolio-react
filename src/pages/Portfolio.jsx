import React, {useState} from 'react';

// import galery

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import motion

import {motion} from 'framer-motion';
import { data } from 'autoprefixer';

//images
import Img1 from '../contents/portfolio/pitter.jpg';
import Img2 from '../contents/portfolio/arbre.jpg';
import Img3 from '../contents/portfolio/cathedrale.jpg';
import Img4 from '../contents/portfolio/clavier.jpg';
import Img5 from '../contents/portfolio/guirlandes.jpg';
import Img6 from '../contents/portfolio/foret.jpg';

const Portfolio = () =>{

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img3,
        },
        {
            id: 3,
            imgSrc: Img4,
        },
        {
            id: 4,
            imgSrc: Img5,
        },
        {
            id: 5,
            imgSrc: Img6,
        },
    ];

    return(
        <section className='section h-[100vh] pt-[80px] relative grid grid-cols-3 gap-4 container justify-items-center'> 
            {data.map((item,index) =>{
                return(
                    <div key={index}>
                        <img src={item.imgSrc}/>
                    </div>
                )
            })}
        </section>
        );
    };

export default Portfolio;