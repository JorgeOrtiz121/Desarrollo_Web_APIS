const parte1='https://api.giphy.com/v1/gifs/search'
const parte2='?q='
const parte3='&api_key=UGJNc28jyQFflNZK3GM0LKNweBQa4m8R'
const parte4='&limit=5'
let b="";
let urlomplet="";
const boton=document.getElementById("btin")
boton.onclick=()=>{
    document.getElementById("secondary").innerHTML=""
    b=document.getElementById("forma1").value;
    urlomplet=parte1+parte2+b+parte3+parte4;
    traerdato();
}
const traerdato=async()=> {
    await fetch(urlomplet).then((response)=>{
        return response.json();

    }).then((giphy)=>{
        console.log(giphy);
    
    //for(let i=0;i<giphy.data.lenght;i++){
    const mip=Math.round(Math.random() * 4)
    console.log(mip)
    const imagenesgift=document.createElement('img');
    imagenesgift.src=giphy.data[mip].images['original'].url;
    imagenesgift.className="esfotgift";
    document.getElementById("secondary").appendChild(imagenesgift);
    //}
})
}



