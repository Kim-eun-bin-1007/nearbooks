import { useState, useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import BoroughList from './BoroughList';
import BoroughView from './BoroughView';
import LoadingSpinner from "../UI/LoadingSpinner";
import { LibraryCtx } from "../../store/library-context";

function BoroughWrapper(props) {
  const navigate = useNavigate();
  const { GuCode } = useParams();
  const location = useLocation();

  const [component, setComponent] = useState(null);
  const { publicLibrary, smallLibrary } = useContext(LibraryCtx);
  
  const showLoadingSpinner = publicLibrary === null || smallLibrary === null;

  useEffect(() => {
    if (publicLibrary === null || smallLibrary === null) return; // 데이터 받기전 동작X

    if (props.component === 'list') {
      if (!publicLibrary[GuCode]) {
        navigate('/error');
        return;
      }
      const publicList = publicLibrary[GuCode];
      const smallList = smallLibrary[GuCode];
  
      setComponent(<BoroughList publicLibrary={publicList} smallLibrary={smallList} />);
    } else if (props.component === 'view') {
      if (!location.state) {
        navigate("/error");
        return;
      }
      const library = location.state.library;

      setComponent(<BoroughView library={library} />);
    }
  }, [navigate, location, publicLibrary, smallLibrary, GuCode, props.component]);


  return (
    <>
      {showLoadingSpinner && <LoadingSpinner />}
      {!showLoadingSpinner && component}
    </>
  );
}

export default BoroughWrapper;
