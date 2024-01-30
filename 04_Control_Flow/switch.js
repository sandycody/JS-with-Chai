/* Alternate of if-else */

/* Syntax */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4;

switch(month) {
    case 1: 
        console.log(`January`)
        break;
    case 2: 
        console.log(`February`)
        break;
    case 3: 
        console.log(`March`)
        break;
    case 4: 
        console.log(`April`)
        break;
    case 5: 
        console.log(`May`)
        break;
    
    default:
        console.log("Case Match in any condition");
        break;
}