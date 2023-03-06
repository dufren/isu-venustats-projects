const Proje = ({ project }) => {
  return (
    <>
      <tr>
        <td className="border-none">
          <input type="checkbox" id={project.id} className="modal-toggle" />

          <div className="modal">
            <div className="modal-box whitespace-pre-wrap">
              <h3 className="font-bold text-lg">{project.projeAdi}</h3>
              <p className="py-4">
                <span className="font-bold">Çağrı Adı: </span>
                {project.cagriAdi}
              </p>
              <p className="py-4">
                <span className="font-bold">Çağrı Kodu: </span>
                {project.cagriKodu}
              </p>
              <p className="py-4">
                <span className="font-bold">Fon Turu: </span>
                {project.fonTuru}
              </p>
              <p className="py-4">
                <span className="font-bold">
                  Projeye Fon Sağlayan Kuruluş:{" "}
                </span>
                {project.projeyeFonSaglayanKurulus}
              </p>
              <p className="py-4">
                <span className="font-bold">Proje Başlangıç Tarihi: </span>
                {project.projeBaslangicTarihi}
              </p>
              <p className="py-4">
                <span className="font-bold">Proje Bitiş Tarihi: </span>
                {project.projeBitisTarihi}
              </p>
              <div className="modal-action">
                <label htmlFor={project.id} className="btn">
                  Kapat
                </label>
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td className="whitespace-normal ">
          {project.projeyeFonSaglayanKurulus}
        </td>
        <td className="whitespace-normal ">{project.cagriKodu}</td>
        <td className="whitespace-normal ">
          <label
            htmlFor={project.id}
            className="cursor-pointer border-b border-white hover:border-black"
          >
            {project.projeAdi}
          </label>
        </td>
        <td className="whitespace-normal ">
          {project.projeBaslangicTarihi.split(" ")[0]}
        </td>
        <td className="whitespace-normal ">
          {project.projeBitisTarihi.split(" ")[0]}
        </td>
      </tr>
    </>
  );
};

export default Proje;
