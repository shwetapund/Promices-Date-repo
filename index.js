/*
async function main(){
    setTimeout(()=>{
        console.log('sentences A')
    }, 3000)

    console.log('Sentence B')
}
main();
**************************************************************************************************

async function calBill(){
    const bill = 100;
    return 100;
}

async function calTax(bill){
    const tax = bill + 18;
    return tax;
}

async function main(){
const bill = await calBill();
console.log('Bill',bill);

const tax = await calTax(bill);
console.log('Tax',tax)
}
main();
****************************************************************************

async function calBill(){
    return new Promise((resolve, reject) => {
       reject(new Error("Bill Now Found"))
    })
   
}
async function main(){
const bill =  await calBill();
console.log(bill);
}
main();
*********************************************************************************
async function calBill(bill){
    return new Promise((resolve, reject) => {
       if(bill%2==0){
        resolve(bill)
       }
       else{
        reject(new Error("Invalid Bill"))
       }
    })
}
async function main(){
    const bill =  await calBill(100);
    console.log(bill);
}
main();
*/

const date = new Date()
console.log(date.getUTCDate())

