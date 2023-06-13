function value(){     

    let email = document.getElementById("form1Example13").value;
    let senha = document.getElementById("form1Example23").value;

    if (email == "ale" && senha== "000"){
        alert("bem vindo!");
    }else{
        alert("verifique os dados");
    }
}