function Spacing(props:any) {
  let className="my-8";
  if (props.className) {
    className += props.className;
  }

  return (
      <div className={className}></div>
  );
}

export default Spacing;