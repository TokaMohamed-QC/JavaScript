let attendence = 16;

if (attendence < 15){
    console.log("We have room")
}else if (attendence > 15){

    console.log("We are over capacity")
}else {
    console.log("We are full capacity")
}

const car = {
    color: "red",
    price: 10000,
    numOfDoors: 4
}

if(car.color === "red" || (car.price < 1000 && car.numOfDoors === 4)){
    console.log("We will take it")
} else {
    console.log("It's best to keep looking")
}