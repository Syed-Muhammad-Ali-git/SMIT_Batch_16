var userObj = {
    id: 'abc@xyz.com',
    name: "John"
};
userObj.title = "Engr";
// console.log(userObj);

var convertToStrData = JSON.stringify(userObj);

// console.log(convertToStrData);
// console.log(typeof convertToStrData);

localStorage.setItem("User", convertToStrData);


function fetchUser() {
    if (localStorage.getItem("User") != null) {
        var getLocalSData = localStorage.getItem("User");
        var jsonObjData = JSON.parse(getLocalSData);
        console.log(jsonObjData.name);
    }

    else {
        console.log('Data not found!');
    }
};


function saveUid() {
    var id = new Date().getTime();
    localStorage.setItem("UserId", JSON.stringify(id));
}


function removeData() {
    // localStorage.removeItem("UserId");
    // localStorage.clear();
    window.location.href = "https://www.google.com/";
}