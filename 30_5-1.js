
// Variable : let  and const 


let money = 20 ;

money = 12 ;


//console.log(money)\


const personDetails = {


    name : 'Kudus',

    age : 24 ,

    address : 'Tillaghor'
};

const statement = ` This is name ${personDetails.name} Age: ${personDetails.age} Address is : ${personDetails.address}`

//console.log(statement) 

// const balance = 1100 ;

// const phone = 900 ; 

// if( phone < balance){


//     console.log(" you have enough balance .. can u do make purches ");

// } else {

//     console.log(" can you do buy ");

// }


// if else statement 


// let  phone = 67 ;

// if( phone > 88){

//     console.log(" A");
// }else if( phone >= 70){

//     console.log("B");
// }
// else if( phone >=67){

//     console.log( " condition is not good ")
// }

//  if else Statement 

const age = 19;

let citizen ; 

if( age >= 18){

    citizen = " can do vote ";
}else {   

    citizen = "cannot do vote "
}

// console.log(citizen)


// Map of Data .. 






// Array Object 
const products = [{ name: 'Laptop', price: 99},

{ name: 'Apple', price:250},

{name:'sumsung', price:100}

];

// Map 
const product = products.map(pd => {


    return pd.name ;
})

// console.log(product)

// ForEach method 



products.forEach(pd => {

    // console.log(pd.price)
})

products.filter(pd => pd.price < 100)

// console.log(products)


// find out the concept 

const findProduct =  products.find(pd=>pd.name ==='Laptop');

console.log(findProduct);


