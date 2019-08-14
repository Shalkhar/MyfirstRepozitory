'use strict';

let question= prompt('Введите код не менее 6 символов','');
let lengthPassword=question.length;
if (lengthPassword>=6) {
   alert("Пароль принят");
}
   else {alert("Введите пароль не менее 6 символов")

};

/*
let money = +prompt ("Ваш бюджет в месяц",""); //+ преобзарует строку в цифры 
let time = prompt ("Введите дату в формате YYYY-MM-DD",""); //prompt полее ввода для пользователя 

let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: false
};




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
   
   };

   appData.moneyPerDay = appData.budget /30;
   
   alert ("ежедневный бюджет:"  + appData.moneyPerDay);
   
   if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
   } else if (appData.moneyPerDay > 2000) {
      console.log('высокий уровень достатка');
   } else {
      console.log('Произошла ошибка');
   }
   */


 
