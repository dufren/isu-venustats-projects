import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useGetOngoingProjectsQuery } from "./devamEdenApiSlice";
import { FilterBy } from "../../helpers/FilterBy";
import { FilterByDate } from "../../helpers/FilterByDate";
import Search from "../../helpers/Search";
import Proje from "./Proje";

const DevamEdenUlusal = () => {
  const {
    data: ongoingProjects,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetOngoingProjectsQuery();

  const [isSorted, setIsSorted] = useState(true);
  const [sortedData, setSortedData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filterByNational = ongoingProjects?.filter((project) =>
      project.fonTuru.toLowerCase().includes("ulusal")
    );

    const filterBySearchTerm = filterByNational?.filter((project) => {
      return (
        project.projeyeFonSaglayanKurulus
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        project.projeAdi
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        project.projeBaslangicTarihi.includes(searchTerm) ||
        project.projeBaslangicTarihi.includes(searchTerm)
      );
    });

    filterBySearchTerm?.sort((a, b) => {
      return (
        new Date(a.projeBaslangicTarihi) - new Date(b.projeBaslangicTarihi)
      );
    });

    if (filterBySearchTerm?.length > 0) {
      setSortedData(filterBySearchTerm);
    } else {
      setSortedData(null);
    }
  }, [ongoingProjects, searchTerm]);

  if (isLoading | isFetching) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#0670ab"} />
    );
  }

  if (isError) {
    return <h1 className="text-5xl text-center mt-72">Bir hata oluştu.</h1>;
  }

  if (isSuccess) {
    let tableContent =
      sortedData?.length &&
      sortedData.map((project) => <Proje key={project.id} project={project} />);

    let content = (
      <div className="overflow-x-auto h-screen">
        <Search searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
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

export default DevamEdenUlusal;
