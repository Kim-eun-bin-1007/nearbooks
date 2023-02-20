import React, { useState } from "react";

export const UserCtx = React.createContext({
  location: {
    lat: 37.5666805,
    lng: 126.9784147
  },
  isGetLocation: null,
  getLocation: () => {}
});

const UserProvider = (props) => {
  // 기본값 서울시청
  const [lat, setLat] = useState(37.5666805);
  const [lng, setLng] = useState(126.9784147);
  const [isGetLocation, setIsGetLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      setIsGetLocation(true);
    }, () => {
      setIsGetLocation(false);
    })
  }

  const newUserCtx = {
    location: {
      lat,
      lng
    },
    isGetLocation,
    getLocation,
  };

  return (
    <UserCtx.Provider value={newUserCtx}>
      {props.children}
    </UserCtx.Provider>
  );
};

export default UserProvider;
