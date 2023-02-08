import { PulseLoader } from "react-spinners";
import { useGetDevamEdenProjelerQuery } from "./devamEdenApiSlice";
import Proje from "./Proje";

const DevamEdenUluslararası = () => {
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetDevamEdenProjelerQuery();

  let content;

  if (isLoading || isFetching || isError) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#828282"} />
    );
  }

  if (isSuccess) {
    const filteredUlusal = data?.filter((proje) =>
      proje.ddlDevamEdenProjeFonTuru.toLowerCase().includes("uluslararası")
    );

    let tableContent =
      filteredUlusal?.length &&
      filteredUlusal.map((proje) => <Proje key={proje.id} proje={proje} />);
    content = (
      <div className="overflow-auto relative">
        <table className="w-full table-fixed">
          <thead className="bg-gray-100 border border-gray-300">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-[120px]">
                Fon Sağlayan Kuruluş
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-[120px]">
                Çağrı Kodu
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-[200px] lg:w-[400px]">
                Projenin Adı
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-[80px]">
                Başlangıç Tarihi
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-[80px]">
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
