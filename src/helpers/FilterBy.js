export const FilterBy = (
  sortedData,
  column,
  isSorted,
  setIsSorted,
  setFilteredData
) => {
  let dataForSort = [...sortedData];

  dataForSort.sort((a, b) => {
    let firstProject = a[column];
    let secondProject = b[column];

    if (isSorted) return firstProject.localeCompare(secondProject);
    else return secondProject.localeCompare(firstProject);
  });

  setIsSorted(!isSorted);
  setFilteredData(dataForSort);
};
