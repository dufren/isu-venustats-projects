export const FilterByDate = (
  sortedData,
  column,
  isSorted,
  setIsSorted,
  setSortedData
) => {
  let dataForSort = [...sortedData];

  dataForSort.sort((a, b) => {
    if (isSorted) return new Date(b[column]) - new Date(a[column]);
    else return new Date(a[column]) - new Date(b[column]);
  });

  setIsSorted(!isSorted);
  setSortedData(dataForSort);
};
