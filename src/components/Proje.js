const Proje = ({ project }) => {
  return (
    <>
      <tr>
        <td className="border-none">
          <input type="checkbox" id={project.id} className="modal-toggle" />

          <div className="modal bg-transparent">
            <div className="modal-box whitespace-pre-wrap shadow-2xl shadow-black">
              <h3 className="font-bold text-lg">{project.projeAdi}</h3>
              <br />
              <p>
                <span className="font-bold">Akademik Birim: </span>
                {project.akademikBirim}
              </p>
              <p>
                <span className="font-bold">Bölüm/Program: </span>
                {project.bolumProgram}
              </p>
              <p>
                <span className="font-bold">Yürütücü Adı: </span>
                {project.adSoyad}
              </p>
              <p>
                <span className="font-bold">Proje Ekibi: </span>
                {project.projeEkibi}
              </p>
              <p>
                <span className="font-bold">Proje Bütçesi: </span>
                {project.projeButcesi}
              </p>
              <p>
                <span className="font-bold">Özet:</span>
                {project.projeninOzetiTR}
              </p>
              <p>
                <span className="font-bold">Anahtar Kelimeler:</span>
                {project.projeAnahtarKelimeleriTR}
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
          {project.projeyeFonSaglayanKurulus} {project.cagriKodu}
        </td>
        <td className="whitespace-normal ">{project.projeId}</td>
        <td className="whitespace-normal ">
          <label
            htmlFor={project.id}
            className="cursor-pointer border-b border-black text-blue-800"
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
