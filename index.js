var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hier is de super coole uren converter!'
        
    }
});
function HoursToMinutes() {
    let days = document.getElementById("Uren").value;
    document.getElementById("Minuten").innerHTML = Uren / 60;
    console.log(days, hours);
};
function hourToDay() {
    let days = document.getElementById("numberDays").value;
    document.getElementById("hours").innerHTML = days / 24;
    console.log(days, hours);
  };