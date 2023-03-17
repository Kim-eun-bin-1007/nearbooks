import LibraryInfo from '../LibraryInfo';
import GoTop from '../UI/GoTop';
import { LibraryList } from "../../style/Borough";

function BoroughList(props) {
  const { publicLibrary, smallLibrary } = props;
  const guName = publicLibrary[0].CODE_VALUE;

  // total 구하기
  const GuTotal = publicLibrary.length + smallLibrary.length;

  const setLibraryItem = (library) => {
    return (
      <li key={library.LBRRY_SEQ_NO} className="library">
        <LibraryInfo library={library} hasMapBtn={true} />
      </li>
    );
  };

  return (
    <LibraryList>
      <h2 className="hidden">{guName} 도서관 정보</h2>
      <div className="breadcrumbs">
        <span>{guName}</span>
      </div>

      <p className="info">총 {GuTotal}개</p>
      <ul className="library-list">
        {publicLibrary.map((library) => setLibraryItem(library))}
        {smallLibrary.map((library) => setLibraryItem(library))}
      </ul>
      <GoTop />
    </LibraryList>
  );
}

export default BoroughList;
