const Proje = ({ proje }) => {

    return (
        <tr className="border border-gray-300">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{proje.devamEdenProjeCagriKoduTxt}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{proje.devamEdenProjeFonSaglayanKurulusTxt}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{proje.devamEdenProjeAdiTxt}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{proje.ddlDevamEdenProjeBaslangicTarihi.split(" ")[0]}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{proje.ddlDevamEdenProjeBitisTarihi.split(" ")[0]}</td>
        </tr>
    )
}

export default Proje