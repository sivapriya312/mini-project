var selectedRow = null;
// showalerts
function showAlert(message,className){
    const div= document.createElement("div");
    div.className = `alert alert-${className}`;
    
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".conatiner");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);

}
// clear all
function clearFields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#lastname").value="";
    document.querySelector("#rollno").value="";

}
// add
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();
    //get val
    const firstName = document.querySelector("#firstName").value;
    const lastname = document.querySelector("#lastname").value;
    const rollno = document.querySelector("#rollno").value;
    // validate
    if (firstName ==="" || lastname ===""|| rollno === ""){
        showAlert("Please fill all field", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr")

            row.innerHTML = `
                  <td>${firstName}</td>
                  <td>${lastname}</td>
                  <td>${rollno}</td>
                  <td>
                  <a href="#" class="btn btn-warning btn-sm edit"> Edit</a>
                  <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastname;
            selectedRow.children[2].textContent = rollno;
            selectedRow = null;
            showAlert("Student info edited","info");

        }
        clearFields();
    }

});
// editing
document.querySelector("#student-list").addEventListener("click", (e) =>{
    const target =e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastname").value = selectedRow.children[1].textContent;
        document.querySelector("#rollno").value = selectedRow.children[2].textContent;
    }
});

// delete data
document.querySelector("#student-list").addEventListener("click",(e) =>{
  const target = e.target;
 if (target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted","danger");
 }
 });
