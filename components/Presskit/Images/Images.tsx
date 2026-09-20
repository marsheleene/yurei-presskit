import ImageItem from '@/Components/ImageItem'

import Screenshot01 from '@/Images/yurei-screenshot01.jpg'
import Screenshot02 from '@/Images/yurei-screenshot02.jpg'
import Screenshot03 from '@/Images/yurei-screenshot03.jpg'

function Images() {
  return (
    <>
      <h2>Images</h2>

      <div className="grid grid-cols-2 gap-8">
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
