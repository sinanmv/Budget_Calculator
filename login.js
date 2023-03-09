let unamedisplay = ""
function logindata()
{
    uname = unamelogin.value
    pswd = pswdlogin.value
    if(uname in localStorage)
    {
        data = localStorage.getItem(uname)
        datanew = JSON.parse(data)
        //console.log(datanew.unamet);
        if(datanew.pswd == pswd)
        {
            alert("login successfully") 
            localStorage.setItem("welcome",datanew.uname)
            window.location.href ="./dashboard.html"
        }       
        else
        {
            alert("invalid password")
        }
    }
    else
    {
        alert("invalid Username")
    }
}

//  resultval.innerHTML = `<h1>Welcome ${localStorage.getItem("welcome")}</h1>` 