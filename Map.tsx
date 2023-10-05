import React, { useEffect } from "react";

const DisplayMap = () => {
  const lat = 90.4133468;
  const lon = 23.7894399;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js";
    script.async = true;

    script.onload = () => {
      // Get key From https://barikoi.com/  *It's Free*
      // Read Docs Fore More **  https://docs.barikoi.com/docs/intro/    ** */
      bkoigl.accessToken = "key here";
      const map = new bkoigl.Map({
        container: "map",
        center: [lat, lon],
        zoom: 16,
      });
      map.on("load", () => {
        const marker = new bkoigl.Marker({ draggable: true })
          .setLngLat([lat, lon])
          .addTo(map);
      });
      map.addControl(new bkoigl.ScaleControl());

      return () => {
        map.remove();
      };
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="map"
      className="rounded-l-3xl"
      style={{ width: "500px", height: "600px", overflow: "hidden" }}
    ></div>
  );
};

export default DisplayMap;
