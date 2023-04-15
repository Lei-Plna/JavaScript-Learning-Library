import { timeFormat } from "..";

console.log(timeFormat(new Date().getTime(), 'yyyy-MM-dd HH:mm:ss'));

console.log(timeFormat(new Date().getTime(), 'datetime'));

console.log(timeFormat(new Date().getTime(), 'date'));

console.log(timeFormat(new Date().getTime(), 'time'));

console.log(timeFormat(new Date().getTime(), (dateInfo) => {
  const { yyyy, MM, dd, HH, mm, ss } = dateInfo;
  return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}`;
}));