function insertrow(){
    let table = document.getElementById('mytable');
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = "John";
    cell2.innerHTML = "Doe";
    cell3.innerHTML = "27";
    cell4.innerHTML = "<button type='button' onclick='deleterow(this)'>Delete</button>";
}

function deleterow(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById('mytable').deleteRow(i);
}