
//test cases for string compare
/*
strcmp("helloworld", "hello");
strcmp("hello", "hello");
strcmp("hello1234", "hello1234");
strcmp("Hello1234", "Hello1234");
strcmp("HELLO1234", "HELLO1234");
*/

//function to check if two passwords match()


//function to check if password has atleast one number
function hasEightCharacters(string1){
    if(string1.length >= 8) return true;
    return false;
}

//function to check if string has at least one number
function containsNumber(string1){
    for(let i=0; i<string1.length; i+=1){
        if(!isNaN(parseInt(string1.charAt(i)))) return true;
    }
    return false;
}


//function to check if two strings are similar
function strcmp(string1, string2){
    if(string1 == string2) return true;
}


