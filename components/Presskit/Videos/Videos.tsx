import Spacing from '@/Components/Spacing'

function Videos() {
  return (
    <>
      <h2>Videos</h2>

      <h3>Trailer</h3>
      <iframe src="https://www.youtube.com/embed/OostqysyVPE" className="w-full aspect-video" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <Spacing />

      <h3>Vertical Slice playthrough</h3>
      <iframe src="https://www.youtube.com/embed/FYOwYOIxVrk" className="w-full aspect-video" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
  );
}

export default Videos;
