// try
// {
//    throw new Error("this is an error")
// }

// catch(e)
// {
//     console.log(e.name)
// }

// console.log("Remaining code is functioning accurately")

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  drive(){
    console.log(this.speed)
  }
}

const honda = new Car("red",240)
honda.drive()