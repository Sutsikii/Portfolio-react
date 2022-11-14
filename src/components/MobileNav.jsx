import React, {useState} from 'react';

//import des icones
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
//import link
import { Link } from 'react-router-dom';
// import Motion
import { motion } from 'framer-motion';

// menu motion

const menuVariants = {
    hidden: {
        x:'100%'
    },
    show: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
}

const MobileNav = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return(
    <nav className='xl:hidden'>
        <div 
        onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer'
        >
            <CgMenuRight />
        </div>
        <motion.div 
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : '' }
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
        >
            <div onClick ={() => setOpenMenu(false)} 
            className='text-4xl absolute z-30 left-4 top-14 cursor-pointer'
            >
                <IoMdClose />
            </div>
            <ul class='h-full flex flex-col justify-center items-center gap-y-8 font-bold text-3xl'>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to='/'>Accueil</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to='/propos'>A propos</Link>
                </motion.li >
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to='/portfolio'>Portfolio</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to='/contact'>Contact</Link>
                </motion.li>
            </ul>
        </motion.div>
    </nav>
  );
};

export default MobileNav;