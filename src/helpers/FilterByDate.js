export const FilterByDate = (
  sortedData,
  column,
  isSorted,
  setIsSorted,
  setSortedData
) => {
  let dataForSort = [...sortedData];

  dataForSort.sort((a, b) => {
    let dateA = new Date(a[column]);
    let dateB = new Date(b[column]);

    console.log(dateA, dateB);

    if (isSorted) return dateB - dateA;
    else return dateA - dateB;
  });

  setIsSorted(!isSorted);
  setSortedData(dataForSort);
};
