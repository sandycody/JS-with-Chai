// for-in loop
// Definition : for-in loop is used to loop over the properties of an object

const langObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    py: "python"
}

/*for (const key in langObject) {
    console.log(`${key} is shortcut for ${langObject[key]}`);
    // Here key is used for getting keys of object and langObject[key] is used for getting values of correspoding keys
}*/

// But now the thing is that for-in loop is used in arrays, let's see

const progLanguages = ["rb", "js", "py", "java", "cpp"];

/*for (const key in progLanguages) {
    console.log(key); //we get indices of above array elements
    // To get the elements also of array using for-in loop:
}*/

/*for (const key in progLanguages) {
    console.log(`Index is ${key} and the element is ${progLanguages[key]}`);
} */

// Using for-in loop on map

const map = new Map();
// console.log(typeof map); //object (So it is not iterable)

for (const [key, value] in map) {
    console.log(`${key} => ${value}`); //Nothing will be executed as map is an object declared in line 31 above and it is not iterable
}
/* NOTE : 

Map VS Object or Difference between Map and Object :-

- In Object, the data-type of the key-field is restricted to integer, strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)

- In the Map, the original order of elements is preserved. This is not true in case of objects.

- The Map is an instance of an object but the vice-versa is not true. 

Illustration of above point using code snippet:
<script> 
	var map = new Map([ 
		[5, 4], 
		[7, 9] 
	]); 

	console.log(map instanceof Object); //true

	//output:false 
	var obj = new Object(); 
	console.log(obj instanceof Map); //false
</script> 
*/

/*const map = new Map([ 
    [5, 4], 
    [7, 9] 
]);

console.log(map); //Map(2) { 5 => 4, 7 => 9 }
*/
