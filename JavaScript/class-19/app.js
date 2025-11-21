var h2El = document.getElementById("showData");

// var userObj = {
//     userName: "Ahmed",
//     company: "ABC Company",
//     age: 28,
//     skills: ['Html', 'Css'],
//     intro: function () {
//         // console.log('Hi my name is ahmed!');
//         return "Hi my name is ahmed!";
//     }
// };

// delete userObj.age;

// userObj.officeShift = "Morning";
// userObj.isPermanent = true;

// console.log(userObj);
// console.log(userObj.intro());
// console.log(typeof userObj);

// var isPropExist = userObj.hasOwnProperty('Company');
// console.log(isPropExist);

// var isPropExist = "compandy" in userObj;
// console.log(isPropExist);


// var myCustomF = function() {
//     console.log('Hello JS');
// };

// myCustomF();



var users = [
    {
        id: 1,
        name: "John",
        company: 'Abc Company'
    },
    {
        id: 2,
        name: "Smith",
        company: 'Xyz Company'
    },
    {
        id: 3,
        name: "Terry",
        company: 'Mno Company'
    },
    {
        id: 4,
        name: "Andrew",
        company: 'Dow Company'
    },
];

var newEmp = {
    id: 5,
    name: "Trish",
    company: 'AB Company'
};

users.push(newEmp);
// console.log(users);

for (var i = 0; i < users.length; i++) {
    console.log(users[i].name);

    h2El.innerHTML = users[i].name;

    // if (users[i].id == '3') {
    //     break;
    // }
};