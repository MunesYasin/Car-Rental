'use strict'





if(localStorage.getItem('data')===null){
    localStorage.setItem('data',JSON.stringify([]))
}


let array = JSON.parse(localStorage.getItem('data'))



function TableOfData(carName,customerName,price  ){
    this.carName =carName
    this.customerName = customerName
    this.price = price

    

array.push(this)

}


let table = document.getElementById('table')
let createTable = document.createElement('table')

table.appendChild(createTable)

let headerRow = document.createElement('tr')
createTable.appendChild(headerRow)

let header1 = document.createElement('td')
headerRow.appendChild(header1)
header1.textContent='Order Image'

let header2 = document.createElement('td')
headerRow.appendChild(header2)
header2.textContent='Order Details'



function random (min ,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let form = document.getElementById('form')
form.addEventListener('submit',getValue)
function getValue(event){

    event.preventDefault();

  let newCarName = event.target.cars.value
  let newName = event.target.cname.value
  let newPrice = random(1000,10000)

 new TableOfData(newCarName,newName,newPrice)
console.log(array)

 localStorage.setItem('data',JSON.stringify(array))

 let dataRow = document.createElement('tr')
 createTable.appendChild(dataRow)

let data1 = document.createElement('td')
dataRow.appendChild(data1)
let orderImage = document.createElement('img')
orderImage.width='100'
orderImage.src='./img/'+newCarName+'.jpg'
data1.appendChild(orderImage)


let data2 = document.createElement('td')
dataRow.appendChild(data2)
data2.innerHTML = 'Customer Names is : '+newName  +'<br /> <br />  The Car is : '+newCarName +' <br /> <br />The price is : '+newPrice

let data3 = document.createElement('td')
dataRow.appendChild(data3)
let cancleImage = document.createElement('img')
cancleImage.width='100'
       cancleImage.height='50'
cancleImage.src='./img/cancle.png'
data3.appendChild(cancleImage)
cancleImage.id='remove'
}

saveData()
function saveData(){
    let arr = JSON.parse(localStorage.getItem('data'))
    for(let i=0 ;i<arr.length ; i++){


        let dataRow = document.createElement('tr')
        createTable.appendChild(dataRow)
       
       let data1 = document.createElement('td')
       dataRow.appendChild(data1)
       let orderImage = document.createElement('img')
       orderImage.width='100'
       orderImage.src='./img/'+arr[i].carName+'.jpg'
       data1.appendChild(orderImage)
       
       
       let data2 = document.createElement('td')
       dataRow.appendChild(data2)
       data2.innerHTML = 'Customer Names is : '+arr[i].customerName  +'<br /> <br />  The Car is : '+arr[i].carName +' <br /> <br />The price is : '+random(1000,10000)

       let data3 = document.createElement('td')
       dataRow.appendChild(data3)
       let cancleImage = document.createElement('img')
       cancleImage.width='100'
       cancleImage.height='50'
       cancleImage.src='./img/cancle.png'
       data3.appendChild(cancleImage)
       cancleImage.id='remove'




    }
}

createTable.addEventListener('click',remove)
function remove(ev){
    if(ev.target.id === 'remove'){


let index = ev.target.parentElement.parentElement.rowIndex

console.log(index)
array.splice(index-1,1)
ev.target.parentElement.remove();
localStorage.setItem('data',JSON.stringify(array))
console.log(array)
location.reload()
    }
}





