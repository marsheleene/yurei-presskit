import ImageItem from '@/Components/ImageItem'
import Spacing from '@/Components/Spacing'

import Screenshot01 from '@/Images/yurei-screenshot01.jpg'
import Screenshot02 from '@/Images/yurei-screenshot02.jpg'
import Screenshot03 from '@/Images/yurei-screenshot03.jpg'

function Images() {
  return (
    <>
      <h2 id="images">Images</h2>

      <a href="https://drive.google.com/uc?export=download&id=1NdwmVuTmaNcc6Sn6lKxVcZ47kpoIhkuo">Download all the assets</a>

      <Spacing />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageItem src={Screenshot01} filename="yurei-screenshot01.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot02} filename="yurei-screenshot02.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot03} filename="yurei-screenshot03.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot01} filename="yurei-screenshot01.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot02} filename="yurei-screenshot02.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot03} filename="yurei-screenshot03.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot01} filename="yurei-screenshot01.jpg" alt="Yurei screenshot" />
        <ImageItem src={Screenshot02} filename="yurei-screenshot02.jpg" alt="Yurei screenshot" />
      </div>
    </>
  );
}

export default Images;
