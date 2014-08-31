"use strict";
function priceTrendsPrinter(prices) {
    var firstPrice = parseFloat(prices[0]).toFixed(2);

    console.log ("<table>" + "\n" + "<tr><th>Price</th><th>Trend</th></tr>" +
        "\n" + "<tr><td>" + firstPrice + "</td><td><img src=\"fixed.png\"/></td></tr>");

    for (var i = 1; i < prices.length; i++){
        prices[i] = parseFloat(prices[i]).toFixed(2);
        if (prices[i] == firstPrice){
            var fixed = 'fixed.png';
        } else if (prices[i] > firstPrice){
            fixed = 'up.png';
        } else {
            fixed = 'down.png';
        }
        console.log ("<tr><td>" + prices[i] +
            "</td><td><img src=\"" + fixed + "\"/></td></tr>");
        firstPrice = prices[i];
    }
    console.log("</table>");
}
priceTrendsPrinter(['36.333','36.5','37.019','35.4','35','35.001','36.225']);