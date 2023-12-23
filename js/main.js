// declearing varabiles
var bookmarkname = document.getElementById("bookmarkname");
var bookmarkurl = document.getElementById("bookmarkurl");
var submitbtn = document.getElementById("submit")
var tbody = document.getElementById("tbody");
// create function
if (localStorage.getItem("data") == null) {
    var allsites = []
}
else {
    var allsites=JSON.parse(localStorage.getItem("data"))
}
function addsite(){
    var site = {
        bname: bookmarkname.value,
        burl: bookmarkurl.value,
    }
    allsites.push(site)
    var sitesdata = JSON.stringify(allsites)
    localStorage.setItem("data", sitesdata)
    clearform()
    displaysites()


}
// creating  retrive function
function retivesites() {
    var tr = ``
    var lastindex = allsites.length - 1;
    tr += `   <tr>
            <td>${lastindex }</td>
            <td>${allsites[lastindex].bname}</td>
            <td><a href="${allsites[lastindex].burl}" class="btn btn-warning"></a></td>
        <td> <button class="btn btn-danger" ><i class="fa-solid fa-trash"></i></button></td>
        </tr>`;
    tbody.innerHTML = tr;
}
// creating display function
function displaysites() {
    var tr = ``;
    for (var i = 0; i < allsites.length; i++){
        tr += `<tr>
        <td>${i + 1}</td>
        <td>${allsites[i].bname}</td>
        <td><a href="${
          allsites[i].burl
        }" class="btn btn-warning"><i class="fa-solid fa-eye m-1" style="color: #ffffff;"></i>Visit</a></td>
        <td> <button class="btn btn-danger" onclick="deletesite(${i})"><i class="fa-solid fa-trash m-1"></i>Delete</button></td>


        </tr>`;
        tbody.innerHTML=tr
    }
    
}
displaysites()
// creating clearform function 
function clearform() {
    bookmarkname.value = ``
    bookmarkurl.value=''
}
// creating delete function
function deletesite(i) {
    allsites.splice(i, 1)
    displaysites()
    localStorage.setItem("data",JSON.stringify(allsites))
}