var current_users = ["azhar", "samee", "bilal", "rehan", "arsalan"];
var new_users = ["meraj", "ammar", "zeeshan", "daniyal", "shahriyar"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " well need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is avalible"));
    }
});
