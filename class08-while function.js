function getItemType(){
    var response = prompt('Would you like cookies or cake?');
    var item;
    while (response !== 'cookies' && response !== 'cake'){
        response = prompt('PAY ATTENTION YOU! Would you like cookies or cake??');
    };
    return response;
}

function howManyCookies (){
    var response = prompt('How many would you like?')
    console.log(response);
    return response;
}


function katsCooking(){
    var whatItem = getItemType();
    var numberOfItems = howManyCookies();
    for (var i = 0; i < numberOfItems; i++){
        result = 'We would like to help you order ' + numberOfItems + ' ' + whatItem + '.';
        console.log(result);
    }
}

