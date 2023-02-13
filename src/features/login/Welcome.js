import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full lg:flex-row p-10">
      <div className="grid flex-grow h-44 card bg-base-300 rounded-box place-items-center">
        <h1 className="text-4xl">Devam Eden Projeler</h1>
        <div>
          <button
            className="btn mr-5 btn-primary"
            onClick={() => navigate("devam-eden-ulusal")}
          >
            Ulusal
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("devam-eden-uluslararasi")}
          >
            Uluslararası
          </button>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow h-44 card bg-base-300 rounded-box place-items-center">
        <h1 className="text-4xl">Tamamlanan Projeler</h1>
        <div>
          <button
            className="btn mr-5 btn-primary"
            onClick={() => navigate("tamamlanan-ulusal")}
          >
            Ulusal
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("tamamlanan-uluslararasi")}
          >
            Uluslararası
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
