const Proje = ({ project }) => {
  return (
    <tr>
      <td className="whitespace-normal">{project.projeyeFonSaglayanKurulus}</td>
      <td className="whitespace-normal">{project.cagriKodu}</td>
      <td className="whitespace-normal">{project.projeAdi}</td>
      <td className="whitespace-normal">
        {project.projeBaslangicTarihi.split(" ")[0]}
      </td>
      <td className="whitespace-normal">
        {project.projeBitisTarihi.split(" ")[0]}
      </td>
    </tr>
  );
};

export default Proje;
