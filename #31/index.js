"use strict";
let arer = ['admin', "ali", "sana", "jia", "saba", "jia"];
if (arer.length === 0) {
    console.log('We need to find some users!');
}
else {
    arer.splice(0);
    console.log('All usernames have been removed.');
}
