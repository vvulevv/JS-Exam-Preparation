"use strict";
function tableBuilder(array){
    var start = array[0];
    var end = array[1];
    console.log ("<table>" + "\n"
    + "<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");

    for (var i = start; i <= end; i++){
        var fib;
        if (isFibonacci(i)){
            fib = 'yes';
        } else {
            fib = 'no';
        }
        console.log ("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + fib + "</td></tr>");
    }
function isFibonacci(number){
    var a = 0;
    var b = 1;
    var c = 0;
    while (c < number){
        c = a+b;
        a = b;
        b = c;
    }
    return c == number;
}
    console.log ("</table>");

}
tableBuilder(['55','56']);