let rows=100
let cols=26

let addressColCont=document.querySelector(".address-col-cont");
let addressRowCont=document.querySelector(".address-row-cont")
let cellCont=document.querySelector(".cells-cont")
let addressBar=document.querySelector(".address-bar")



for(let i=0;i<rows;i++){
    let addressCol=document.createElement("div");
    addressCol.setAttribute("class","address-col")
    addressCol.innerText=i+1;
    addressColCont.appendChild(addressCol);
}

for(let i=0;i<cols;i++){
    let addressRow=document.createElement("div");
    addressRow.setAttribute("class","address-row");
    addressRow.innerText=String.fromCharCode(65+i);
    addressRowCont.appendChild(addressRow)
}

for(let i=0;i<rows;i++){
    let rowCont=document.createElement("div");
    rowCont.setAttribute("class","row-cont")
    for(let j=0;j<cols;j++){
        let cell=document.createElement("div");
        cell.setAttribute("class","cell");
        cell.setAttribute("contenteditable","true");
       //For cell row col identifiaction
        cell.setAttribute("rid",i);
        cell.setAttribute("cid",j);
        cell.setAttribute("spellcheck",false);
        rowCont.appendChild(cell);
        addListenerForAddressDisplay(cell,i,j);

    }
    cellCont.appendChild(rowCont)
}
function addListenerForAddressDisplay(cell,i,j){
    cell.addEventListener("click",(e)=>{
        let rowID=i+1;
        let colID=String.fromCharCode(65+j);
        addressBar.value=`${colID}${rowID}`
    })
}

//bydefault click on first cell
let firstCell=document.querySelector(".cell")
firstCell.click();