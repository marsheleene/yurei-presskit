import Synopsis from '@/Presskit/Synopsis/Synopsis'
import About from '@/Presskit/About/About'
import Videos from '@/Presskit/Videos/Videos'
import Images from '@/Presskit/Images/Images'
import Logos from '@/Presskit/Logos/Logos'
import Credits from '@/Presskit/Credits/Credits'
import ImageItem from '@/Components/ImageItem'

import Separator from '@/Components/Separator'

import KeyartLogo from '@/Images/yurei-keyart+logo-landscape.png'

function MainColumn(props:any) {
    
    let className = ""
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>

            <ImageItem 
              center 
              large 
              src={KeyartLogo} 
              alt="Yurei logo" />

            <Separator />

            <Synopsis />

            <About />
            
            <Separator />

            <Videos />
            
            <Separator />

            <Images />

            <Separator />

            <Logos />

            <Separator />

            <Credits />
        </div>
    );
  }
  
  export default MainColumn;