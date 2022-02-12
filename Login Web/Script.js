function validation()
{
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
     
    if(Username == "Admin" && Password == "a123")
    {
        alert("Login Successfully");
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}