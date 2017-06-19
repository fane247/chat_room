
console.log("linked");
var messageBox = document.getElementById('messages');


function sendMessage() {
	

	var messageContent = createMessageContent();

	var meesageContainer = createMessageContainer()

	

	messageContainer.appendChild(messageContent);


	messageBox.appendChild(messageContainer);

	document.getElementById("text-box").value = "";


}

function createMessageContent() {

	var text = document.getElementById("text-box").value;
	var newContent = document.createTextNode(text);
	var messageContent = document.createElement("p");
	messageContent.appendChild(newContent);

	return messageContent;
}

function createMessageContainer(){

	var messageContainer = document.createElement("div");
	messageContainer.className += "message";
	
}