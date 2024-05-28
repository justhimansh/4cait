const btnNo = document.getElementById("btnNo");
let opacityLevel = 0;

function moveButtonRandomly() {
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = btnNo.offsetWidth;
    const buttonHeight = btnNo.offsetHeight;
    const maxLeft = containerRect.width - buttonWidth;
    const maxTop = containerRect.height - buttonHeight;

    let newLeft, newTop;
    do {
        newLeft = Math.random() * maxLeft;
        newTop = Math.random() * maxTop;
    } while (
        newLeft > btnNo.offsetLeft - buttonWidth && newLeft < btnNo.offsetLeft + buttonWidth &&
        newTop > btnNo.offsetTop - buttonHeight && newTop < btnNo.offsetTop + buttonHeight
    );

    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
    btnNo.style.position = 'absolute';
}

function increaseOpacity() {
  console.log("hello");
    const bgImage = document.querySelector('.bg-image');
    if (opacityLevel < 1) {
        opacityLevel += 0.1;  // Increase opacity by 0.1
        bgImage.style.opacity = opacityLevel;
    }
}

function when(){
  console.log("then is when");
  window.location.href = "when.html"
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
    }, function(error) {
      alert("Sorry, there was an error sending your input via email.");
      console.log("Error:", error);
    });
  } else {
    alert("You didn't enter anything.");
  }
}

btnNo.addEventListener("mouseover", moveButtonRandomly);
btnNo.addEventListener("click", function() {
    moveButtonRandomly();
    increaseOpacity();
});
