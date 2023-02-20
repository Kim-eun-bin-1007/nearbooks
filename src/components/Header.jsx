import { useContext, useEffect } from "react";

import { LibraryCtx } from "../store/library-context";
import { UserCtx } from "../store/user-context";

function Header() {
  const libraryCtx = useContext(LibraryCtx);
  const { getLocation: getUserLocation } = useContext(UserCtx);
  const { getLibraryList } = useContext(LibraryCtx);

  useEffect(() => {
    getLibraryList();
    getUserLocation();
  }, [getLibraryList, getUserLocation]);

  console.log(libraryCtx);

  return (
    <>
      <p style={{height: '60px'}}>in Header!</p>
    </>
  );
}

export default Header;
