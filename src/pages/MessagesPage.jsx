
    import React, { useState } from "react";

    const conversations = [
      { id: 1, name: "Nilay" },
      { id: 2, name: "Raj" },
      { id: 3, name: "Rahul" },
    ];
    
    const MessagesPage = () => {
      const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
      const [messages, setMessages] = useState([
        { from: "Nilay", text: "Hey there!" },
        { from: "Me", text: "Hello Nilay!" },
      ]);
      const [newMessage, setNewMessage] = useState("");
    
      const handleSendMessage = () => {
        if (newMessage.trim() === "") return;
        setMessages([...messages, { from: "Me", text: newMessage }]);
        setNewMessage("");
      };
    
      return (
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Chats</h2>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`p-2 rounded cursor-pointer ${selectedConversation.id === conv.id ? "bg-blue-300" : "hover:bg-blue-100"}`}
                onClick={() => setSelectedConversation(conv)}
              >
                {conv.name}
              </div>
            ))}
          </div>
    
          {/* Chat Window */}
          <div className="flex flex-col w-3/4">
            {/* Header */}
            <div className="bg-blue-500 text-white p-4 text-lg font-bold">
              Chat with {selectedConversation.name}
            </div>
    
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`my-2 p-2 rounded max-w-md ${msg.from === "Me" ? "ml-auto bg-blue-200" : "mr-auto bg-white"}`}
                >
                  <div className="text-sm text-gray-700">{msg.text}</div>
                </div>
              ))}
            </div>
    
            {/* Input */}
            <div className="flex p-4 border-t">
              <input
                type="text"
                className="flex-1 border p-2 rounded"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      
    
  );
};

export default MessagesPage;
