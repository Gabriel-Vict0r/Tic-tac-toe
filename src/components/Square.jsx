import "../sass/components/square.sass";
const Square = ({ onClick, value }) => {
  return (
      <button onClick={onClick} className='square'>{value}</button>
  );
};

export default Square;
