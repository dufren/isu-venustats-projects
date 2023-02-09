const Proje = ({ proje }) => {
  return (
    <tr className=" text-sm text-gray-700 border-b border-gray-300 shadow">
      <td className="p-3">{proje.devamEdenProjeCagriKoduTxt}</td>
      <td className="p-3">{proje.devamEdenProjeFonSaglayanKurulusTxt}</td>
      <td className="p-3">{proje.devamEdenProjeAdiTxt}</td>
      <td className="p-3">
        {proje.ddlDevamEdenProjeBaslangicTarihi.split(" ")[0]}
      </td>
      <td className="p-3">
        {proje.ddlDevamEdenProjeBitisTarihi.split(" ")[0]}
      </td>
    </tr>
  );
};

export default Proje;
