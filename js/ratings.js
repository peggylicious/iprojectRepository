// Define rating variable

// let rateCalc = document.getElementsByClassName(".content-wrapper .ratings-wrapper");
// let rateBox = document.querySelectorAll(".content-wrapper .rate-box");
// let allRatings = document.getElementById("all-ratings");
// let ratingsList = [];


$(document).ready(function(){
    $(".customer-review-form .all-ratings").on("click", ".rate-box", function(event) {
        var target = $(event.target);
        if (target.is(".rate-box")){
                target.css({"background-color": "red"});
                target.prevAll().css({"background-color": "red"});
                target.nextAll().css({"background-color": "yellow"});
                target.index(".rate-box");
                // This is the return value
                alert(target.index(".customer-review-form .rate-box"));
        }else{
            target.css({"background-color": "red"});
            target.prevAll().css({"background-color": "red"});
            target.nextAll().css({"background-color": "yellow"});
        }
    });
})





// document.addEventListener('click', function () {

//     for (let i = 0; i < rateBox.length; i++){
//         let targeted = event.target;
//         if(event.target.matches(".content-wrapper .rate-box")){
//             // Give clicked element an id
//             targeted.id = "myRatings";
//             // Push targeted element into array
//             if(event.target === rateBox[i]){
//                 console.log(i);
//             ratingsList.push(targeted);

//             }
//         }else{
//             console.log("sorry");
//         }
//     }
// })


// && (event.target === rateBox[i])

// document.addEventListener('click', function () {
//     // let targeted = event.target;

//     for (let i = 0; i < rateBox.length; i++){
//         if(event.target.matches(".content-wrapper .rate-box")){
//             event.target.id = "selected";
//             console.log(event.target);
//         }else{
//             console.log("sorry");
//         }
//     }
// })