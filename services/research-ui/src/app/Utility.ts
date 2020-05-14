export const SortArrObj = (data: any[], sortingItem: string, arrangement: Arrangement) => {
  return data.sort((a, b) => {
    if (a[sortingItem] < b[sortingItem]) {
      return arrangement === Arrangement.ASCENDING ? 1 : -1;
    }
    if (a[sortingItem] > b[sortingItem]) {
      return arrangement === Arrangement.ASCENDING ? -1 : 1;
    }
    return 0;
  });
};

export enum Arrangement {
  ASCENDING,
  DESCENDING,
}
