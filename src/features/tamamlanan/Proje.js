const Proje = ({ proje }) => {
  return (
    <tr>
      <td className="whitespace-normal">{proje.fonSaglayanKurulusTxt}</td>
      <td className="whitespace-normal">{proje.cagriKoduTxt}</td>
      <td className="whitespace-normal">{proje.projeAdiTxt}</td>
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
