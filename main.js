
var messageBox = document.getElementById('messages');

var sendBox = document.getElementById('send-button');
sendBox.addEventListener("click", sendMessage, false);

var nicknameButton = document.getElementById('nickname-button');
nicknameButton.addEventListener('click',changeNickname, false);
	
var userIdList = [];
var userId = 0;

createUserId();

function changeNickname() {

	var nickName = document.getElementById('nickname-text').value;

	if (userIdList.includes(nickName)) {

		document.getElementById('nickname-text').value = 'nick name in use';

	} else {
		
		alertNameChange(nickName);
		userId = nickName;
		document.getElementById('nickname-text').value = "";
	}

	
}

function alertNameChange (nickName){

	var nameChangeText = document.createTextNode('user: ' + userId + ' has changed thier name to ' + nickName);
	var p = document.createElement('p')
	p.appendChild(nameChangeText);
	p.className += 'nickNameChange';
	messageBox.appendChild(p);

}

function sendMessage() {

	hasText = (document.getElementById("text-box").value) !== "";

	if (hasText) {

		var messageContent = createMessageContent();
		var meesageContainer = createMessageContainer();
		
		meesageContainer.appendChild(messageContent);
		messageBox.appendChild(meesageContainer);

		meesageContainer.animate({opacity: [ 0, 1 ]},800);

		document.getElementById("text-box").value = "";
	}

}

function createMessageContent() {

	var name =  document.createTextNode('user ' + userId + ':');
	var lineBreak = document.createElement('br');
	var lineBreak2 = document.createElement('br');
	var text = document.getElementById("text-box").value;

	var newContent = document.createTextNode(text);
	var messageContent = document.createElement("p");
	messageContent.appendChild(name);
	messageContent.appendChild(lineBreak);
	messageContent.appendChild(lineBreak2);
	messageContent.appendChild(newContent);

	return messageContent;
}

function createMessageContainer(){

	var messageContainer = document.createElement("div");
	messageContainer.className += "message";

	return messageContainer;

}

function createUserId(){

	id = Math.floor(Math.random() *100000000);

	if (!userIdList.includes(id)) {
		userIdList.push(id);
		userId = id;
	}

}