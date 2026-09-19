import Synopsis from '@/Presskit/Synopsis/Synopsis'
import About from '@/Presskit/About/About'
import Videos from '@/Presskit/Videos/Videos'
import Images from '@/Presskit/Images/Images'
import Logos from '@/Presskit/Logos/Logos'
import Credits from '@/Presskit/Credits/Credits'

function MainColumn(props) {
    
    let className = ""
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            <h1>MainColumn</h1>
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