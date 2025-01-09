function solve(peopleCount, peopleType, day) {
    let price = 0;
    let sumPrice = 0;
    switch (day) {
        case "Friday":
            if (peopleType == "Students"){
                price = 8.45

            }else if (peopleType == "Business"){
                price = 10.90

            }else if (peopleType == "Regular"){
                price = 15

            }
                 break;
        case "Saturday":
            if (peopleType == "Students"){
                price = 9.80

            }else if (peopleType == "Business"){
                price = 15.60

            }else if (peopleType == "Regular"){
                price = 20

            }

            break;
        case "Sunday":
            
        
        if (peopleType == "Students"){
                price = 10.46

            }else if (peopleType == "Business"){
                price = 16

            }else if (peopleType == "Regular"){
                price = 22.50

            }

            break;

            
            
        }

        sumPrice = price * peopleCount

        if (peopleType === "Students" && peopleCount >= 30){
            sumPrice -= sumPrice * 0.15
        
        }else if (peopleType == "Business" && peopleCount >= 100){
            sumPrice = price * (peopleCount - 10)
        }else if (peopleType == "Regular" && (peopleCount >= 10 && peopleCount <= 20)){
            sumPrice -= sumPrice *0.05
        }


        console.log(`Total price: ${sumPrice.toFixed(2)} `)



}
solve(30,
    "Students",
    "Sunday"
    
    )



// ere are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
