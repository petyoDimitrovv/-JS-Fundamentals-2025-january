function centuriesConverter (centuries){
const centureToYear = centuries * 100;
const yearToDays =Math.trunc(centureToYear * 365.2422);
const daysToHours = yearToDays * 24;
const hoursToMinutes = daysToHours * 60 ;

console.log(`${centuries} centuries = ${centureToYear} years = ${yearToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);

}

centuriesConverter(5)