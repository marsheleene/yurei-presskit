import ExportedImage from "next-image-export-optimizer";

function ImageItem(props:any) {
  let className = "break-inside-avoid-column block cursor-pointer my-drop-shadow hover:scale-105 transition duration-300";
  let sizes = "(max-width: 768px) 50vw, 75vw";
  if (!props.large) {
    className += " max-w-4xl";
  }
  if (props.center) {
    className += " column-span-all";
  }
  if (props.className) {
    className += " " + props.className;
  }
  let quality = 50;
  if (props.quality) {
    quality = props.quality;
  }

  return (
    <a 
      href={props.src.src}
      download={props.filename}
      className={className}
      target="_blank"
    >
      <ExportedImage 
        src={props.src} 
        sizes={sizes}
        alt={props.alt} 
        className="mx-auto"
        basePath='/yurei-presskit'
      />
    </a>
  );
}

export default ImageItem;
