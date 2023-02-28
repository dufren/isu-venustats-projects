export const FilterByDate = (
  sortedData,
  column,
  isSorted,
  setIsSorted,
  setFilteredData
) => {
  let dataForSort = [...sortedData];

  dataForSort.sort((a, b) => {
    let dateA = new Date(a[column]);
    let dateB = new Date(b[column]);

    if (isSorted) return dateB - dateA;
    else return dateA - dateB;
  });

  setIsSorted(!isSorted);
  setFilteredData(dataForSort);
};
