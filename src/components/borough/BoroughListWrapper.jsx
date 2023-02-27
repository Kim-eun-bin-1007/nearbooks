import { useContext } from "react";

import BoroughList from './BoroughList';
import LoadingSpinner from "../UI/LoadingSpinner";
import { LibraryCtx } from "../../store/library-context";

function BoroughListWrapper() {
  const { publicLibrary, smallLibrary } = useContext(LibraryCtx);
  
  const showLoadingSpinner = publicLibrary === null || smallLibrary === null;

  return (
    <>
      {showLoadingSpinner && <LoadingSpinner />}
      {!showLoadingSpinner && <BoroughList />}
    </>
  );
}

export default BoroughListWrapper;
