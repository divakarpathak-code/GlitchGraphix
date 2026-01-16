import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [openDoor, setOpenDoor] = useState(false);
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const startDoorTimer = setTimeout(() => setOpenDoor(true), 500); // start doors at 0.5s
    const removeLoaderTimer = setTimeout(() => setShowSite(true), 3500); // remove loader at 2.5s

    return () => {
      clearTimeout(startDoorTimer);
      clearTimeout(removeLoaderTimer);
    };
  }, []);

  if (showSite) return null;

  return (
    <div className="loader-screen">
      <div className={`door top ${openDoor ? "open" : ""}`}></div>
      <h1 className="loader-logo">GGX</h1>
      <div className={`door bottom ${openDoor ? "open" : ""}`}></div>
    </div>
  );
}
