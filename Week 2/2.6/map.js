const arr = [2,5,6,5,2,15,3,542,65,25,2315132,2,235,456887,45845,2];
transform = (n) => {
   let a = n*2;
   return a;
}


ans = arr.map(transform);

console.log(ans);


// const arr = [2, 5, 6, 5, 2, 15, 3, 542, 65, 25, 2315132, 2, 235, 456887, 45845, 2];

// transform = (n) => {
//    let a = n * 2;
//    return a; // Return the modified value
// }

// const ans = arr.map(transform);

// console.log(ans);
