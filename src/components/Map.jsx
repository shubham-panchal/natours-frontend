import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ locations }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!locations || locations.length === 0) return;
    console.log("Locations:", locations);
    mapRef.current = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
      container: mapContainerRef.current,
      //   style: "mapbox://styles/panchalshubham2808/cmwncxl2l007i01qx9d2zgoio",
      style: "mapbox://styles/panchalshubham2808/cmwnd927l006y01r87i960x28",
      scrollZoom: false,
      //   center: [locations[0].coordinates[0], locations[0].coordinates[1]], // [lng, lat]
      //   zoom: 10,
      //   interactive: false, // Disable user interactions
    });

    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc) => {
      // Create a marker
      const el = document.createElement("div");
      el.className = "marker";

      // Add marker to the map
      new mapboxgl.Marker({ element: el, anchor: "bottom" })
        .setLngLat([loc.coordinates[0], loc.coordinates[1]])
        .addTo(mapRef.current);

      // Extend the map bounds to include the marker's coordinates
      bounds.extend([loc.coordinates[0], loc.coordinates[1]]);
    });
    mapRef.current.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });

    // Add popup for each location
    locations.forEach((loc) => {
      new mapboxgl.Popup({ offset: 30 })
        .setLngLat([loc.coordinates[0], loc.coordinates[1]])
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(mapRef.current);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [locations]);

  return (
    <>
      <section className="section-map">
        <div id="map" ref={mapContainerRef} />
      </section>
    </>
  );
};

export default Map;
