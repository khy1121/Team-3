import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import "./App.scss";

function App() {
  const [center, setCenter] = useState({
    lat: 37.5665,
    lng: 126.978,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log("현재 위치를 가져오지 못했습니다.", error);
      }
    );
  }, []);

  return (
    <div className="app">
      <h1>카카오맵 마커 등록</h1>
      <p>현재 위치를 중심으로 카카오맵을 표시합니다.</p>

      <Map center={center} level={4} className="map" />
    </div>
  );
}

export default App;