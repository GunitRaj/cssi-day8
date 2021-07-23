const messagesRef = firebase.database().ref()

const passcode = document.querySelector('#passcode').value;
const message = document.querySelector('#message').value;

messagesRef.push({
    message: message,
    passcode: passcode,
});