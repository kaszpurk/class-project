function getItemType(){
    var response = prompt('Would you like cookies or cake?');
    var item;
    while (response !== 'cookies' && response !== 'cake'){
        response = prompt('PAY ATTENTION YOU! Would you like cookies or cake??');
    };
}


function howManyCookies (){
    var response = prompt('How many would you like?')
    console.log(response);
    return response;
}

function katsCooking(){
    var whatItem = getItemType();
    if (whatItem === 'cookies') {
        img = '<img src="images/cookie image.jpeg" alt="Cookie">';
    } else {
        img = '<img src="images/cake image.jpeg" alt="Cookie">';
    }
    var numberOfItems = howManyCookies();
    for (var i = 0; i < numberOfItems; i++){
        result = 'We would like to help you order' + img + '<br/>';
        document.write(result);
    }
}

katsCooking();

//this is a test to ensure code is updating correctly
