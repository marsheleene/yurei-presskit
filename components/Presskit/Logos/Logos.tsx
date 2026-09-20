import ImageItem from '@/Components/ImageItem'

import Logo from '@/Images/yurei-logo.png'
import KeyartLandscape from '@/Images/yurei-keyart-landscape.png'
import KeyartLogoLandscape from '@/Images/yurei-keyart+logo-landscape.png'
import KeyartPortrait from '@/Images/yurei-keyart-portrait.png'
import KeyartLogoPortrait from '@/Images/yurei-keyart+logo-portrait.png'

function Logos() {
  return (
    <>
      <h2 id="logos">Logos & Key Art</h2>

      <div className="grid grid-cols-2 gap-8">

        <ImageItem 
          center 
          large 
          src={Logo}
          filename="yurei-logo.png" 
          alt="Yurei logo" />

        <ImageItem 
          src={KeyartLandscape}
          filename="yurei-keyart-landscape.png" 
          alt="Yurei keyart" />
          
        <ImageItem 
          src={KeyartLogoLandscape}
          filename="yurei-keyart+logo-landscape.png" 
          alt="Yurei keyart+logo" />

        <ImageItem 
          src={KeyartPortrait}
          filename="yurei-keyart-portrait.png" 
          alt="Yurei keyart" />
          
        <ImageItem 
          src={KeyartLogoPortrait}
          filename="yurei-keyart+logo-portrait.png" 
          alt="Yurei keyart+logo" />
      
      </div>
    </>
  );
}

export default Logos;
