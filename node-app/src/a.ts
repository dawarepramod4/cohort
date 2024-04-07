const x: number =1;
console.log(x);

function sum (a:number, b:number):number {
    return a + b;
}


const a = sum(1,3);
console.log(a);

function isLegal(age:number){
    if(age < 18){
        return true;
    }else{
        return false;
    }
}

const b = isLegal(17);

