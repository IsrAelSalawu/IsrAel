// // bringing elements from html

// // Task 1
// const back = document.getElementById('font')
// const drag = document.getElementById('bold')
// const camp = document.getElementById('cave')
// const dirt = document.getElementById('save')
// const index = document.getElementById('in1')
// const pain = document.getElementById('in2')
// const messi = document.getElementById('in3')
// const mom = document.getElementById('in4')
// const botton = document.getElementById('node')
// const busy = document.getElementById('lock')

// function see_it(){
//     from = index.value
//     great = pain.value
//     lord = messi.value
//     game = mom.value

//     back.textContent = from
//     drag.textContent = great
//     camp.textContent = lord
//     dirt.textContent = game


// }






// // Task 2
// const bag = document.getElementById('born')
// const task = document.getElementById('input1')
// const enter = document.getElementById('input2')
// const shift = document.getElementById('input3')
// const control = document.getElementById('input4')
// const tab = document.getElementById('input5')
// const home = document.getElementById('input6')
// const end = document.getElementById('best')

// const pause = document.getElementById('b1')
// const blue = document.getElementById('b2')
// const yellow = document.getElementById('b3')
// const red = document.getElementById('b4')
// const black = document.getElementById('b5')
// const white = document.getElementById('b6')

// function me(){
//     right = task.value
//     left = enter.value
//     front = shift.value
//     backward = control.value
//     wing = tab.value
//     forward = home.value

//     pause.textContent = right
//     blue.textContent = left
//     yellow.textContent = front
//     red.textContent = backward
//     black.textContent = wing
//     white.textContent = forward
// }










// // Task 3
// // const caps = document.getElementsById('app')

// const first = document.getElementById('B')
// const second = document.getElementById('BB')
// const third = document.getElementById('BBB')
// const fourth = document.getElementById('BBBB')
// const fifth = document.getElementById('BBBBB')
// const sixth = document.getElementById('BBBBBB')
// const seventh = document.getElementById('BBBBBBB')
// const eigth = document.getElementById('BBBBBBBB')
// const ninth = document.getElementById('BBBBBBBBB')
// const tenth = document.getElementById('BBBBBBBBBB')

// const berry = document.getElementById('idea')



// function end_all(){
//     jerry = berry.value

//     first.textContent = jerry
// }


// const clay = document.getElementById('nike')
// const tie = document.getElementById('gucci')
// const mine = document.getElementById('shift')
// const cry = document.getElementById('pause')

// const why = document.getElementById('one')
// const pay = document.getElementById('two')
// const pray = document.getElementById('three')
// const ronaldo = document.getElementById('four')

// function change_me(){
//     last = clay.value
//     pool = tie.value
//     psp = mine.value
//     files = cry.value

//     why.textContent = last
//     pay.textContent = pool
//     pray.textContent = psp
//     ronaldo.textContent = files

//     clay.value = ''
//     tie.value = ''
//     mine.value = ''
//     cry.value = ''
// }

// object {}

// const collection = {name: 'olu', likes:['football', 'movies']}
// console.log(collection.likes[1])

// const family = {first_child: 'olu',  second_child: 'fisayo',
//                  third_child: 'princess',
//                   greeting: function greet(){console.log('good afternoon')}
// }
// console.log(family.greeting())


// const fight = document.getElementById('send')
// const btn = document.getElementById('write')

// const customer = {name: 'Olutayo', account_number: {savings: 112233445566, current:778890011, opay:8123456789},
//                     account_type:['savings', 'current',], account_balnce: '$300,000', mobile_account_type:['opay', 'palmpay', 'kuda'],
//                     detail:function(){
//                         return `${this.name} <br>${this.account_number.savings} <br>${this.account_type[0]} <br>${this.account_balnce}`},
//                     all_account: function(){
//                         return `${this.name} <br>${this.account_number.savings}  \t${this.account_number.current} <br>${this.account_type}`
//                     },
//                     mobile: function(){
//                         return `${this.name} <br>${this.account_number.opay} <br>${this.mobile_account_type[0]} <br>${this.account_balnce}`
//                     }

// }
// function right(){
//     fight.innerHTML = customer.detail()
// }
// function front(){
//     fight.innerHTML = `${customer.all_account()}`
// }
// function left(){
//     let message = 'Customer details will appear here'
//     fight.innerHTML = message
// }
// function best(){
//     fight.innerHTML = customer.mobile()
// }

// let text = "please visit microsoft!"
// let newText = text.replace("microsoft", "w3schools");
// console.log(newText)

// let num1 = [1, 15, 10, 9, 20]
// console.log(num1.sort())
// console.log(num1.sort(function(a,b) {return(a - b)}))


// let num2 = [1, 15, 10, 9, 20]
// let item = ''
// num1.forEach(counter)

// function for each iterate through array
// function counter(value, index){
//     if(value % 2 == 0){
//         console.log(`${value} is in index ${index}`)
//     }
// }

// let num3 = [1, 15, 10, 9, 20]
// new_arr = num3.map((value, index) => {return(value * 2)})
// console.log(new_arr)






// const person = {firstName: 'israel', middleName: 'olutayo', lastName: 'salawu', age: 16, likes: 'football', shoe_size: 45}

// console.log(person.firstName)
// console.log(person.middleName)
// console.log(person.lastName)
// console.log(person['age'])
// console.log(person['likes'])
// console.log(person['shoe_size'])


