import React, { useState } from "react";

export const UserCtx = React.createContext({
  location: {
    lat: 0,
    lng: 0
  },
  isGetLocation: null,
  getLocation: () => {}
});

const UserProvider = (props) => {
  // 기본값 서울시청
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [isGetLocation, setIsGetLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      setIsGetLocation(true);
    }, () => {
      setLat(37.5666805);
      setLng(126.9784147);
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
