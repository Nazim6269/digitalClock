/**
 * Author : Nazim Uddin
 * Date : 14th January 2023
 * Description : Digital Clocks Project
 */



window.onload = () => {
    main();
}

function main() {
    setInterval(() => {
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
    //DOM references
        let h = document.getElementById('hours');
        let m = document.getElementById('minutes');
        let s = document.getElementById('seconds');
        let ampm= document.getElementById('apm');
        let am = (hour >= 12) ? 'PM' : 'AM';//ternary operator
    
        //Convert 24hr clock to 12hr clock
        if (hour > 12){
            hour = hour -12;
        }
    
    
        //Add Zero before single Digits
        hour = (hour < 10) ? `0${hour}` : hour;
        minute = (minute < 10) ? `0${minute}` : minute;
        second = (second < 10) ? `0${second}` : second;
    
        h.innerHTML = hour;
        m.innerHTML = minute;
        s.innerHTML = second;
        ampm.innerHTML = am;})

}
