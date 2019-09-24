 
 // setInterval(function(){},interval)
 //setTimeout(function(){},interval)
 
 
 
 setInterval(newFlake,1000);
 
 function newFlake(){     //sa creeze un div cu class = "flake"
 var snow = document.getElementById('snow')

if(snow.children.length<100){
 var div = document.createElement('div')
 div.className = "flake falling" ;
 var left = Math.round(Math.random()*500)
 div.style.left = `${left}px`;
 
//  div.onanimationend = function (){ urmarim animatia din (Css)
    div.addEventListener('animationend', endOfAnimation)

 snow.appendChild(div)
}
console.log(div)
 }


 function endOfAnimation(e){
    //  alert(e.target.className)
    if(e.target.className=="flake falling"){
        e.target.className="flake falling"
        e.target.style.top = '500px'
    }else{
        e.target.parentElement.removeChild(e.target)
    }
     e.target.className = "flake fading";
      e.target.style.top = '500px';
    }

newFlake()
