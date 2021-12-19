export const filterByName = (name, datas) => {
  return name.map((x) => datas.find((item) => item.name === x));
};

export const filterByDate = (datas, fromDate, toDate) => {
  return datas.filter((item) => {
    const a = new Date(item.date);
    const x = new Date(fromDate);
    const y = new Date(toDate);
    return a >= x && a <= y;
  });
};

export const A_Z_Data = (datas) => {
  return datas.sort((a, b) => a.name.localeCompare(b.name));
};

export const Z_A_Data = (datas) => {
  return datas.sort((a, b) => b.name.localeCompare(a.name));
};
