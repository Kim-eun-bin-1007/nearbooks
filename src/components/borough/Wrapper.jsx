import { useContext } from "react";

import BoroughList from './BoroughList';
import BoroughView from './BoroughView';
import LoadingSpinner from "../UI/LoadingSpinner";
import { LibraryCtx } from "../../store/library-context";

function BoroughWrapper(props) {
  const { publicLibrary, smallLibrary } = useContext(LibraryCtx);
  
  const showLoadingSpinner = publicLibrary === null || smallLibrary === null;
  let component;

  if (props.component === 'list') {
    component = <BoroughList />;
  } else if (props.component === 'view') {
    component = <BoroughView />;
  }

  return (
    <>
      {showLoadingSpinner && <LoadingSpinner />}
      {!showLoadingSpinner && component}
    </>
  );
}

export default BoroughWrapper;
