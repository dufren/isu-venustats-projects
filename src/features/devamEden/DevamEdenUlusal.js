import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useGetOngoingProjectsQuery } from "./devamEdenApiSlice";
import Proje from "./Proje";
import Content from "../../helpers/Content";

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
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const filterByNational = ongoingProjects?.filter((project) =>
      project.fonTuru.toLowerCase().includes("ulusal")
    );

    filterByNational?.sort((a, b) => {
      return (
        new Date(a.projeBaslangicTarihi) - new Date(b.projeBaslangicTarihi)
      );
    });

    setSortedData(filterByNational);
    setFilteredData(filterByNational);
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
    let tableContent =
      filteredData?.length &&
      filteredData.map((project) => (
        <Proje key={project.id} project={project} />
      ));

    return (
      <Content
        sortedData={sortedData}
        setFilteredData={setFilteredData}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        tableContent={tableContent}
      />
    );
  }
};

export default DevamEdenUlusal;
