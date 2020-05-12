
// rawg

$(document).ready(function(){


    $("#searchbtn").on("click", function(event){
        event.preventDefault();

        var title = $("#titleInput").val().trim();

        console.log(title);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rawg-video-games-database.p.rapidapi.com/games/"+title,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "56967c5012mshefae2d0c353bc84p1b80c2jsnad5515b32ae3"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);

            var gameDiv = $(".game-div")
            
            
            var titleH3 = $("<h3>").text(response.name);
            var platH5 = $("<h5>").text("Game Platforms:");
            var rating = $("<h5>").text("ESRB Rating: "+ response.esrb_rating.name);
            var details =$("<p>").text("Details: " + response.description_raw)
            var gameImg = $("<img>").attr('src', response.background_image);
            gameImg.addClass("work-feature-block-image");
            var platUl = $("<ul>");


            gameDiv.append(titleH3);
            gameDiv.append(platH5);
            $(".game-image").append(gameImg);
            gameDiv.append(platUl);

            for (let i = 0; i < response.parent_platforms.length; i ++) {
            var platLi =$("<li>").text(response.parent_platforms[i].platform.name);

            platUl.append(platLi);
            };

    
            gameDiv.append(rating);
            gameDiv.append(details);
            

        });

    

    })


});




// $(document).ready(function () {

//     $(".searchbtn").on("click", function (event) {
//             event.preventDefault();
//             console.log("clicked");
//             var title = $("#titleInput").val().trim();
//             console.log(title);
        
//             var settings = {
//                 "async": true,
//                 "crossDomain": true,
//                 "url": "https://rawg.io/api/games?search=" + title,
//                 "method": "GET",
//                 "headers": {
//                     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//                     "x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6"
//                 }
//             }
            
//             $.ajax(settings).done(function (response) {
//                 console.log(response);
//             });
//         });
//     });
// chicken coop platform
//             var settings = {
//         	"async": true,
//         	"crossDomain": true,
//         	"url": "https://chicken-coop.p.rapidapi.com/games/%7Btitle%7D?platform=pc",
//         	"method": "GET",
//         	"headers": {
//         		"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
//         		"x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6"
//         	}
//         }
        
//         $.ajax(settings).done(function (response) {
//         	console.log(response);
//         });
            
          
        
//         });


//});



// chicken coop game
// $(".button").on("click", function (event) {
//     event.preventDefault();
//     console.log("clicked");
//     var title = $("#titleInput").val().trim();
//     console.log(title);

//     var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://chicken-coop.p.rapidapi.com/games/%7Btitle%7D?platform=pc",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
// 		"x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
    
  

// });








// $("#searchbtn").on("click", function (event) {
//     event.preventDefault();
//     console.log("clicked");
//     var title = $("#titleInput").val().trim();
//     console.log(title);
//     var platform = $(".platformbtn")

//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://chicken-coop.p.rapidapi.com/games/"+ title + "?platform=pc",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
//             "x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6"
//         }
//     }
    
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
    
  

// });