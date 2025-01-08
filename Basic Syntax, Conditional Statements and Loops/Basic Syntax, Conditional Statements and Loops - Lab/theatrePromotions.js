function solve(weekDay, age) {
    switch (weekDay) {
        case ("Weekday"):
            if (age >= 0 && age <= 18) {
                console.log("12$")
            } else if (age > 18 && age <= 64) {
                console.log("18$")
            } else if (age > 64 && age <= 122) {
                console.log(" 12$")
            }
            break;
        case ("Weekend"):
            if (age >= 0 && age <= 18) {
                console.log("15$")
            } else if (age > 18 && age <= 64) {
                console.log("20$")
            } else if (age > 64 && age <= 122) {
                console.log(" 15$")
            }
            break;
        case ("Holiday"):
            if (age >= 0 && age <= 18) {
                console.log("5$")
            } else if (age > 18 && age <= 64) {
                console.log("12$")
            } else if (age > 64 && age <= 122) {
                console.log(" 10$")
            }else{
                
            }
            break;
        default:
            confirm.log("Error!")
            break;


    }

}

solve("Weekday", 19)


// Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
// Weekday	           12$	            18$	         12$
// Weekend	          15$	            20$	         15$
// Holiday	           5$	            12$	         10$
