import Spacing from '@/Components/Spacing';

import TOC from '@/Presskit/TOC/TOC'
import FactSheet from '@/Presskit/FactSheet/FactSheet'

function LeftColumn(props:any) {
    
    let className = ""
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            <TOC />

            <Spacing />

            <FactSheet />
        </div>
    );
  }
  
  export default LeftColumn;