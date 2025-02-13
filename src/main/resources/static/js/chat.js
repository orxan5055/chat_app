var stompClient = null;

function connect() {
    console.log("Attempting WebSocket connection...");

    var socket = new SockJS('/chat'); // Ensure this matches your WebSocket endpoint
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log('Connected to WebSocket: ' + frame);
        stompClient.subscribe('/topic/messages', function (message) {
            console.log("Received message: " + message.body);
            showMessage(JSON.parse(message.body)); // Display message in UI
        });
    }, function(error) {
        console.log('WebSocket Connection Error:', error);
    });
}

function sendMessage() {
    var messageContent = document.getElementById("messageInput").value;
    if (messageContent.trim() !== "") {
        let message = { content: messageContent }; // Wrap message content in an object
        stompClient.send("/app/sendMessage", {}, JSON.stringify(message)); // Send message
        document.getElementById("messageInput").value = ''; // Clear input field
    }
}

function showMessage(message) {
    var messageList = document.getElementById("messagesList");
    var newMessage = document.createElement("li");
    newMessage.appendChild(document.createTextNode(message.content));
    messageList.appendChild(newMessage);
}

window.onload = function() {
    connect();
};