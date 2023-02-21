import { useParams } from 'react-router-dom';

function BoroughView() {
  const params = useParams();

  console.log(params);

  return (
    <>
      <p>view!</p>
    </>
  );
}

export default BoroughView;
