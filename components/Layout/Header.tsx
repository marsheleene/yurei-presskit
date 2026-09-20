import ImageItem from '@/Presskit/ImageItem'
import YureiLogo from '@/Images/yurei-logo.png'

function Header(props:any) {
    return (
        <div className="">
            <h1>Yūrei Press Kit</h1>
            
      <ImageItem 
        center 
        large 
        src={YureiLogo}
        filename="yurei-logo.png" 
        alt="Yurei logo" />

        </div>
    );
}

export default Header;