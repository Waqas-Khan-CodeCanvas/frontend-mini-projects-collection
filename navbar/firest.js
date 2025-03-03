function setdata(){
    let key=prompt("Enter your key here ")
    let value=prompt("Enter your value here ")
    localStorage.setItem(key,value)
}
function deleteData(){
    let del=prompt("Enter your key here to delete value ")
    localStorage.removeItem(del)
}
function findData(){
    let find=prompt("Enter your key to value")
    document.write(localStorage.getItem(find))
}
function resetData(){
    let reset=confirm("are you sure to reset the storage !")
    if(reset){
        localStorage.clear()
        alert("now your storage is empty ")
    }
}
let set=document.querySelector("#set")
let remove=document.querySelector("#remove")
let find=document.querySelector("#find")
let reset=document.querySelector("#reset")
set.addEventListener('click',setdata)
remove.addEventListener('click',deleteData)
find.addEventListener('click',findData)
reset.addEventListener('click',resetData)
console.log("hell\nworld")