const Proje = ({ project }) => {
  return (
    <tr>
      <td className="whitespace-normal">{project.fonSaglayanKurulusTxt}</td>
      <td className="whitespace-normal">{project.cagriKoduTxt}</td>
      <td className="whitespace-normal">{project.projeAdiTxt}</td>
      <td className="whitespace-normal">
        {project.ddlDevamEdenProjeBaslangicTarihi.split(" ")[0]}
      </td>
      <td className="whitespace-normal">
        {project.ddlDevamEdenProjeBitisTarihi.split(" ")[0]}
      </td>
    </tr>
  );
};

export default Proje;
