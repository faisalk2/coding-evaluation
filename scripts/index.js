// Store the wallet amount to your local storage with key "amount"
let bank=(localStorage.getItem("amount"));
document.getElementById("wallet").innerText=bank;

const addAmount=()=>{
    
    let amount=document.getElementById("amount").value;
    let total=Number(bank)+Number(amount);
    localStorage.setItem("amount",(total));
     bank=(localStorage.getItem("amount"));
     document.getElementById("wallet").innerText=bank;
     window.location.reload();
}


const bookMovies=()=>{
    window.location.href="movies.html"
}