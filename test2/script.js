
//The sendCommand() function constructs the URL with the command as a query parameter.
// We use encodeURIComponent() to ensure that the command is properly encoded if it contains special characters.
function sendCommand(command) {
  var url = "http://192.168.1.169/led?command=" + encodeURIComponent(command);//access to the arduino server using its IP
  console.log("Command sent successfully");

  fetch(url)
  .then(function(response) {
    if (response.ok) {
      console.log("Command sent successfully");
    }
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
}


// Event listener for the "Turn On" button
document.getElementById("on").addEventListener("click", function() {
  sendCommand("ON");
});

// Event listener for the "Turn Off" button
document.getElementById("off").addEventListener("click", function() {
  sendCommand("OFF");
});