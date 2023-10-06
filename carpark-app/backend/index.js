let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
// current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
let result = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

console.log("Dear user,"+"\n\n\nYou have requested for a password change at "+result+".\n\nPlease click "+"{link}"+" to change your password." +"\n\nWarm regards,\nSwiftPark");