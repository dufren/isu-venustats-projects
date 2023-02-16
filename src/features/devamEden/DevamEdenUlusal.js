import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useGetOngoingProjectsQuery } from "./devamEdenApiSlice";
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
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const filterByNational = ongoingProjects?.filter((project) =>
      project.ddlDevamEdenProjeFonTuru.toLowerCase().includes("ulusal")
    );
    setSortedData(filterByNational);
  }, [ongoingProjects]);

  if (isLoading | isFetching | isError) {
    return (
      <PulseLoader className="text-center mt-72" size={50} color={"#0670ab"} />
    );
  }

  if (isSuccess) {
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

    var tableContent =
      sortedData?.length &&
      sortedData.map((project) => <Proje key={project.id} project={project} />);

    let content = (
      <div className="overflow-x-auto h-screen">
        <table className="table table-compact w-full">
          <thead className="sticky top-0">
            <tr>
              <td
                onClick={() => filterBy("devamEdenProjeFonSaglayanKurulusTxt")}
                className="whitespace-normal rounded-none lg:whitespace-nowrap cursor-pointer"
              >
                Fon Sağlayan Kuruluş
              </td>
              <th className="whitespace-normal lg:whitespace-nowrap">
                Çağrı Kodu
              </th>
              <th
                onClick={() => filterBy("devamEdenProjeAdiTxt")}
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

export default DevamEdenUlusal;
