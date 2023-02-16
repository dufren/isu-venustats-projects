import { PulseLoader } from "react-spinners";
import { useGetOngoingProjectsQuery } from "./devamEdenApiSlice";
import Proje from "./Proje";

const DevamEdenUluslararası = () => {
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetOngoingProjectsQuery();

  if (isLoading || isFetching || isError) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#0670ab"} />
    );
  }

  if (isSuccess) {
    const filteredUlusal = data?.filter((proje) =>
      proje.ddlDevamEdenProjeFonTuru.toLowerCase().includes("uluslararası")
    );

    let tableContent =
      filteredUlusal?.length &&
      filteredUlusal.map((proje) => <Proje key={proje.id} proje={proje} />);

    let content = (
      <div className="overflow-x-auto h-screen">
        <table className="table table-compact w-full">
          <thead className="sticky top-0">
            <tr>
              <td className="whitespace-normal rounded-none lg:whitespace-nowrap">
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
              <th className="whitespace-normal rounded-none lg:whitespace-nowrap">
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

export default DevamEdenUluslararası;
