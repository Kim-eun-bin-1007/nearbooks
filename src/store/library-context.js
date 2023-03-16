import React, { useState, useCallback } from "react";

export const LibraryCtx = React.createContext({
  total: {
    public: 0,
    small: 0,
  },
  publicLibrary: {},
  smallLibrary: {},
  getLibraryList: () => {},
});

const LibraryProvider = (props) => {
  const [publicTotal, setPublicTotal] = useState(0);
  const [smallTotal, setSmallTotal] = useState(0);
  const [publicLibrary, setPublicLibrary] = useState(null);
  const [smallLibrary, setSmallLibrary] = useState(null);

  const getLibraryData = useCallback(() => {
    const api =
      "https://port-0-nearbybooks-api-6g2llfar2z9i.sel3.cloudtype.app/";

    fetch(api)
      .then((response) => response.json())
      .then((res) => { 
        setPublicTotal(res.total.public);
        setSmallTotal(res.total.small);
        setPublicLibrary(res.publicLibrary);
        setSmallLibrary(res.smallLibrary);
      })
      .catch((err) => err);
  }, []);

  const libraryCtx = {
    total: {
      public: publicTotal,
      small: smallTotal,
    },
    publicLibrary,
    smallLibrary,
    getLibraryList: getLibraryData,
  };

  return (
    <LibraryCtx.Provider value={libraryCtx}>
      {props.children}
    </LibraryCtx.Provider>
  );
};

export default LibraryProvider;
