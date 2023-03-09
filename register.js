function store()
{
    //remaining adding savings debit and credit
    data = {
        uname : uname.value,
        phone : phonenum.value,
        dob : dob.value,
        pswd : pswd.value,
        savings : 0,
        debit : {},
        credit : {},
        expenseAmount : 0,
        incomeAmount : 0

    }
    if(data.uname in localStorage)
    {
        alert("already username taken")
    }
    else
    {
        datanew = JSON.stringify(data)
        localStorage.setItem(data.uname,datanew)
        alert("register successfully")
        window.location.href = "./index.html"

    }
}