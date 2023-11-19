<?php
$host = "localhost";
$user = "root";
$pw = "";
$ndb = "les_list";

$con = mysqli_connect($host, $user, $pw, $ndb);
if ($con) {
    echo "connected";
} else {
    echo "no connected";
}
?>