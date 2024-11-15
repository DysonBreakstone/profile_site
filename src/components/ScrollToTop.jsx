import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  
  useEffect(() => {
    const contentBox = document.getElementById("contentBox");
    if (contentBox) {
      contentBox.scrollTo(0,0);
    }
  }, [location]);

  return null;
}