<?php
	$name = $_POST['name'];
	$college = $_POST['college'];
	$id = $_POST['id'];
	$email = $_POST['email'];


	// Database connection
	$conn = new mysqli('localhost','root','','hackethon data');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name, college, id, email) values(?, ?, ?, ?)");
		$stmt->bind_param("ssis", $name, $college, $id, $email);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>