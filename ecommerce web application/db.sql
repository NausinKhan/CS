CREATE TABLE chat_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(255),
    message TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
