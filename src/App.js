import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DevamEdenList from "./features/devamEden/DevamEdenList";
import Welcome from "./features/login/Welcome";
import TamamlananList from "./features/tamamlanan/TamamlananList";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="devam-eden-projeler" element={<DevamEdenList />} />
        <Route path="tamamlanan-projeler" element={<TamamlananList />} />
      </Route>
    </Routes>
  );
}

export default App;
