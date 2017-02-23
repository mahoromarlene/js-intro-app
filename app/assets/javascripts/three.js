var clickBox1 = 0
var clickBox2 = 0
var clickBox3 = 0

function ClickThreeBoxes(clickBox){
  if (clickBox1 === 1 && clickBox2 === 1 && clickBox3 === 1){
    alert("You win");
  } else if (clickBox === clickBox1){
    console.log("Click on another one");
  } else if (clickBox === clickBox2){
    console.log("Click on another one");
  } else if (clickBox = clickBox3){
    console.log("Click on another one");
  }
}
