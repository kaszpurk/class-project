var response = prompt('Do you like to photography, travel or both?');
var message;

if (response === 'photography') {
    message = 'I love photography!';
} else if (response === 'travel') {
    message = 'I love exploring new places!';
} else if (response === 'both') {
    message = 'HURRRAH I like both also!';
} else { 
    message = 'I love capturing moments & experiences through photos!';
}

document.write('<h3>' + message + '</h3>');