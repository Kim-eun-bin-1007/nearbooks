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
    if (props.component === 'list') {
      if (publicLibrary === null || !publicLibrary[GuCode]) {
        navigate('/error');
        return;
      }
  
      setComponent(<BoroughList />);
    } else if (props.component === 'view') {
      if (!location.state) {
        navigate("/error");
        return;
      }
      setComponent(<BoroughView />);
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
