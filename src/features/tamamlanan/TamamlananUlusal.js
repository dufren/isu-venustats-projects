import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import Proje from "./Proje";
import { useGetTamamlananProjelerQuery } from "./tamamlananApiSlice";
import { FilterBy } from "../../helpers/FilterBy";
import { FilterByDate } from "../../helpers/FilterByDate";

const TamamlananUlusal = () => {
  const {
    data: completedProjects,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetTamamlananProjelerQuery();

  const [isSorted, setIsSorted] = useState(true);
  const [sortedData, setSortedData] = useState(null);

  useEffect(() => {
    const filterByNational = completedProjects?.filter((project) =>
      project.fonTuru.toLowerCase().includes("ulusal")
    );

    filterByNational?.sort((a, b) => {
      return (
        new Date(a.projeBaslangicTarihi) - new Date(b.projeBaslangicTarihi)
      );
    });

    setSortedData(filterByNational);
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
      sortedData?.length &&
      sortedData.map((project) => <Proje key={project.id} project={project} />);

    let content = (
      <div className="overflow-x-auto h-screen">
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

export default TamamlananUlusal;
