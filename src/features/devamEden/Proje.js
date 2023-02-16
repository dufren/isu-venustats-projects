const Proje = ({ project }) => {
  return (
    <tr>
      <td className="whitespace-normal">
        {project.devamEdenProjeFonSaglayanKurulusTxt}
      </td>
      <td className="whitespace-normal">
        {project.devamEdenProjeCagriKoduTxt}
      </td>
      <td className="whitespace-normal">{project.devamEdenProjeAdiTxt}</td>
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
