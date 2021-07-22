// const getMessages = () => {
//     const messagesRef = firebase.database().ref();
//     messagesRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     findMessage(data);
// });
// }

// const findMessage = (messages) => {
//     const passcodeAttempt = document.querySelector('#passcode').value;
//     for(let key in messages){
//         const message = messages[key];
//         if(passcodeAttempt === message.passcode){
//             renderMessageAsHtml(message);
//         }    
//     }
// };

// const renderMessageAsHtml = (message) => {
//     // Hide Input Form
//     passcodeInput = document.querySelector('passcodeInput');
//     passcodeInput.style.display = 'none';
//     // Render messageas HTML
//     const messageDiv = document.querySelector('#message');
//     messageDiv.innerHTML = message;
// }

viewMsg = document.querySelector('#viewMsg');

viewMsg.addEventListener('click', () => {
    const userPasscodeGuess = document.querySelector('#passcode').value;
    // findMessage(userPasscodeGuess);

    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();

        for(let key in data){
           if(data[key].passcode == userPasscodeGuess){
               display(data[key])

           }
        }
    })
});

const display = (messageObject) => {
    console.log(messageObject);
    
    // Render messageas HTML
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = messageObject.message

    // Hide Input Form
    passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'none';
};