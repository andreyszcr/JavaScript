var num =10;
var str="hola";
var bol=true;
var und=undefined;
var nul=null;
//puede tener tipos primitivos como onjetos
var obj=
{
    nombre:"Andrey",
    apellido:"Gonzalez",
    // objeto hijo
    obj_2 :{
        nombre:"pedro",
        apellido:"escamilla"
    }
};
console.log(obj);
var arr=[];
var sym=Symbol();


//valores por referencia
var obj2={};
var arr2=[];
var obj3=obj2;
var arr3=arr2;
console.log(obj2===obj3);