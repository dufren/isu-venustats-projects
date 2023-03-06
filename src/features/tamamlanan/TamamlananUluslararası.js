import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import Proje from "../../components/Proje";
import { useGetTamamlananProjelerQuery } from "./tamamlananApiSlice";
import Content from "../../components/Content";

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
  const [filteredData, setFilteredData] = useState(null);

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

export default TamamlananUlusal;
