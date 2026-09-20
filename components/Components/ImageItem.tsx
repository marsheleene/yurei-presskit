import ExportedImage from "next-image-export-optimizer";

function ImageItem(props:any) {
  let className = "break-inside-avoid-column block cursor-pointer my-drop-shadow hover:scale-105 transition duration-300";
  let sizes = "(max-width: 768px) 50vw, 75vw";
  if (!props.large) {
    className += " max-w-4xl";
  }
  if (props.center) {
    className += " col-span-full";
  }
  if (props.className) {
    className += " " + props.className;
  }
  let quality = 50;
  if (props.quality) {
    quality = props.quality;
  }

  if (props.filename) {
    return (
      <a 
        href={props.src.src}
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
  } else {
    return (
      <ExportedImage 
        src={props.src} 
        sizes={sizes}
        alt={props.alt} 
        className="mx-auto"
        basePath='/yurei-presskit'
      />
    );
  }
}

export default ImageItem;
