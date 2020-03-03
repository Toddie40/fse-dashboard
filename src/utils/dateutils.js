export default function ofrify(date){
    let isodate = date;
    if (typeof date !== "string"){
        isodate = date.toISOString();
        isodate = isodate.split("T")[0]; //remove everything after the time character
    }
    isodate = isodate.substr(2); //chop off first two characters
    isodate = isodate.split("-"); //chop up into year, month, day
    isodate = isodate[0]+isodate[1]+isodate[2]; //add together year+month+day
    return isodate
}
