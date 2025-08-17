"use client";
import styled from "styled-components";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// --- STYLED COMPONENTS ---
const Section = styled.section`
  padding: 8rem 5% 10rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const InfoContent = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;

  svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 5px;
    flex-shrink: 0;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p,
  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }
`;

const MapContainer = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 350px;
  }
`;

// --- MAP CONFIGURATION ---

// This JSON object defines the "classic" visual style of the map
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

// The specific location of Just Pita & Bar
const mapCenter = {
  lat: 41.374661,
  lng: 2.167018,
};

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true, // Hides the default Google UI (zoom buttons, etc.)
  zoomControl: true,
};

const VisitUs = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <Section id="visit">
      <ContentGrid>
        <InfoContent>
          <Title>Come Say Hello</Title>
          <InfoCard>
            <FiMapPin />
            <div>
              <h4>Address</h4>
              <p>
                Carrer de Blai, 22
                <br />
                08004 Barcelona, Spain
              </p>
            </div>
          </InfoCard>
          <InfoCard>
            <FiClock />
            <div>
              <h4>Opening Hours</h4>
              <p>
                Mon - Sun
                <br />
                13:00 – 16:00 & 20:00 – 23:00
              </p>
            </div>
          </InfoCard>
          <InfoCard>
            <FiPhone />
            <div>
              <h4>Contact</h4>
              <p>
                <a href="tel:+34935418011">T. 935 41 80 11</a>
                <br />
                <a href="mailto:info@justpita.es">info@justpita.es</a>
              </p>
            </div>
          </InfoCard>
        </InfoContent>

        <MapContainer>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={mapCenter}
              zoom={16}
              options={mapOptions}
            >
              <Marker
                position={mapCenter}
                icon={{
                  // This creates our custom, branded map marker
                  path: window.google.maps.SymbolPath.CIRCLE,
                  fillColor: "#C86A41", // Your brand's primary color
                  fillOpacity: 1,
                  strokeColor: "#FFFFFF", // A white outline for the marker
                  strokeWeight: 3,
                  scale: 10,
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </MapContainer>
      </ContentGrid>
    </Section>
  );
};

export default VisitUs;
