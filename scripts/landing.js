//Code animates the options at the bottom of the index.html page
/*var animatePoints = function() {
    var points = document.getElementsByClassName("point");
    var revealFirstPoint = function() {
        points[0].style.opacity = 1;
        points[0].style.transform = "scaleX(1) translateY(0)";
        points[0].style.msTransform = "scaleX(1) translateY(0)";
        points[0].style.WebKitTransform = "scaleX(1) translateY(0)";
    };

    var revealSecondPoint = function() {
        points[1].style.opacity = 1;
        points[1].style.transform = "scaleX(1) translateY(0)";
        points[1].style.msTransform = "scaleX(1) translateY(0)";
        points[1].style.WebKitTransform = "scaleX(1) translateY(0)";
    };

    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateY(0)";
        points[2].style.msTransform = "scaleX(1) translateY(0)";
        points[2].style.WebKitTransform = "scaleX(1) translateY(0)";
    };
    revealFirstPoint();
    revealSecondPoint();
    revealThirdPoint();
};
                
animatePoints();
*/
//Refactored code below:
var animatePoints = function() {
    var points = document.getElementsByClassName("point");
    var revealPoint = function(index) {
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.msTransform = "scaleX(1) translateY(0)";
        points[index].style.WebKitTransform = "scaleX(1) translateY(0)";
    };
    for (var i = 0; i < points.length; i++) {
        revealPoint(i);
    }
};


