import { PulseLoader } from "react-spinners";
import Proje from "./Proje";
import { useGetTamamlananProjelerQuery } from "./tamamlananApiSlice";

const TamamlananUlusal = () => {
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetTamamlananProjelerQuery();

  if (isLoading || isFetching || isError) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#828282"} />
    );
  }

  if (isSuccess) {
    const filteredUlusal = data?.filter((proje) =>
      proje.ddlFonTuru.toLowerCase().includes("ulusal")
    );

    let tableContent =
      filteredUlusal?.length &&
      filteredUlusal.map((proje) => <Proje key={proje.id} proje={proje} />);

    let content = (
      <div className="overflow-x-auto h-screen">
        <table className="table table-compact w-full">
          <thead className="sticky top-0">
            <tr>
              <td className="whitespace-normal lg:whitespace-nowrap">
                Fon Sağlayan Kuruluş
              </td>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Çağrı Kodu
              </th>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Projenin Adı
              </th>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Başlangıç Tarihi
              </th>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Bitiş Tarihi
              </th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    );
    return content;
  }
};

export default TamamlananUlusal;
