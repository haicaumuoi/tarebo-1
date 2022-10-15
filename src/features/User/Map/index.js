import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useMemo } from 'react';

function Map() {
  const [map, setMap] = React.useState(/** @type google.map.Map  */ (null));

  const center = useMemo(
    () => ({
      lat: -3.745,
      lng: -38.523,
    }),
    []
  );

  const [autocompleted, setAutocompleted] = React.useState('');
  const [img, setImg] = React.useState([]);

  const onPlacedChange = async () => {
    if (autocompleted !== null) {
      const place = autocompleted.getPlace();
      const lng = place.geometry.location.lng();
      const lat = place.geometry.location.lat();
      setMap((map) => {
        map.setCenter({ lat, lng });
        return map;
      });
      const imgList = place.photos.map((photo) => photo.getUrl());
      setImg(imgList);
      console.log(place);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const onLoad = (autocomplete) => {
    setAutocompleted(autocomplete);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY} libraries={['places']}>
      <div className="flex">
        <div className="w-5/12 h-screen bg-[#aa1e1e] pt-56 overflow-y-scroll">
          <div className="text-[#fff] ">this is leftside</div>
          <div>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlacedChange} id="data">
              <input type="text" />
            </Autocomplete>
            <button
              className="bg-blue-500"
              onClick={() => {
                map.panTo();
              }}
            >
              Find
            </button>
          </div>
          {img.map((item) => (
            <img className="h-48" src={item} alt="" />
          ))}
        </div>

        <div className="w-7/12 h-screen">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            zoom={18}
            center={center}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
}

export default React.memo(Map);
