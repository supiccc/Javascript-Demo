var select = document.querySelector('select');
var h1 = document.querySelector('h1');
var list = document.querySelector('ul');
select.onchange = function() {
    var choice = select.value;
    var day = 31;
    if (choice === 'February') {
        day = 28;
    } else if (choice == 'April' || choice == 'April' || choice == 'June' || choice == 'September' || choice == 'November') {
        day = 30;
    }

    creatCalendar(day, choice);
}

function creatCalendar(day, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (var i = 1; i <= day; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

creatCalendar(31, 'January');