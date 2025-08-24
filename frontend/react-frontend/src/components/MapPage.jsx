import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { apiService } from "./ApiService";
import axios from "axios";
import L from "leaflet";
import mapaPin from "../assets/mapaPin.png";
import WeatherApi from "./WeatherApi";

const MapPage = () => {

  const myIcon = useMemo(() => new L.Icon({
    iconUrl: mapaPin,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }), []);

  const [trkaci, setTrkaci] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    apiService.getAllTrkaciForMap().then((response) => {
      setTrkaci(response.data);
    });
  }, []);

  const geocodeAddress = useCallback(async (address) => {
    try {
      // Koristimo samo fallback koordinate za glavne gradove
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
        'novi pazar': [43.1500, 20.5167],
        'leskovac': [42.9981, 21.9460],
        'vranje': [42.5511, 21.9003],
        'uzice': [43.8564, 19.8444],
        'smederevo': [44.6658, 20.9333],
        'požarevac': [44.6214, 21.1878],
        'šabac': [44.7538, 19.6906],
        'sombor': [45.7742, 19.1142],
        'zaječar': [43.9036, 22.2644],
        'pancevo': [44.8667, 20.6500],
        'kikinda': [45.8297, 20.4653]
      };
      
      const cityKey = address.toLowerCase().trim();
      if (cityCoordinates[cityKey]) {
        console.log(`Using coordinates for ${address}: ${cityCoordinates[cityKey]}`);
        return cityCoordinates[cityKey];
      }
      
      // Ako grad nije u listi, koristi default koordinate
      console.log(`City ${address} not found, using default coordinates`);
      return defaultLocation;
    } catch (error) {
      console.error("Greška prilikom geokodiranja adrese:", error);
      return defaultLocation;
    }
  }, []);

  const defaultLocation = useMemo(() => [44.7872, 20.4573], []);

  useEffect(() => {
    const fetchMarkers = async () => {
      if (trkaci.length === 0) return;
      
      console.log("Fetching markers...");

      const markersArray = await Promise.all(
        trkaci.map(async (trkac) => {
          console.log(`Processing ${trkac.ime}...`);
          
          // Uvek kreiraj marker za svakog trkača
          let position = defaultLocation;
          
          // Koristi direktno mesto iz trkac objekta
          if (trkac.mesto) {
            console.log(`Mesto found for ${trkac.ime}: ${trkac.mesto}`);
            const geocodedPosition = await geocodeAddress(trkac.mesto);
            if (geocodedPosition) {
              position = geocodedPosition;
              console.log(`Using geocoded position for ${trkac.ime}: ${position}`);
            } else {
              console.log(`Geocoding failed for ${trkac.ime}, using fallback coordinates`);
            }
          } else {
            console.log(`No mesto for ${trkac.ime}, using fallback coordinates`);
          }
          
          // Uvek vrati marker
          return {
            id: trkac.id,
            position: position,
            ime: trkac.ime,
          };
        })
      );

      setMarkers(markersArray.filter((marker) => marker !== null));
      console.log("Markers fetched:", markersArray);
    };
    
    fetchMarkers();
  }, [trkaci, geocodeAddress]);

  const mapStyles = {
    height: "500px",
    width: "100%",
    margin: "20px 0",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
