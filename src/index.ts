let numero1:number=document.getElementById("numero1");
let numero2:number=document.getElementById("numero2");
let numero3:number=document.getElementById("numero3");


let btn= document.getElementById("btn");
btn?.addEventListener("click",()=>{
let uno:number=Number(numero1.value);
let dos:number=Number(numero2.value);
let tres:number=Number(numero3.value);
if(numero1>numero2&&numero3){
  console.log("Numero uno es mayor")
}
}
