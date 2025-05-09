// function addTwoNums(a, b) {
//   sum = a + b;
//   return sum;
// }
// var sum = addTwoNums(5, 3);
// console.log(sum);

// var grains = ["wheat", "rice", "corn", "barley", "oats"];

// // grains.push('quinoa');
// // grains.push('millet');

// // for (var i = 0; i < grains.length; i++) {
// //   console.log(grains[i]);
// // }

// function displayGrains(grains) {
//   for (var i = 0; i < grains.length; i++) {
//     console.log(grains[i]);
//   }
// }

// displayGrains(grains);
// var arrayOfKeys = ["legs", "color", "material", "price"];
// var table = {
//   legs: 4,
//   color: "brown",
//   material: "wood",
//   price: 100,
// };
// for (var i = 0; i < arrayOfKeys.length; i++) {
//   console.log(table[arrayOfKeys[i]]);
// }

// console.log(table);
// console.log(table.type);
// console.log(table["color"]);

// var blankArray = [];

// blankArray.push("a");
// blankArray.push("b");
// blankArray.push("c");
// blankArray.push("d");
// blankArray.push("e");

// console.log(blankArray);

// blankArray.pop();
// blankArray.pop();
// blankArray.pop();

// console.log(blankArray);

// Write a function which takes an array of fruits and mutates it
// with new fruits and return the newly mutated array and also pop fruits

// console.log(Math.PI);
// console.log(Math.E); //Math.PI
// console.log(Math.random()*10); // 0-1

// var myString = "Hello, World!";
// // console.log(myString.indexOf("W"));
// console.log(myString.lastIndexOf("o"));

// var myString = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
// var myArray = myString.split(",");
// console.log(myArray);

// var myString2 = myString.toUpperCase();
// console.log(myString2);

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
    start: function () {
        console.log("Car started");
    },
    stop: function () {
        console.log("Car stopped");
    },
    };

    car.start();
    console.log(car.make); // Toyota car.make