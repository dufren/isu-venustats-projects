import { Link, Navigate } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center text-center gap-32">
      <div>
        <h1 className="text-3xl">Devam Eden Projeler</h1>
        <button
          className="mr-10 mt-4 text-xl border border-white rounded-lg p-3 hover:bg-slate-600 duration-500"
          onClick={() => <Navigate to="/projeler/devam-eden-ulusal" />}
        >
          Ulusal
        </button>
        <button
          className="text-xl border border-white rounded-lg p-3 hover:bg-slate-600 duration-500"
          onClick={() => <Navigate to="/projeler/devam-eden-uluslararası" />}
        >
          Uluslararası
        </button>
      </div>

      <div>
        <h1 className="text-3xl">Tamamlanan Projeler</h1>
        <button
          className="mr-10 mt-4 text-xl border border-white rounded-lg p-3 hover:bg-slate-600 duration-500"
          onClick={() => <Navigate to="/projeler/tamamlanan-ulusal" />}
        >
          Ulusal
        </button>
        <button
          className="text-xl border border-white rounded-lg p-3 hover:bg-slate-600 duration-500"
          onClick={() => <Navigate to="/projeler/tamamlanan-uluslararası" />}
        >
          Uluslararası
        </button>
      </div>
    </div>
  );
};

export default Welcome;
