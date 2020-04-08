function hello (){
    console.log('Hello Ryan')
}

function helloYou (name){
    console.log('Hello ' + name)
}

username = prompt('What is your name?')

function helloUsername(username){
    console.log('Hello ' + username);
}

helloUsername(username);

function sayHelloCookie(){
    return 'Hello Cookie';
}

function ryansFavoriteColor(){
    return 'Ryan\'s Favorite color is Turquoise';
}

function faveColor(color){
    console.log('Ryan\'s Favorite color is' + color);
}

faveColor('Turquoise');

function makeCake(cakeType, filling, frosting){
    var message = 'I like ' + cakeType + 'cake with ' + filling + 'filling and ' + frosting + 'frosting';
}

function favoriteTomClancyNovel(mainCharacter, location, threatToUS){
    console.log('My favorite Tom Clancy novel stars ' + mainCharacter + ' located in ' + location + ' is about ' + threatToUS + '.');
}
