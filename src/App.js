import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./features/login/Welcome";
import TamamlananUlusal from "./features/tamamlanan/TamamlananUlusal";
import TamamlananUluslararası from "./features/tamamlanan/TamamlananUluslararası";
import DevamEdenUlusal from "./features/devamEden/DevamEdenUlusal";
import DevamEdenUluslararası from "./features/devamEden/DevamEdenUluslararası";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
<<<<<<< HEAD
        <Route path="devam-eden-ulusal" element={<DevamEdenUlusal />} />
        <Route
          path="devam-eden-uluslararası"
          element={<DevamEdenUluslararası />}
        />
        <Route path="tamamlanan-ulusal" element={<TamamlananUlusal />} />
        <Route
          path="tamamlanan-uluslararası"
          element={<TamamlananUluslararası />}
        />
=======
        <Route path="projeler">
          <Route path="devam-eden-ulusal" element={<DevamEdenUlusal />} />
          <Route
            path="devam-eden-uluslararası"
            element={<DevamEdenUluslararası />}
          />
          <Route path="tamamlanan-ulusal" element={<TamamlananUlusal />} />
          <Route
            path="tamamlanan-uluslararası"
            element={<TamamlananUluslararası />}
          />
        </Route>
>>>>>>> d6664c0ea704b7a144c55598c708db04fb557d8f
      </Route>
    </Routes>
  );
}

export default App;
