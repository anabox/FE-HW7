// Задача Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.


// function showEven(){
// let num = Number(prompt("Введите число"));

// if(num%2 == 0) {alert("ДА");}
// else {alert("НЕТ");}
// }
// showEven();

// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

// function showMax(a,b){
// if (a>b) {console.log(a);}
// else {console.log(b);}    
// }
// showMax(10,23);

// Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае

// function showEven(a) {
// if (a%2 == 0) {return true;}
// else {return false;}  
// }
// console.log(showEven(55));

// Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

// function showSequence(a) {
// let array = [];    
// for(let i=0; i<=a; i++) {
//     array.push(i);}
// return array}

// console.log(showSequence(7));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

// function getSequence(a,b) {
// let array = [];
// if(a>b) {
//     for(i=b;i<=a;i++){array.push(i);}
//     return array;
// }else {for (i=a;i<=b;i++){array.push(i)}
// return array;}
// }

// console.log(getSequence(7,2));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 

//  function getReversedSequence(a,b) {
//     let array = [];
//     if(a>b) {
//      for(i=b;i<=a;i++){array.unshift(i);}
//      return array;}
//   else for(i=a;i<=b;i++) {array.unshift(i)}
//   return array;}

//  console.log(getReversedSequence(7,10));

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

// let list = [4, 26, 87, -10, -6, 13];
// let sum = 0;
// for(i=0;i<list.length;i++){
// sum = sum + list[i];
// }
// console.log(sum);

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

// let list = [4, 26, 87, -10, -6, 13];
// let sum = 0;
// for (i=0;i<list.length;i++){
//     if(list[i]>0){
//         sum = sum + list[i];
//     }
// }
// console.log(sum);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// let list = [10, 7, 23, 34, 12, 2, 7, 15];
// let sum1 = 0;
// let sum2 = 0;

// for(i=0;i<list.length;i++){
//  if(list[i]%2==0){sum1 = sum1 + list[i];}
//  else {sum2 = sum2 + list[i];}   
// }
// if(sum1>=sum2){console.log(sum1-sum2)}
// else{console.log(sum2-sum1)};

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// P.S. Я посчитала avg - average (среднее арифметическое);

// let array = [13, 45, 10, 49, 24, 14, 38, 9];

//  function getStats(array){
//      let min = array[0];
//       for(let i=1;i<array.length;i++){
//           if(min>array[i])
//       {min = array[i]}   
//      }
// let max = array[0];
//       for(let i=1;i<array.length;i++){
//           if(max<array[i])
//       {max = array[i]}   
//      }
// let avg = 0;
// let sum = 0;
// for(let i=0;i<array.length;i++){
// sum = sum + array[i];
// avg = Math.round(sum/(array.length-1));
// }
// let stats = {
//     min: min,
//     max: max,
//     avg: avg
// }
// return stats;
//  }
// console.log(getStats(array));

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

// let sum = 0;
// for(i=0;i<=50;i++){
//     if(i%5==0){sum = sum + i}
// }
// console.log(sum);

//В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль

// let list = [10, 13,'Kupper', -7, 20, false, 9, true,'Manu'];
// let sum = 0;
// for(i=0;i<list.length;i++){
//     if(typeof(list[i])== 'boolean') break;
//     if(typeof(list[i])!= 'string') sum = sum + list[i];
// }
// console.log (sum);

// let arr = [
//     {
//     id: 1,
//     title: "bicycle",
//     price: 45000,
//     discount: 10
//     },
//     {
//     id: 2,
//     title: "roller-skates",
//     price: 15000,
//     discount: 5
//     },
//     {
//     id: 3,
//     title: "Kick scooter",
//     price: 10000,
//     discount: 30
//     },
//     {
//     id: 4,
//     title: "skis",
//     price: 25000,
//     discount: 20
//     },
//     {
//     id: 5,
//     title: "skate",
//     price: 10000,
//     discount: 0
// }
// ]

// Написать цикл, который выводит только названия товаров.

// for(key in arr){
//     console.log(arr[key].title)
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”

// for(key in arr){
//     console.log(arr[key].title + " " + arr[key].price )
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

// for(key in arr){
//     console.log(arr[key].title + " " + arr[key].price*(100-arr[key].discount)/100 )
// }

// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).

// function showMostExpensive(arr){
//     let maximum = arr[0].price;
//     for(key in arr){
//     if (arr[key].price>maximum){ maximum = arr[key].price}
//             return arr[key].title + "  " + maximum
//          }
// }
// console.log(showMostExpensive(arr));

// Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:

// let menu = {
//     width: 200, 
//     height: 300,
//     title: "my menu"
// };


// // Результат:

// // let menu = {
// //     width: 400, 
// //     height: 600,
// //     title: "my menu"
// // };

// for (key in menu){
//     if(typeof(menu[key] == Number)){menu[key]=menu[key]*2}
// }
// console.log(menu);

//Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function getMaximum (a,b) {
//     if(a>b)return 1;
//     else if(a<b) return -1;
//     else return 'Числа равны';
// }
// console.log(getMaximum (10,9));

// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function getEvenCalc () {
//     let a = Number(prompt ("Введите первое число"));
//     let b = Number(prompt ("Введите второе число"));
//     if(a%2==0 && b%2==0)return a*b;
//     else if(a%2!=0 && b%2!=0) return a+b;
//     else if (a%2==0 && b%2!=0)return b;
//     else if (a%2!=0 && b%2==0)return a;
// }
// console.log(getEvenCalc());

















