let count = 1;

function changeImage(direction) {
  if (direction === "next") {
    count++;
  } else {
    count--;
  }

  if (count > 7) {
    count = 1;
  } else if (count < 1) {
    count = 7;
  }

  document.getElementById("sliderImg1").src = "images/image" + count + ".jpg";
  var nextCount = count + 1 > 7 ? 1 : count + 1;
  document.getElementById("sliderImg2").src = "images/image" + nextCount + ".jpg";
  var nextCount2 = nextCount + 1 > 7 ? 1 : nextCount + 1;
  document.getElementById("sliderImg3").src =  "images/image" + nextCount2 + ".jpg";
}
