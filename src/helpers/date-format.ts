const dateFormat = (date: Date): string => {
    const yyyy = date.getFullYear();
    const month = date.getMonth() + 1; // Months start at 0!
    let mm = month.toString();
    if (month < 10) mm = '0' + mm;
    const day = date.getDate();
    let dd = day.toString();
    if (day < 10) dd = '0' + dd;
    const hours = date.getHours();
    let hh = hours.toString();
    if (hours < 10) hh = '0' + hh;
    const minutes = date.getMinutes();
    let MM = minutes.toString();
    if (minutes < 10) MM = '0' + MM;
    const seconds = date.getSeconds();
    let ss = seconds.toString();
    if (seconds < 10) ss = '0' + ss;
    return dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + MM + ':' + ss;
    //return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    //return date.toLocaleDateString();
    //return dateFormat(date, 'dd/mm/yyyy HH:MM:ss');
}

export default dateFormat;
