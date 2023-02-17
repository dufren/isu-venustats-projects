import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import Proje from "./Proje";
import { useGetTamamlananProjelerQuery } from "./tamamlananApiSlice";

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
    const filterByInternational = completedProjects?.filter((project) =>
      project.ddlFonTuru.toLowerCase().includes("uluslararası")
    );
    setSortedData(filterByInternational);
  }, [completedProjects]);

  const filterBy = (column) => {
    let dataForSort = [...sortedData];

    dataForSort.sort((a, b) => {
      let firstProject = a[column];
      let secondProject = b[column];

      if (isSorted) return firstProject.localeCompare(secondProject);
      else return secondProject.localeCompare(firstProject);
    });

    setIsSorted(!isSorted);
    setSortedData(dataForSort);
  };

  if (isLoading || isFetching || isError) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#0670ab"} />
    );
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
                onClick={() => filterBy("fonSaglayanKurulusTxt")}
                className="whitespace-normal rounded-none lg:whitespace-nowrap cursor-pointer"
              >
                Fon Sağlayan Kuruluş
              </td>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Çağrı Kodu
              </th>
              <th
                onClick={() => filterBy("projeAdiTxt")}
                className="whitespace-normal lg:whitespace-nowrap cursor-pointer"
              >
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

export default TamamlananUlusal;
