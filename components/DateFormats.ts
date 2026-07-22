/*############################# 
    * Y-m-d Date Format
#############################*/

function formatDate(dateObject: string) {
  const d = new Date(dateObject);
  const day = d.getDate();
  const months = d.getMonth();
  const mnth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = mnth[months];
  const year = d.getFullYear();
  const days = day < 10 ? '0' + day : day;
  const monthx = Number(month) < 10 ? '0' + month : month;
  const date = days + ' ' + monthx + ' ' + year;
  return date;
}

const year = (date: string) => {
  const dt = new Date(date);
  return dt.getFullYear();
};

const month = (date: string) => {
  const dt = new Date(date);
  return dt.getMonth() + 1;
};

export { formatDate, year, month };
