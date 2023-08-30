


let ipuser = document.getElementById("inpuser")
let contanre = document.querySelector(".contanre")
let contanre2 = document.querySelector(".contanre2")
let post2  = document.querySelector(".post2")
let f =document.getElementById("fh")
let img =document.getElementById("img1")
let spn = document.getElementById("spn")
   

let valuetext = document.getElementById("valuetext")

let prof  = document.getElementById("prof")


function chang(){
prof.src = URL.createObjectURL(f.files[0])

}










function login(){
    console.log(ipuser.value)
    contanre.style.display="none"
    
    contanre2.style.display="block"
 

  

    

    
    
    
    
    
       
    
    
}


let postsArray;
if(localStorage.postsData!=null  ){
    postsArray =JSON.parse(localStorage.postsData)
}else{
     postsArray = [];
}


// let btv =document.getElementById("btv")

function pst (){
    let audio = new Audio("0827.MP3")
  
      audio.play()


      let obj1 = {
        user:ipuser.value,
        text1:valuetext.value,
        img3:prof.src,
        
        
        
           }
          
          
            postsArray.push(obj1);
        
        
        
            localStorage.setItem('postsData', JSON.stringify(postsArray));
            
        console.log(postsArray)
        
           
        












for(i=0 ; i <postsArray.length ; i++ ){
    post2.innerHTML +=`<div class="card">

    <img src="profile.png" alt="">

    <div class="post-text">
        <h2>${postsArray[i].user}</h2>
        <span id="spn"></span>
    </div>
        </div>
    <p>${postsArray[i].text1}</p>
    
    <img id="img1" src="post-image-1.png"   width="100%" > 
   
    <div class="icons">
    <div class="link-icon">
    
    <img src="like.png" alt="">
    
    <span>like</span>
    </div>
    <div class="link-icon">
    <img src="comment.png" alt="">
    <span>comment</span>
    </div>
    
    <div class="link-icon">
        <img src="share.png" alt="">
    <span>share</span>
    </div>
    <div class="link-icon">
        <img src="send.png" alt="">
    <span>send</span>
    </div>
    </div>
    <br> `
}    
  
 
  }





















