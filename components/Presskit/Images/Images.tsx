import ImageItem from '@/Components/ImageItem'
import Spacing from '@/Components/Spacing'

import Screenshot01 from '@/Images/yurei-screenshot01.png'
import Screenshot02 from '@/Images/yurei-screenshot02.png'
import Screenshot03 from '@/Images/yurei-screenshot03.png'
import Screenshot04 from '@/Images/yurei-screenshot04.png'
import Screenshot05 from '@/Images/yurei-screenshot05.png'
import Screenshot06 from '@/Images/yurei-screenshot06.png'
import Screenshot07 from '@/Images/yurei-screenshot07.png'
import Screenshot08 from '@/Images/yurei-screenshot08.png'

function Images() {
  return (
    <>
      <h2 id="images">Images</h2>

      <a href="https://drive.google.com/uc?export=download&id=1NdwmVuTmaNcc6Sn6lKxVcZ47kpoIhkuo" target="_blank">Download all the assets</a>

      <Spacing />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageItem src={Screenshot01} filename="yurei-screenshot01.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot02} filename="yurei-screenshot02.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot03} filename="yurei-screenshot03.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot04} filename="yurei-screenshot04.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot05} filename="yurei-screenshot05.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot06} filename="yurei-screenshot06.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot07} filename="yurei-screenshot07.png" alt="Yurei screenshot" />
        <ImageItem src={Screenshot08} filename="yurei-screenshot08.png" alt="Yurei screenshot" />
      </div>
    </>
  );
}

export default Images;
