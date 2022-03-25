const squareStyle = {
  width: '100%',
  height: '100%'
};
export const Square = ({ black, children }) => {
  const backgroundColor = 'rgba(52, 52, 52, alpha)'
  //black ? 'black' : 'white';
  const color = black ? 'white' : 'black';
  return (
  <div style={{
          ...squareStyle,
          color,
          backgroundColor
      }}>
    {children}
  </div>);
};
