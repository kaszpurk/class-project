var response = prompt('Do you like to photography, travel or both?');
var item;

if (response === 'photography') {
    item = '<img src="">';
} else if (response === 'travel') {
    item = 'I love exploring new places!';
} else if (response === 'both') {
    item = 'HURRRAH I like both also!';
} else { 
    item = 'I love capturing moments & experiences through photos!';
}

document.write('<h3>' + item + '</h3>');