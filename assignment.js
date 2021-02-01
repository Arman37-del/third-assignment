// https://github.com/Arman37-del/third-assignment




function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}

function budgetCalculator(purchase) {
    var budget = 0;
    if (purchase <= 10) {
        budget = purchase * 50;
    } else if (purchase <= 20) {
        var clock = 10 * 50;
        var remaining = purchase - 10;
        var phone = remaining * 100;
        budget = clock + phone;
    } else {
        var clock = 10 * 50;
        var phone = 10 * 100;
        var remaining = purchase - 20;
        var laptop = remaining * 500;
        budget = clock + phone + laptop;
    }
    return budget;
}

function hotelCost(firstMonth, secondMonth) {
    var total = firstMonth + secondMonth;
    return total;
}


function megaFriend(name) {
    var name = ['siam', 'sefat', 'shourov'];
    var max = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (element > max) {
            max = element;
            latter = name[4, 5, 6];
        }
    }
    return max;
}