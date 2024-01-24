module.exports = {
    format_date: (date) => {
        const d = new Date(date);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let hour = d.getHours();
        let minute = d.getMinutes();
        const newDate = `${day}-${month}-${year} @ ${hour}:${minute}`;
        return newDate;
    }
}