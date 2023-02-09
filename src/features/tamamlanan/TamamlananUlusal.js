import { PulseLoader } from "react-spinners";
import Proje from "./Proje";
import { useGetTamamlananProjelerQuery } from "./tamamlananApiSlice";

const TamamlananUlusal = () => {
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetTamamlananProjelerQuery();

  if (isLoading | isFetching | isError) {
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
      <div className="overflow-auto relative h-screen">
        <table className="w-full table-fixed">
          <thead className="bg-gray-100 border border-gray-300 shadow-lg sticky top-0 border-x">
            <tr className="text-sm text-left">
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

export default TamamlananUlusal;
