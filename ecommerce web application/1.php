<?php
// Establish a database connection (you need to provide your credentials)
$connection = mysqli_connect("hostname", "username", "password", "database");

if (isset($_POST["username"]) && isset($_POST["message"])) {
    $username = mysqli_real_escape_string($connection, $_POST["username"]);
    $message = mysqli_real_escape_string($connection, $_POST["message"]);
    
    // Insert the message into the database
    $query = "INSERT INTO chat_messages (sender, message) VALUES ('$username', '$message')";
    mysqli_query($connection, $query);
}

// Retrieve and display chat messages
$query = "SELECT sender, message, timestamp FROM chat_messages ORDER BY timestamp DESC LIMIT 20";
$result = mysqli_query($connection, $query);
while ($row = mysqli_fetch_assoc($result)) {
    echo "<b>" . $row["sender"] . ":</b> " . $row["message"] . " (" . $row["timestamp"] . ")<br>";
}
?>
