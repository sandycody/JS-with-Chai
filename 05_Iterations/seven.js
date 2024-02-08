// Map function in JS

const arr = [34 ,67, 10, 3, 5, 665];
const mapMine = arr
                .map((num) => num + 10)
                .map( (num) => num * 2)
                .filter( (num => num >= 50));

console.log(mapMine);

// Another eXample 