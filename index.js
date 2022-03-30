var arr = [];
var input1 = document.getElementById("title").value;
var input2 = document.getElementById("disc").value;
var index1 = null;
function addList(){
   var dataObj = {
       title:document.getElementById("title").value,
      dic:  document.getElementById("disc").value
    }
if (dataObj.title === "" && dataObj.dic === ""){
   alert("please enter text")
}else{
   arr.unshift(dataObj)
   // console.log(arr)
   var getttingData = JSON.parse(localStorage.getItem("data"))
 if (getttingData === null){
    localStorage.setItem("data", JSON.stringify(arr))
 }
 else{
    getttingData = JSON.parse(localStorage.getItem("data"))
    getttingData.unshift(dataObj)
    localStorage.setItem("data", JSON.stringify(getttingData));
  window.location.reload();
   } 
location.reload()
}
}
var getttingData = JSON.parse(localStorage.getItem("data"))
for (var i=0; i<getttingData.length; i++){
   var mainDiv = document.getElementById("main");
var listDiv = document.createElement("div")
listDiv.setAttribute("id","box")
   var h2 = document.createElement("h2");
h2.setAttribute("id","heading")
h2.innerHTML = getttingData[i].title;
var para = document.createElement("p");
para.innerHTML = getttingData[i].dic;
var editBtn = document.createElement("button")
editBtn.setAttribute("onclick", `edit(${[i]})`)
editBtn.innerHTML = "Edit Post"
editBtn.setAttribute("class", "btnInner")

var dltBtn = document.createElement("button")
dltBtn.setAttribute("onclick", `dlt(${[i]})`)
dltBtn.setAttribute("class", "btnInner")
dltBtn.innerHTML = "delete"
mainDiv.appendChild(listDiv)
listDiv.appendChild(h2)
listDiv.appendChild(para)
listDiv.appendChild(editBtn)
listDiv.appendChild(dltBtn)
}


function dlt(index) {
   console.log(index)
   getttingData.splice(index,1);  
   localStorage.setItem("data", JSON.stringify(getttingData));
   window.location.reload()
}

function edit(index){
 index1 = index;
 console.log(index1)
//  window.index2 = index1;
   var editBox = document.getElementById("editBox")
editBox.style.top = "0"
// return index1
}
// console.log(index1) 

// var gotIndex = index;
// console.log(gotIndex)
function saveChanges(){
// alert("hy")
var titleText = document.getElementById("titleText")
var discText= document.getElementById("discText") 
var editObj = {
      title: titleText.value,
      dic: discText.value
   }
if (editObj.title === "" && editObj.dic === ""){
   alert("please enter text")
}
else{


   var getttingData = JSON.parse(localStorage.getItem("data"))
getttingData.splice(index1,1, editObj)
localStorage.setItem("data", JSON.stringify(getttingData));
window.location.reload()
}
// hiding opened box
var editBox = document.getElementById("editBox")
editBox.style.top = "-100%"


// alert(index1)

}
// console.log(edit())