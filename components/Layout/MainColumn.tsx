import Synopsis from '@/Presskit/Synopsis/Synopsis'
import About from '@/Presskit/About/About'
import Videos from '@/Presskit/Videos/Videos'
import Images from '@/Presskit/Images/Images'
import Logos from '@/Presskit/Logos/Logos'
import Credits from '@/Presskit/Credits/Credits'
import ImageItem from '@/Components/ImageItem'

import YureiKeyartLogo from '@/Images/keyart-logo.png'

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
              src={YureiKeyartLogo} 
              filename="yurei-keyart-logo.png"
              alt="Yurei logo" />
            <Synopsis />
            <About />
            <Videos />
            <Images />
            <Logos />
            <Credits />
        </div>
    );
  }
  
  export default MainColumn;