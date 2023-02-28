import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { FilterBy } from "../../helpers/FilterBy";
import { FilterByDate } from "../../helpers/FilterByDate";
import Proje from "./Proje";
import { useGetTamamlananProjelerQuery } from "./tamamlananApiSlice";
import Search from "../../helpers/Search";
import { BiSortAlt2 } from "react-icons/bi";

const TamamlananUlusal = () => {
  const {
    data: completedProjects,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetTamamlananProjelerQuery();

  const [isSorted, setIsSorted] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterByInternational = completedProjects?.filter((project) =>
      project.fonTuru.toLowerCase().includes("uluslararası")
    );

    filterByInternational?.sort((a, b) => {
      return (
        new Date(a.projeBaslangicTarihi) - new Date(b.projeBaslangicTarihi)
      );
    });

    setSortedData(filterByInternational);
    setFilteredData(filterByInternational);
  }, [completedProjects]);

  if (isLoading || isFetching) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#0670ab"} />
    );
  }

  if (isError) {
    return <h1 className="text-5xl text-center mt-72">Bir hata oluştu.</h1>;
  }

  if (isSuccess) {
    let tableContent =
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
              <td className="whitespace-normal rounded-none lg:whitespace-nowrap">
                <h1 className="flex flex-row items-center">
                  Fon Sağlayan Kuruluş
                  <BiSortAlt2
                    className="cursor-pointer text-2xl"
                    onClick={() =>
                      FilterBy(
                        sortedData,
                        "projeyeFonSaglayanKurulus",
                        isSorted,
                        setIsSorted,
                        setFilteredData
                      )
                    }
                  />
                </h1>
              </td>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Çağrı Kodu
              </th>
              <th className="whitespace-normal lg:whitespace-nowrap">
                <h1 className="flex flex-row items-center">
                  Projenin Adı
                  <BiSortAlt2
                    onClick={() =>
                      FilterBy(
                        sortedData,
                        "projeAdi",
                        isSorted,
                        setIsSorted,
                        setFilteredData
                      )
                    }
                    className="cursor-pointer text-2xl"
                  />
                </h1>
              </th>
              <th className="whitespace-normal lg:whitespace-nowrap">
                <h1 className="flex flex-row items-center">
                  Başlangıç Tarihi
                  <BiSortAlt2
                    className="cursor-pointer text-2xl"
                    onClick={() =>
                      FilterByDate(
                        sortedData,
                        "projeBaslangicTarihi",
                        isSorted,
                        setIsSorted,
                        setFilteredData
                      )
                    }
                  />
                </h1>
              </th>
              <th className="whitespace-normal rounded-none lg:whitespace-nowrap">
                <h1 className="flex flex-row items-center">
                  Bitiş Tarihi
                  <BiSortAlt2
                    className="cursor-pointer text-2xl"
                    onClick={() =>
                      FilterByDate(
                        sortedData,
                        "projeBitisTarihi",
                        isSorted,
                        setIsSorted,
                        setFilteredData
                      )
                    }
                  />
                </h1>
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
