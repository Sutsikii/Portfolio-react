import React from 'react';

//import des icones
import {
    ImInstagram,
    ImYoutube,
    ImLinkedin2,
} from 'react-icons/im';

const Socials = () => {
  return( 

  <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
        <li><a href="https://www.instagram.com/robaizepierre/" target='_blank'> <ImInstagram /> </a></li>
        <li><a href="https://www.youtube.com/channel/UCMuTuGltSr1AkwVB3OIjtCw/featured" target='_blank'> <ImYoutube /> </a></li>
        <li><a href="https://www.linkedin.com/in/dutertre-nicolas/" target='_blank'> <ImLinkedin2 /> </a></li>
    </ul>
  </div>
  );
};

export default Socials;