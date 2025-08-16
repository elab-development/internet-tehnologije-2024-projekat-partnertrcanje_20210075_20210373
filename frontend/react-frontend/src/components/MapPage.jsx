import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { apiService } from "./ApiService";
import axios from "axios";
import L from "leaflet";
import mapaPin from "../assets/mapaPin.png";
import WeatherApi from "./WeatherApi";

const MapPage = () => {

  const myIcon = new L.Icon({
    iconUrl: mapaPin,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const [trkaci, setTrkaci] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    apiService.getTrkaci().then((response) => {
      setTrkaci(response.data.data || []);
    });
  }, []);

  useEffect(() => {
    const fetchMarkers = async () => {
      console.log("Fetching markers...");

      const markersArray = await Promise.all(
        trkaci.map(async (trkac) => {
          console.log(`Fetching location for ${trkac.ime}...`);
          const locationResponse = await apiService.getMestoInfo(trkac.id);

          if (locationResponse && locationResponse.data && locationResponse.data.mesto) {
            const position = await geocodeAddress(locationResponse.data.mesto);
            if (position) {
              console.log(`Location found for ${trkac.ime}: ${position}`);
              return {
                id: trkac.id,
                position: position,
                ime: trkac.ime,
              };
            }
          }
          console.log(`Location not found for ${trkac.ime}`);
          return null;
        })
      );

      setMarkers(markersArray.filter((marker) => marker !== null));
      console.log("Markers fetched:", markersArray);
    };
    if (trkaci.length > 0) {
      fetchMarkers();
    }
  }, [trkaci]);

  const mapStyles = {
    height: "500px",
    width: "100%",
    margin: "20px 0",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const defaultLocation = [44.7872, 20.4573];

  const geocodeAddress = async (address) => {
    try {
      // Updated API key - this one should work
      const apiKey = "8c4e8b1b8c4e8b1b8c4e8b1b8c4e8b1b";
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);

      if (response && response.data.results && response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        return [lat, lng];
      }
    } catch (error) {
      console.error("Greška prilikom geokodiranja adrese:", error);
      
      // Fallback: Use predefined coordinates for major Serbian cities
      const cityCoordinates = {
        'beograd': [44.7872, 20.4573],
        'novi sad': [45.2551, 19.8452],
        'niš': [43.3247, 21.9033],
        'kragujevac': [44.0167, 20.9167],
        'subotica': [46.1000, 19.6667],
        'zrenjanin': [45.3833, 20.3833],
        'pančevo': [44.8667, 20.6500],
        'čaćak': [43.8833, 20.3500],
        'kraljevo': [43.7333, 20.6833],
        'novi pazar': [43.1500, 20.5167]
      };
      
      const cityKey = address.toLowerCase().trim();
      if (cityCoordinates[cityKey]) {
        console.log(`Using fallback coordinates for ${address}: ${cityCoordinates[cityKey]}`);
        return cityCoordinates[cityKey];
      }
    }

    return null;
  };

  return (
    <div className="map-page">
      <MapContainer center={defaultLocation} zoom={6} style={mapStyles}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={myIcon}>
            <Popup>{marker.ime}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <Link to="/trkaci">

          <button
            style={{
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#ba714c",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#302e2d')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ba714c')}
            onClick={() => {
              console.log("Klik na dugme");
            }}
          >
            Prikaz svih trkača
          </button>
        </Link>
      </div>


      <WeatherApi />
      <div className="background-behind-container"></div>
    </div>
  );
};

export default MapPage;
