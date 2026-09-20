function Separator(props:any) {
  let className="my-8";
  if (props.className) {
    className += props.className;
  }

  return (
      <hr className={className}></hr>
  );
}

export default Separator;