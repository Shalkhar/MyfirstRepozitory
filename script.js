'use strict';

let money;
let time;


function start () {
 money = +prompt ("Ваш бюджет в месяц",""); //+ преобзарует строку в цифры 
 time = prompt ("Введите дату в формате YYYY-MM-DD",""); //prompt полее ввода для пользователя 

while (isNaN(money) || money == "" || money==null) {
   money = +prompt ("Ваш бюджет в месяц",""); //выводит это сообщение если пользователь не выполнил условия

   }
}
start();




let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: true
};



function chooseExpenses() {
   for (let i = 0; i < 2; i++) { 
   let a = prompt ("Введите обязательную статью расходов в этом месяце",""),
       b = prompt ("Во сколько это обйдется?","");

    if ((typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null  //typeof проверяет значение и превращает его в цифру
      && a != '' && b !='' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      } 

      else { 
      i= i - 1;  //возвращается обратно в началу цикла
         }
      }
   
   }
   chooseExpenses(); //вызов функции




   function detectDayBudget() {
   appData.moneyPerDay = (appData.budget /30).toFixed(); //расчет бюджета на один день с округлением
   alert ("ежедневный бюджет:"  + appData.moneyPerDay);
   }
   detectDayBudget();




   function  detectLevel() {
   if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
   } else if (appData.moneyPerDay > 2000) {
      console.log('высокий уровень достатка');
   } else {
      console.log('Произошла ошибка');
   }
}
detectLevel (); // Вызываем функцию уровень достатка






 
function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("какова сумма накоплении?"),
         percent = +prompt("Под какйо процент?");
      
      appData.monthIncome = (save /100/12*percent).toFixed();
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      
   }
}
checkSavings();











