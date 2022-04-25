// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
const debounce=(func,time)=>{
    if(id){
        clearTimeout(id);
    }

   id=setTimeout(()=>{
    func();
    },time)
}

const main=async()=>{
    let data=await searchMovie();
    console.log(data);
    if(data==undefined)
    {
        return false;
    }
    appendData(data);
}
// http://www.omdbapi.com/?apikey=[yourkey]&?t=

const searchMovie=async ()=>{
let query=document.getElementById("search").value;
try{
  const res=await fetch(`https://www.omdbapi.com/?apikey=7749b9a7&t=${query}`);
  const data=await res.json();
  console.log(data);
  return data;
}catch(err)
{
    console.log(err)
}
}

const appendData=(data)=>{
    document.getElementById("movies").innerHTML=null;
        let div=document.createElement("div");
        div.id="movieData";
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.id="image";
        img.src=data.Poster;
        let p=document.createElement("p");
        p.innerText=data.Title;
        let btn=document.createElement("button");
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",()=>
        {
            bookSeats(data);
        });
        d1.append(p,btn);
        div.append(img,d1);
        document.getElementById("movies").append(div);
}

const bookSeats=(ele)=>{
localStorage.setItem("movies",JSON.stringify(ele)); 
window.location.href="checkout.html";
}

let amount=localStorage.getItem("amount");
document.getElementById("wallet").innerText=amount;
