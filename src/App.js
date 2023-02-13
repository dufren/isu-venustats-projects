import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./features/login/Welcome";
import TamamlananUlusal from "./features/tamamlanan/TamamlananUlusal";
import TamamlananUluslararası from "./features/tamamlanan/TamamlananUluslararası";
import DevamEdenUlusal from "./features/devamEden/DevamEdenUlusal";
import DevamEdenUluslararası from "./features/devamEden/DevamEdenUluslararası";
import ReactGA from "react-ga4";
import { useEffect } from "react";
const TRACKING_ID = "G-W0T0KK648Z";

ReactGA.initialize(TRACKING_ID);

function App() {
  console.log(window.location.pathname, "den", window.location.search);
  useEffect(() => {
    ReactGA._gaCommandSendPageviewParameters(
      window.location.pathname + window.location.search
    );
  }, []);

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