// const roll = document.getElementById('age')
// const object = {
//     's/n': '007', 
//     name: 'Olutayo', 
//     email: 'israelsalawu58@gmail.com', 
//     phone: '08160824411', 
//     address: 'refinary junction, opp. army estate',
//     show_table: function(){
//         return `${this["s/n"]}, <br>${this.name}, <br>${this.email}, <br>${this.phone}, <br>${this.address}`
//     }
// }
// // console.log(object.show_table())
// function button(){
//     roll.innerHTML = object.show_table()
// }

// const styling = {styles: `border: 2px solid black; width: 150px`}

// const populate = document.querySelector('#incoming')
// let message = `<strong> our list below: </strong>`
// let list = `<ul> <li> item 1 </li> <li> item 2 </li> </ul>`
// // let button = ``
// // populate.innerHTML = `${message} ${list}`
// populate.style = styling.styles;
// // console.log(styling.styles)


// let header1 = 'S/N'
// let header2 = 'Name'
// let header3 = 'Age'

// let data1 = '1.'
// let data2 = 'Israel'
// let data3 = '16'

// let datai = '2.'
// let dataii = 'Jeph'
// let dataiii = '49'

// let dataa = '3.'
// let datab = 'Nathan'
// let datac = '10'

// let data4 = '4.'
// let data5 = 'Ethan'
// let data6 = '10'



// let tabless = `<table> <tr> <th>${header1}</th>  <th>${header2}</th> <th>${header3}</th> </tr> <tr> <td>${data1}</td> <td>${data2}</td> <td>${data3}</td> </tr> 
//                 <tr> <td>${datai}</td> <td>${dataii}</td> <td>${dataiii}</td> </tr>
//                 <tr> <td>${dataa}</td> <td>${datab}</td> <td>${datac}</td> </tr>
//                 <tr> <td>${data4}</td> <td>${data5}</td> <td>${data6}</td> </tr></table>`
// // populate.innerHTML = `${message}`
// populate.innerHTML = `${tabless}`


//Calculator
// const pen = document.getElementById("enter")
// const den = document.getElementById("back")
// const wife = document.getElementById("front")
// const payee = document.getElementById("down")
// const pause = document.getElementById("crown")
// const shift = document.getElementById("tab")
// const control = document.getElementById("cab")

// function praying(){
//     pen.innerHTML = Number(back.value * wife.value)
//     back.value = ""
//     wife.value = ""
// }
// function click_me(){
//     pen.innerHTML = Number(back.value / wife.value)
//     back.value = ""
//     wife.value = ""
// }
// function bump(){
//     pen.innerHTML = Number(back.value - wife.value)
//     back.value = ""
//     wife.value = ""
// }
// function vase(){
//     pen.innerHTML = `The Addition of ${Number(back.value)} and ${Number(wife.value)} is = ${Number(back.value) + Number(wife.value)}`
//     back.value = ""
//     wife.value = ""
// }
// function cart(){
//     pen.innerHTML = Number(back.value % wife.value)
//     back.value = ""
//     wife.value = ""
// }
// function start_me(){
//     pen.innerHTML = `The Area of a rectangle of length ${(back.value)}cm and breath ${(wife.value)}cm is = ${(back.value) * (wife.value)}`
//     back.value = ""
//     wife.value = ""
// }
// function show_me(){
//     pen.innerHTML = Number(back.value ** wife.value)
    
// }
// function reset(){
//     back.value = ""
//     wife.value = ""
// }




// const peter = document.getElementById("back")
// const pan =  document.getElementById("front")

// function arithmetic(operations){
//     if (operations === "+"){
//     return Number(peter.value + pan.value)
// }
//     else if(operations === "*"){
//         return Number(peter.value * pan.value)
//     }
//     else if(operations === "/"){
//         return Number(peter.value / pan.value)
//     }
//     else if(operations === "-"){
//         return Number(peter.value - pan.value)
//     }
// }
// console.log(arithmetic("*"))

// function check(){
//     pen.innerHTML = arithmetic("*")
// }

const pen = document.getElementById("enter")
const wife = document.getElementById("front")
const den = document.getElementById("back")
const mark = document.getElementsByName('operations')

function arithmetic(operate){
    if(operate === '+'){
        return Number(back.value) + Number(wife.value)
    }
    else if(operate === '-'){
        return Number(back.value - wife.value)
    }
    else if(operate === '*'){
        return Number(back.value * wife.value)
    }
    else (operate === '/');{
        return Number(back.value / wife.value)
    }
}

function getting(){
    //looping through the array(radio buttons)
    for(i=0; i < mark.length; i++){
        if(mark[i].checked){
            //do somethingg

        pen.innerHTML = `Your answer = ${arithmetic(mark[i].value)}`
    }
    mark[i].checked = false
    }
    back.value = ''
    wife.value = ''
}

function reset(){
    back.value = ''
    wife.value = ''
    for(i=0; i < mark.length; i++){
        mark[i].checked = false
    }

}

// 2 input, collecting numbers, returning even numbers and odd number...















// double input, power, (4 other operations)




// sipmle interest(P*R*T/100)
const swim = {styles: `color: blue; font-size: 20px;`}
//using an object style your output
const day = document.getElementById("fog")
day.style = swim.styles
// console.log(swim.styles)

const principal = document.getElementById("snake")
const rate = document.getElementById("frog")
const time = document.getElementById("toad")
const hundred = 100

function operation(){
    day.innerHTML = ((principal.value * rate.value * time.value) / hundred)
}


















