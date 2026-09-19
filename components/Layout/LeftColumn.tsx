import TOC from '@/Presskit/TOC/TOC'
import FactSheet from '@/Presskit/FactSheet/FactSheet'

function LeftColumn(props) {
    
    let className = ""
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            <h1>LeftColumn</h1>
            <TOC />
            <FactSheet />
        </div>
    );
  }
  
  export default LeftColumn;