//onload function set for table  and savings
tableDisplayType = 0
datanew = JSON.parse(localStorage.getItem(localStorage.getItem("welcome")))
uname = localStorage.getItem("welcome")
if(uname == null)
    {
        alert("Redirect to Login Page")
        window.location.href = "./index.html"
    }

window.onload = () => {
    console.log('The page has fully loaded');
    this.addtable()
    this.displaysavings()
    expenseresult.innerHTML = `$ ${datanew.expenseAmount}`
    incomeresult.innerHTML = `$ ${datanew.incomeAmount}`
    welcomeDisplay.innerHTML = `Hi ${uname}`
    
};
function setdatalist() {
    expensedata = ["car tax", "rent paid", "electricity bill", "water bill", "internet bill"]
    incomedata = ["salary", "rent received", "pocket money"]
    selector = document.getElementById("selectval").value
    var options = '';
    if (selector == 1) {
        options = ""
        for (var i = 0; i < expensedata.length; i++) {
            options += '<option value="' + expensedata[i] + '" />';
        }
    }
    else if (selector == 2) {
        options = ""
        for (var i = 0; i < incomedata.length; i++) {
            options += '<option value="' + incomedata[i] + '" />';
        }
    }
    else if (selector == 0) {
        options = ""
    }




    document.getElementById('listdata').innerHTML = options;
}

// storing script here

function randomset() {
    idnum = Math.floor(Math.random() * 100);
    console.log("random function called");
    return idnum
}
function store() {
    uname = localStorage.getItem("welcome")
    // data = localStorage.getItem(uname)
    // idnum = Math.random(Math.floor(Math.random() * 10));
    num = randomset()

    // datanew = JSON.parse(data)

    selector = document.getElementById("selectval").value
    if (selector == 1) {
        savings = parseFloat(amount.value)
        if (num in datanew.credit) {
            // num=this.randomset()
            this.store()
        }
        else {
            if (savings > datanew.savings) {
                alert("entered amount more than savings amount")
            }
            else {
                datanew.expenseAmount += savings
                datanew.savings -= savings
                // debi = {}
                dataobject = {}
                dataobject[note.value] = amount.value
                // debi[num] = dataobject
                // console.log(debi);
                datanew.debit[num] = dataobject
                // datanew.debit.push(dataobject)
                localStorage.setItem(uname, JSON.stringify(datanew))
                window.location = ""
            }
        }

    }
    else if (selector == 2) {
        if (num in datanew.credit) {
            this.store()
        }
        else {
            // credi = {}
            dataobject = {}
            dataobject[note.value] = amount.value
            // credi[num] = dataobject
            // console.log(credi);
            datanew.credit[num] = dataobject
            // datanew.credit.push(dataobject)
            console.log(datanew);
            savingsdata = parseFloat(amount.value)
            datanew.savings += parseFloat(savingsdata)
            datanew.incomeAmount += parseFloat(amount.value)
            // savingsresult.innerHTML = `$ ${datanew.savings}` 
            localStorage.setItem(uname, JSON.stringify(datanew))
            window.location = ""
        }
    }
    else if (selector == 0) {
        alert("invalid select choose Income or Expense")
    }
}

function displayChangeType() {
    this.tableDisplayType = document.getElementById("type").value
    for (i = document.getElementById("history").rows.length - 1; i > 0; i--) {
        document.getElementById("history").deleteRow(i)
    }
    this.addtable()
}

function addtable() {
    // datanew = JSON.parse(localStorage.getItem(localStorage.getItem("welcome")))
    console.log(datanew);
    // tablecount = datanew.credit.length
    var table1 = document.getElementById("history")
    if (this.tableDisplayType == 0) {

        for (var i in datanew.credit) {
            var row = table1.insertRow(1);
            var key = Object.keys(datanew.credit[i])
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3)
            cell1.innerHTML = i
            cell2.innerHTML = "Income"
            cell3.innerHTML = key
            cell4.innerHTML = datanew.credit[i][key]
        }
        for (var i in datanew.debit) {
            var row = table1.insertRow(1);
            var inkey = Object.keys(datanew.debit[i])
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3)
            cell1.innerHTML = i
            cell2.innerHTML = "Expense"
            cell3.innerHTML = inkey
            cell4.innerHTML = datanew.debit[i][inkey]
        }



    }
    else if (this.tableDisplayType == 1) {
        for (var i in datanew.debit) {
            var row = table1.insertRow(1);
            var inkey = Object.keys(datanew.debit[i])
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3)
            cell1.innerHTML = i
            cell2.innerHTML = "Expense"
            cell3.innerHTML = inkey
            cell4.innerHTML = datanew.debit[i][inkey]
        }
    }
    else if (this.tableDisplayType == 2) {
        for (var i in datanew.credit) {
            var row = table1.insertRow(1);
            var key = Object.keys(datanew.credit[i])
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3)
            cell1.innerHTML = i
            cell2.innerHTML = "Income"
            cell3.innerHTML = key
            cell4.innerHTML = datanew.credit[i][key]

        }
    }
}

function displaysavings() {
    // datanew = JSON.parse(localStorage.getItem(localStorage.getItem("welcome")))
    savingsresult.innerHTML = `$ ${datanew.savings}`
}

deleteValue = ()=>{
    selector = document.getElementById("delselect").value
    idnum = idNum.value
    if(idnum == "")
    {
        alert("enter id number")
    }
    else if(selector == 1)
    {
        if(idnum in datanew.debit)
        {
            var key = Object.keys(datanew.debit[idnum])
            datanew.expenseAmount -= parseFloat(datanew.debit[idnum][key]) 
            datanew.savings += parseFloat(datanew.debit[idnum][key])
            Reflect.deleteProperty(datanew.debit,idnum)
            localStorage.setItem(uname,JSON.stringify(datanew))
            window.location.href = ""
        }
        else
        {
            alert("invalid Id num")
        }
    }
    else if(selector == 2)
    {
        if(idnum == "")
    {
        alert("enter id number")
    }
        else if(idnum in datanew.credit)
        {
            
            var key = Object.keys(datanew.credit[idnum])
            datanew.incomeAmount -= parseFloat(datanew.credit[idnum][key]) 
            datanew.savings -= parseFloat(datanew.credit[idnum][key])
            Reflect.deleteProperty(datanew.credit,idnum)
            localStorage.setItem(uname,JSON.stringify(datanew))
            window.location.href = ""
        }
        else
        {
            alert("invalid Id num")
        }
    }
    else if(selector == 0 )
    {
        alert("invalid select")
    }
}

logout=()=>
{
    localStorage.removeItem("welcome")
    window.location.href = "./index.html"
}