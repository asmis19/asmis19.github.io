var end = new Date(getNextBdayDate());
var animEndTime = new Date(end.getTime() + 60 * 60 * 24 * 1000);
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function getNextBdayDate(){
    var date = '09/08/';
    var current = new Date();
    if(current.getMonth() < 8 || (current.getMonth() == 8 && current.getDate() <= 8)){
        date += current.getFullYear();
    }else{
        date += (current.getFullYear()+1);
    }
    return date + ' 12:00 AM';
}

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'NEXT YEAR MAYBE?';
        return;
    }
    // var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    // document.getElementById('countdown').innerHTML = days + 'days ';
    document.getElementById('countdown').innerHTML = hours + ' hr' + (hours>1?'s':'') + ' ';
    document.getElementById('countdown').innerHTML += minutes + ' min' + (minutes>1?'s':'') + ' ';
    document.getElementById('countdown').innerHTML += seconds + ' sec' + (seconds>1?'s':'') + ' ';
}

timer = setInterval(showRemaining, 1000);

function hide000WebhostFooter(){
    $('div').each( function(index){
        if ($(this).css("z-index") == 9999999){
            //$(this).css("visibility", "hidden");
            $(this).remove();
        }
    });
}

//hide000WebhostFooter()
