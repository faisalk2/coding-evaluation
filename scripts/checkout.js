// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=localStorage.getItem("amount");
let h1=document.getElementById("wallet");
h1.innerText=amount;
let movie=JSON.parse(localStorage.getItem("movies"));
let div=document.createElement("div");
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=movie.Poster;
        let p=document.createElement("p");
        p.innerText=movie.Title;
        d1.append(p);
        div.append(img,d1);
        document.getElementById("movie").append(div);

const submitData=()=>{
    let seat=document.getElementById("number_of_seats").value;
    {
        if((seat*100)<=amount)
        {
            alert("Booking successful!");
        let sum=amount-(100*seat);
        localStorage.setItem("amount",(sum));
         window.location.reload();
        }else{
            alert("Insufficient Balance!")
        }
    }
    
}