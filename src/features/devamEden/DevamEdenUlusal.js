import { PulseLoader } from "react-spinners";
import { useGetDevamEdenProjelerQuery } from "./devamEdenApiSlice";
import Proje from "./Proje";

const DevamEdenUlusal = () => {
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetDevamEdenProjelerQuery();

  let content;

  if (isLoading | isFetching | isError) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#828282"} />
    );
  }

  if (isSuccess) {
    const filteredUlusal = data?.filter((proje) =>
      proje.ddlDevamEdenProjeFonTuru.toLowerCase().includes("ulusal")
    );

    let tableContent =
      filteredUlusal?.length &&
      filteredUlusal.map((proje) => <Proje key={proje.id} proje={proje} />);

    let content = (
      <div className="overflow-auto relative h-screen">
        <table className="table-fixed w-full">
          <thead className="bg-gray-100 shadow-lg sticky top-0">
            <tr className="text-left text-sm">
              <th className="p-3 font-semibold w-[120px]">
                Fon Sağlayan Kuruluş
              </th>
              <th className="p-3 font-semibold w-[120px]">Çağrı Kodu</th>
              <th className="p-3 font-semibold w-[200px] lg:w-[400px]">
                Projenin Adı
              </th>
              <th className="p-3 font-semibold w-[80px]">Başlangıç Tarihi</th>
              <th className="p-3 font-semibold w-[80px]">Bitiş Tarihi</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    );
    return content;
  }
};

export default DevamEdenUlusal;
