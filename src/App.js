import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./features/login/Welcome";
import TamamlananUlusal from "./features/tamamlanan/TamamlananUlusal";
import TamamlananUluslararası from "./features/tamamlanan/TamamlananUluslararası";
import DevamEdenUlusal from "./features/devamEden/DevamEdenUlusal"
import DevamEdenUluslararası from "./features/devamEden/DevamEdenUluslararası"
import Deneme from "./features/login/Deneme";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="devam-eden-ulusal" element={<DevamEdenUlusal />} />
        <Route path="devam-eden-uluslararası" element={<DevamEdenUluslararası />} />
        <Route path="tamamlanan-ulusal" element={<TamamlananUlusal />} />
        <Route path="tamamlanan-uluslararası" element={<TamamlananUluslararası />} />
        <Route path="deneme" element={<Deneme />} />
      </Route>
    </Routes>
  );
}

export default App;
