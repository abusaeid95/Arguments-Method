// const products = [
//     'Dell hardcore l64g price in bd',
//     'Dell 8gb ram laptop with HD camera',
//     'Samsung Laptop ultra smart with amould display',
//     'Huawei phone L645HGF 26Gb rom with 7GB RAM'
// ]

// const searching = 'dell';

// const output = [];

// for (const product of products){
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         output.push(product);
//     }
// }
// console.log(output);



function addinNumbersOfArray (numb1, numb2){
    let sum = 1;
    for(const num of arguments){
      sum = sum+num;

    }
    return sum;
}
const desireNumber = addinNumbersOfArray(12, 22, 32, 56, 96, 87, 55);
console.log(desireNumber);