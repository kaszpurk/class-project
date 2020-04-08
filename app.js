function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome';
    }
    return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
    var userName = prompt( 'What is your name?');
    
    return document.write('<h3>' + 'Hello, ' + userName + '</h3>');

}

function getItemType(){
    var response = prompt('Would you like to buy a house or a hotel?');
    var item;
    while (response !== 'house' && response !== 'hotel');
        response = prompt('PLEASE ANSWER EXACT! Would you like to purchase a house or hotel?'
)

}

function showOrder(){
    var result = '';
//get the item type
var itemType = getItemType();
// find out how many
var orderTotal = HowMany();
//send that order to the web page
for (var i = 0; i < orderTotal; i++){
  result = result + '<p>' + itemType + '</p>';

}
console.log(result);

return document.write(result);
}