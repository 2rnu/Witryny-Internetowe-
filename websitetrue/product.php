<!DOCTYPE html>
<html>
<body>

<?php
session_start();

// initializing variables
$username = "root";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', $username, '', 'uzytkownicy');

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}



$sql = "SELECT ID, autor, tytul, tresc FROM enties";
$result = $db->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        print "<br> id: ". $row["id"]. "<br> - Name: ". $row["username"]. "<br> - Email: " . $row["email"] . "<br>";
      print "<img src=\"".$row["img"]."\">";
     
    }
} else {
    print "0 results";
}



$db->close();   
        ?> 
</body>
</html>