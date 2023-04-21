const func = () => {
    const userName = document.getElementById("name").value;
    const userSurname = document.getElementById("surname").value;
    const user = userName + " " + userSurname;
    localStorage.setItem("user", user);
} 

