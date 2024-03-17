//Exercise no 32
var current_users = ["Admin", "Ayesha", "Maryam", "Eman", "Alia", "Muntaha"];
var new_users = ["Admin", "Maryam", "Areesha", "Kainat", "Taba"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken."));
    }
    else {
        console.log("Yes ".concat(new_user, ", is stiil available list."));
    }
}
