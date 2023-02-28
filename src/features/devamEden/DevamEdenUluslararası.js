import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { FilterBy } from "../../helpers/FilterBy";
import { FilterByDate } from "../../helpers/FilterByDate";
import { useGetOngoingProjectsQuery } from "./devamEdenApiSlice";
import Proje from "./Proje";
import Search from "../../helpers/Search";

const DevamEdenUluslararası = () => {
  const {
    data: ongoingProjects,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetOngoingProjectsQuery();

  const [isSorted, setIsSorted] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterByInternational = ongoingProjects?.filter((project) =>
      project.fonTuru.toLowerCase().includes("uluslararası")
    );

    filterByInternational?.sort((a, b) => {
      return (
        new Date(a.projeBaslangicTarihi) - new Date(b.projeBaslangicTarihi)
      );
    });

    setSortedData(filterByInternational);
    setFilteredData(filterByInternational);
  }, [ongoingProjects]);

  if (isLoading | isFetching) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#0670ab"} />
    );
  }

  if (isError) {
    return <h1 className="text-5xl text-center mt-72">Bir hata oluştu.</h1>;
  }

  if (isSuccess) {
    var tableContent =
      filteredData?.length &&
      filteredData.map((project) => (
        <Proje key={project.id} project={project} />
      ));

    let content = (
      <div className="overflow-x-auto h-screen">
        <Search sortedData={sortedData} setFilteredData={setFilteredData} />
        <table className="table table-compact w-full">
          <thead className="sticky top-0">
            <tr>
              <td
                onClick={() =>
                  FilterBy(
                    sortedData,
                    "projeyeFonSaglayanKurulus",
                    isSorted,
                    setIsSorted,
                    setSortedData
                  )
                }
                className="whitespace-normal rounded-none lg:whitespace-nowrap cursor-pointer"
              >
                Fon Sağlayan Kuruluş
              </td>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Çağrı Kodu
              </th>
              <th
                onClick={() =>
                  FilterBy(
                    sortedData,
                    "projeAdi",
                    isSorted,
                    setIsSorted,
                    setSortedData
                  )
                }
                className="whitespace-normal lg:whitespace-nowrap cursor-pointer"
              >
                Projenin Adı
              </th>
              <th
                onClick={() =>
                  FilterByDate(
                    sortedData,
                    "projeBaslangicTarihi",
                    isSorted,
                    setIsSorted,
                    setSortedData
                  )
                }
                className="whitespace-normal lg:whitespace-nowrap cursor-pointer"
              >
                Başlangıç Tarihi
              </th>
              <th
                onClick={() =>
                  FilterByDate(
                    sortedData,
                    "projeBitisTarihi",
                    isSorted,
                    setIsSorted,
                    setSortedData
                  )
                }
                className="whitespace-normal rounded-none lg:whitespace-nowrap cursor-pointer"
              >
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
