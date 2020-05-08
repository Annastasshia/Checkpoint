
$(".button").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    var title = $("#titleInput").val().trim();
    console.log(title);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://chicken-coop.p.rapidapi.com/games?title=" + title,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
            "x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    
    

});

// Help! I'm being held hostage in India and being made hack your computer! my name is Punjabi, and Raj is abusing me!
//you deserved it probaby
// you like Raj. i no like you!
//
