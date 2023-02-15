import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./features/login/Welcome";
import TamamlananUlusal from "./features/tamamlanan/TamamlananUlusal";
import TamamlananUluslararası from "./features/tamamlanan/TamamlananUluslararası";
import DevamEdenUlusal from "./features/devamEden/DevamEdenUlusal";
import DevamEdenUluslararası from "./features/devamEden/DevamEdenUluslararası";
import ReactGA from "react-ga4";
import { useEffect } from "react";

ReactGA.initialize("G-W0T0KK648Z");

function App() {
  const location = useLocation();

  useEffect(() => {
    const fullHref = window.location.href;
    const origin = window.location.origin;
    const fullPathWithHash = fullHref.startsWith(origin)
      ? fullHref.slice(origin.length)
      : fullHref;
    ReactGA.send({
      hitType: "pageview",
      page: `beta.istinye.edu.tr${fullPathWithHash}`,
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />

        <Route path="devam-eden-ulusal" element={<DevamEdenUlusal />} />
        <Route
          path="devam-eden-uluslararasi"
          element={<DevamEdenUluslararası />}
        />
        <Route path="tamamlanan-ulusal" element={<TamamlananUlusal />} />
        <Route
          path="tamamlanan-uluslararasi"
          element={<TamamlananUluslararası />}
        />
      </Route>
    </Routes>
  );
}

export default App;
