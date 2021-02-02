'use strict';
var table=document.getElementById('table');

function Car(carModel,modelYear,manufacturer){
    this.carModel=carModel;
    this.modelYear=modelYear;
    this.manufacturer=manufacturer;
    this.price=getRandomPrice();
    Car.prototype.allCar.push(this);
}

Car.prototype.allCar=[]; 
Car.prototype.render=function(){
    var tableRow = document.createElement('tr')
    table.appendChild(tableRow);
    var carModel =document.createElement('td');
    carModel.textContent=this.carModel;
    tableRow.appendChild(carModel);
    var modelYear =document.createElement('td');
    modelYear.textContent=this.modelYear;
    tableRow.appendChild(modelYear);
    var manufacturer =document.createElement('td');
    manufacturer.textContent=this.manufacturer;
    tableRow.appendChild(manufacturer);
    var price =document.createElement('td');
    price.textContent=this.price;
    tableRow.appendChild(price);
}

if(localStorage.getItem('carData')){
var allCar=JSON.parse(localStorage.getItem('carData'));
for (var i=0;i<allCar.length;i++){
 new Car(allCar[i].carModel,allCar[i].modelYear,allCar[i].manufacturer);
}
creatTable();
}

var addCar =document.getElementById('addCar');
addCar.addEventListener('submit',newCar);
function newCar(event){
    event.preventDefault();
var carModelData=  event.target.carModel.value;
var modelYearData=  event.target.modelYear.value;

var manufacturerData=  event.target.manufacturer.value;
var newCar= new Car(carModelData,modelYearData,manufacturerData);
creatTable();
localStorage.setItem('carData',JSON.stringify(Car.prototype.allCar));


}

function tableHeader(){
    var tableHead = document.createElement('tr')
    table.appendChild(tableHead);
    var carModel =document.createElement('th');
    carModel.textContent='Car model';
    tableHead.appendChild(carModel);
    var modelYear =document.createElement('th');
    modelYear.textContent='Car model year';
    tableHead.appendChild(modelYear);
    var manufacturer =document.createElement('th');
    manufacturer.textContent='Car manufacturer';
    tableHead.appendChild(manufacturer);
    var price =document.createElement('th');
    price.textContent='Car price';
    tableHead.appendChild(price);
}
 
function creatTable(){
    table.innerHTML='';
    tableHeader();
    for(var i=0;i<Car.prototype.allCar.length;i++){
        var eachCar=Car.prototype.allCar[i];
        eachCar.render();

    }
}


function getRandomPrice(){
    return Math.floor(Math.random() * (100000 - 7000) ) + 7000;
}