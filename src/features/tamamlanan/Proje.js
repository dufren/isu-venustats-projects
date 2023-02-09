const Proje = ({ proje }) => {
  return (
    <tr className="border border-gray-300 shadow">
      <td className="p-3 text-sm text-gray-700 text-left">
        {proje.cagriKoduTxt}
      </td>
      <td className="p-3 text-sm text-gray-700 text-left">
        {proje.fonSaglayanKurulusTxt}
      </td>
      <td className="p-3 text-sm text-gray-700 text-left">
        {proje.projeAdiTxt}
      </td>
      <td className="p-3 text-sm text-gray-700 text-left">
        {proje.ddlDevamEdenProjeBaslangicTarihi.split(" ")[0]}
      </td>
      <td className="p-3 text-sm text-gray-700 text-left">
        {proje.ddlDevamEdenProjeBitisTarihi.split(" ")[0]}
      </td>
    </tr>
  );
};

export default Proje;
