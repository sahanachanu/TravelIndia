<?PHP
if (isset($_REQUEST['Submit'])) {
	ConnectToDB();
	CreateUserTable();
	PushDataToUserTable();
	header("Location: Sahana.php");
}

FUNCTION ConnectToDB()
{
    $err = mysql_connect("localhost", "root", "");
    if (!$err)
    {
        die('Could not connect: ' . mysql_error());
    }

    mysql_query("CREATE DATABASE Dad");
    mysql_query("use Dad");
}

FUNCTION CreateUserTable() {
	$Query = "CREATE TABLE UserDatabase
	(
	Username INT(8) NOT NULL,
	Password VARCHAR(20) NOT NULL,
	PRIMARY KEY(Username))";

	mysql_query($Query);

}

FUNCTION PushDataToUserTable() {
	$Query = "INSERT INTO UserDatabase ( Username, Password) VALUES ('".$_REQUEST['Username']."','".$_REQUEST['Password']."')";
	mysql_query($Query);
}

?>
