function solve(country){
    switch (country) {
        case "USA":
        case "England":
          console.log("English");
          break;
        case "Spain":
        case "Argentina":
        case "Mexico":
          console.log("Spanish");
          break;

        default :
        console.log("unknown")
    }
}


// •	English is spoken in England and USA;
// •	Spanish is spoken in Spain, Argentina, and Mexico;
// •	For the others, we should print "unknown";

solve("England")
solve("Argentina")
solve("USA")
solve("Dolno Uino")