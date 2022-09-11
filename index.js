
let countEl =  document.getElementById("count-el") 
let saveEnteries = document.getElementById("save-enteries")
let count = 0
console.log(countEl)
function increment(){
    count++
   countEl.innerText = count
}
function save(){
console.log(count)
saveEnteries.textContent+=" "+count+" -"
count = 0;
countEl.innerText = 0
}

