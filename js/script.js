var lightMode = true;

function changeSheet() {
    // Make lightMode equal not lightMode
    lightMode = !lightMode;
    var lightSheet = document.getElementById("lightSheet");
    var darkSheet = document.getElementById("darkSheet");

    // If lightMode turns off, display dark stylesheet
    if (lightMode == false) {
        console.log("Turning dark mode on...");
        darkSheet.media = " ";
        lightSheet.media = "none";
    } else {
        console.log("Turning light mode on...");
        darkSheet.media = "none";
        lightSheet.media = "";
    }

}