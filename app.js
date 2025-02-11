const btnNo = document.getElementById("btnNo");
let opacityLevel = 0;

function moveButtonRandomly() {
  const btnNope = document.getElementById("btnNope");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonWidth = btnNope.offsetWidth;
  const buttonHeight = btnNope.offsetHeight;

  // Generate random positions within the viewport bounds
  const newLeft = Math.random() * (windowWidth - buttonWidth);
  const newTop = Math.random() * (windowHeight - buttonHeight);

  btnNope.style.left = `${newLeft}px`;
  btnNope.style.top = `${newTop}px`;
  btnNope.style.position = "absolute"; // Ensure button moves
}

document.addEventListener("DOMContentLoaded", function () {
  let countdown = 10;
  
  // Create countdown element
  const countdownElement = document.createElement("h1");
  countdownElement.textContent = countdown;
  document.querySelector(".countdown--timer").appendChild(countdownElement);
  
  // Create explosion effect
  const explosion = document.createElement("div");
  explosion.classList.add("explosion");
  document.querySelector(".countdown--timer").appendChild(explosion);
  
  // Start countdown
  const interval = setInterval(() => {
      countdown--;
      countdownElement.textContent = countdown;
      
      if (countdown <= 0) {
          clearInterval(interval);
          countdownElement.textContent = "BOOM!";
          explosion.classList.add("explode");
          
          // Redirect to a 404 error page
          setTimeout(() => {
              window.location.href = "/404";
          }, 1000);
      }
  }, 1000);
});



function when(){
  console.log("then is when");
  window.location.href = "yes.html"

}

function when2(){
  console.log("she clicked no LESGOOO");
  window.location.href = "no.html"
  
}

function yippie(){
  emailjs.send("service_ausuets", "template_r6e62lq", {
    userInput: "Yes, she agreed"
  }).then(function(response) {
    alert("Email sent successfully!");
    // Redirect to yippie.html after a 5-second delay
    setTimeout(function() {
      window.location.href = "yippie.html";
    }, 3000); // 5000 milliseconds = 5 seconds
  }, function(error) {
    alert("Failed to send email. Please try again later.");
    console.error("Error:", error);
  });
}

function goback(){
  window.location.href="page5.html"
  
}

function nextpage(){
  windows.location.href="page3.html"
}

function thinking(){
  console.log("this is being pressed")
  window.location.href="explode.html"
}

function wruf() {
  // Prompt the user for input
  var userInput = prompt("when r u free");

  // Check if the user entered something
  if (userInput !== null && userInput !== "") {
    // Use EmailJS to send the input via email
    emailjs.send("service_ausuets", "template_r6e62lq", {
      userInput: userInput
    }).then(function(response) {
      alert("Your input has been sent via email successfully!");
      setTimeout(function() {
        window.location.href = "yippie.html";
      }, 3000); // 5000 milliseconds = 5 seconds
    }, function(error) {
      alert("Sorry, there was an error sending your input via email.");
      console.log("Error:", error);
    });
  } else {
    alert("hey haha u didnt write anything lol hahaha");
  }
}

btnNo.addEventListener("mouseover", moveButtonRandomly);
btnNo.addEventListener("click", function() {
    moveButtonRandomly();
    increaseOpacity();
});
