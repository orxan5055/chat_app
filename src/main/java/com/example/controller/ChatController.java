package com.example.controller;

import com.example.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ChatController {

    @GetMapping("/chat")
    public String chatPage() {
        return "chat"; // ✅ This loads chat.html from /templates/
    }

    @MessageMapping("/sendMessage") // Maps to "/app/sendMessage"
    @SendTo("/topic/messages") // Broadcasts to "/topic/messages"
    public Message sendMessage(Message message) {
        return message; // Send message back to clients
    }
}
