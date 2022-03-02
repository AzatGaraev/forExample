

// Пример:

// getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года */}



function getWeekDay(date) {
    let days = ['Воскресенье,','Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,'];
  
    return days[date.getDay()];
  }
  
function getWeekNumber(date) {

    let c = date.getDate();

        if ((c => 1) && (c <=7)){
            return '1 неделя'
        }
        if ((c => 8) && (c <=14)){
            return '2 неделя'
        }
        if ((c => 15) && (c <=21)){
            return '3 неделя'
        }
        if ((c => 22) && (c <=28)){
            return '4 неделя'
        }
        if ((c => 29) && (c <=31)){
            return '5 неделя'
        }

}


function getMonthDay(date) {
    let month = ['Января,', 'Февраля,', 'Марта,', 'Апреля,', 'Мая,', 'Июня,', 'Июля,','Августа,', 'Сентября,', 'Октября,', 'Ноября,', 'Декабря,'];
  
    return month[date.getMonth()] ;
    
  }


  

function getFullYear(date) {
    
  
    return date.getFullYear() + ' года';
  }




  let date = new Date('1990-06-16');  //   Формат  ввода ('ГГГГ-ММ-ДД')

 
console.log( getWeekDay(date),getWeekNumber(date), getMonthDay(date), getFullYear(date) ); 

