const Proje = ({ proje }) => {
  return (
    <tr>
      <td className="whitespace-normal">{proje.devamEdenProjeCagriKoduTxt}</td>
      <td className="whitespace-normal">
        {proje.devamEdenProjeFonSaglayanKurulusTxt}
      </td>
      <td className="whitespace-normal">{proje.devamEdenProjeAdiTxt}</td>
      <td className="whitespace-normal">
        {proje.ddlDevamEdenProjeBaslangicTarihi.split(" ")[0]}
      </td>
      <td className="whitespace-normal">
        {proje.ddlDevamEdenProjeBitisTarihi.split(" ")[0]}
      </td>
    </tr>
  );
};

export default Proje;
