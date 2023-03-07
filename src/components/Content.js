import Search from "./Search";
import { FilterBy } from "../helpers/FilterBy";
import { FilterByDate } from "../helpers/FilterByDate";
import { BiSortAlt2 } from "react-icons/bi";

const Content = ({
  sortedData,
  setFilteredData,
  isSorted,
  setIsSorted,
  tableContent,
}) => {
  return (
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
                PROJENİN ADI
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
};

export default Content;
