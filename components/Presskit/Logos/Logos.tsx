import ImageItem from '@/Components/ImageItem'
import Spacing from '@/Components/Spacing'

import Logo from '@/Images/yurei-logo.png'
import KeyartLandscape from '@/Images/yurei-keyart-landscape.png'
import KeyartLogoLandscape from '@/Images/yurei-keyart+logo-landscape.png'
import KeyartPortrait from '@/Images/yurei-keyart-portrait.png'
import KeyartLogoPortrait from '@/Images/yurei-keyart+logo-portrait.png'

function Logos() {
  return (
    <>
      <h2 id="logos">Logos & Key Art</h2>

      <a href="https://drive.google.com/uc?export=download&id=1NdwmVuTmaNcc6Sn6lKxVcZ47kpoIhkuo" target="_blank">Download all the assets</a>

      <Spacing />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <ImageItem 
          center 
          large 
          src={Logo}
          filename="yurei-logo.png" 
          alt="Yurei logo"
          imageClassName="max-w-xs mx-auto" />

        <ImageItem 
          src={KeyartLandscape}
          filename="yurei-keyart-landscape.png" 
          alt="Yurei keyart"
          imageClassName="max-w-sm mx-auto" />
          
        <ImageItem 
          src={KeyartLogoLandscape}
          filename="yurei-keyart+logo-landscape.png" 
          alt="Yurei keyart+logo"
          imageClassName="max-w-sm mx-auto" />

        <ImageItem 
          src={KeyartPortrait}
          filename="yurei-keyart-portrait.png" 
          alt="Yurei keyart"
          imageClassName="max-w-xs mx-auto" />
          
        <ImageItem 
          src={KeyartLogoPortrait}
          filename="yurei-keyart+logo-portrait.png" 
          alt="Yurei keyart+logo"
          imageClassName="max-w-xs mx-auto" />
      
      </div>
    </>
  );
}

export default Logos;
