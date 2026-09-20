import ImageItem from '@/Presskit/ImageItem'
import YureiLogo from '@/Images/yurei-logo.png'

function Header(props:any) {
    return (
        <div className="">
            <h1>Yūrei Press Kit</h1>
            
      <ImageItem 
        center 
        large 
        src={'@/Images/yurei-logo.png'} 
        display={YureiLogo} 
        name="Yurei logo" 
        alt="Yurei logo" />

        </div>
    );
}

export default Header;