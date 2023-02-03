import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DevamEdenList from "./features/devamEden/DevamEdenList";
import Welcome from "./features/login/Welcome";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="devam-eden-projeler" element={<DevamEdenList />} />
      </Route>
    </Routes>
  );
}

export default App;
