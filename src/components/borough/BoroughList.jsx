import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { LibraryCtx } from '../../store/library-context';

function BoroughList() {
  const { GuCode } = useParams();
  const libraryCtx = useContext(LibraryCtx);

  console.log(GuCode);

  const publicLibrary = libraryCtx.publicLibrary[GuCode];
  const smallLibrary = libraryCtx.smallLibrary[GuCode];

  console.log(publicLibrary);

  // total 구하기
  const GuTotal = publicLibrary.length + smallLibrary.length;

  return (
    <>
      <p>총 {GuTotal}개</p>
      <ul>
        {publicLibrary.map(library => {
          return <li key={library.LBRRY_SEQ_NO}>
            <Link to={`${library.LBRRY_SEQ_NO}`}>
              {library.LBRRY_NAME}
            </Link>
          </li>;
        })}
      </ul>
    </>
  );
}

export default BoroughList;
