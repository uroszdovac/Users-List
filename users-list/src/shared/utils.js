class Utils {
    dateCol(date) {
        const splited = date.split('T');
        const nextsplit = splited[0].split('-');
        const newDate = `${nextsplit[2]}.${nextsplit[1]}.${nextsplit[0]}`;
        return newDate;
    };
    emailCut(email) {
        const dot = email.split('@');
        const name = dot[0].slice(0, 3);
        return `${name}...@${dot[1]}`;
    }
};
export default new Utils();
