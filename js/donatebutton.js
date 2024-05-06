var form=document.getElementById("formid");
function submit(event){
    event.preventDefault();

}
form.addEventListener("submit",submit)


function fun_name(){
    var food_name=document.getElementById("foodName").value
    var quantity=document.getElementById("quantity").value
    var Donorname=document.getElementById('Donorname').value
    var mobilenumber=document.getElementById('mobilenumber').value
    var CityorVillage=document.getElementById('CityorVillage').value
    var expiry=document.getElementById("expiryDate").value
    console.log(food_name,quantity,Donorname,mobilenumber,CityorVillage,expiry)
    document.getElementById("editn").innerHTML=food_name
    document.getElementById('editq').innerHTML=quantity
    document.getElementById('editd').innerHTML=Donorname
    document.getElementById('edits').innerHTML=mobilenumber
    document.getElementById('edita').innerHTML=CityorVillage
    document.getElementById("edite").innerHTML=expiry
    
    document.getElementById("formid").reset();

        // Create a new table row
        var table = document.getElementById('donationTable');
        var newRow = table.insertRow(table.rows.length);
    
        // Insert cells with form values
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
    
        cell1.innerHTML = food_name;
        cell2.innerHTML = quantity;
        cell3.innerHTML = expiry;
        cell4.innerHTML = Donorname;
        cell5.innerHTML = CityorVillage;
        cell6.innerHTML = mobilenumber;
    


}
document.getElementById("myBtn").addEventListener("click", fun_name);
    function copyPhoneNumber() {
      var edits= document.getElementById('edits').innerText;
      var textarea = document.createElement('textarea');
      textarea.value = edits;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Phone number copied: ' + edits);
    }