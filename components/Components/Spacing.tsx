function Spacing(props:any) {
  let className="my-4";
  if (props.className) {
    className += props.className;
  }

  return (
      <div className={className}></div>
  );
}

export default Spacing;