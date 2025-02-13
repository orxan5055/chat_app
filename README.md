# Real-Time Chat Application

This is a real-time chat application built using Spring Boot (WebSockets, STOMP, SockJS) and Thymeleaf for the frontend.

### Features

- Real-time messaging with WebSockets.

- Uses STOMP protocol for message handling.

- SockJS fallback for clients that do not support WebSockets.

- Simple frontend using Thymeleaf and JavaScript.

### Technologies Used

### Backend:

- Java 17

- Spring Boot 3+

- Spring WebSocket

- STOMP Protocol

- SockJS

- Spring MVC (Thymeleaf for UI Rendering)

### Frontend:

- Thymeleaf

- JavaScript (SockJS & STOMP.js)

- HTML
### Project Structure
```
chat-application/
│── src/
│   ├── main/
│   │   ├── java/com/example/chatapp/
│   │   │   ├── config/WebSocketConfig.java
│   │   │   ├── controller/ChatController.java
│   │   │   ├── model/ChatMessage.java
│   │   │   ├── service/MessageService.java
│   │   │   ├── ChatApplication.java
│   │   ├── resources/
│   │   │   ├── templates/chat.html
│   │   │   ├── static/js/chat.js
│   │   │   ├── application.properties
│── pom.xml
│── README.md
```
### Installation & Setup

### 1️⃣ Clone the Repository
```
git clone https://github.com/your-username/chat-application.git
cd chat-application
```
### 2️⃣ Build & Run the Project

##### Using Maven:
```
mvn clean package
mvn spring-boot:run
```
##### Or using an IDE (IntelliJ, Eclipse):

- Open the project

- Run ChatApplication.java

### Access the Application

- Open the browser and visit:

http://localhost:8080/chat

### API Endpoints

#### WebSocket Endpoints

| Endpoint           | Description                              |
|-------------------|------------------------------------------|
| `/chat`       | WebSocket connection endpoint           |
| `/app/sendMessage` | Clients send messages to this endpoint  |
| `/topic/messages`  | Clients subscribe to receive messages |


### How It Works

1. Users open http://localhost:8080/chat.

2. WebSocket connection (/chat) is established.

3. When a user sends a message, it is published to /app/sendMessage.

4. The message is then broadcasted to all clients subscribed to /topic/messages.

5. The frontend updates and displays the new message.

