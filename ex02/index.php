<?php
include("connerction.php");
if(isset($_POST["submit"])){
$query = "SELECT * FROM nomDB WHERE user ='$_POST[user]'";
mysqli_query($conn, $query);
echo "la parti il fait repete :".mysqli_affected_rows($con);
}
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>insert</title>
</head>

<body>


</body>

</html>