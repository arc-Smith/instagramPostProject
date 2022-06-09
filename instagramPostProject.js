/* Code below is for display likes */
let allLikes = 133;
let likes = document.querySelector(".theLikes");
likes.innerHTML+=`<i>${(allLikes.toString())}</i>`;
/* Code above is for display likes */

// Add Code Below
let aHeart = document.getElementById("heart");
let aLike = 0;
function likeFunction(){
  if(aLike%2==0){
    aHeart.style.backgroundColor = "salmon";
  aHeart.style.color = "white";
    allLikes++;
   likes.innerHTML=`<i>${(allLikes.toString())}</i>`;
  } else{
   aHeart.style.backgroundColor = "transparent";
  aHeart.style.color = "black";
   allLikes--;
  likes.innerHTML=`<i>${(allLikes.toString())}</i>`;
  }
  aLike++;
}
// Add Code Above











/* Code below changes the user for the comment modal window */
document.querySelector(".comment").innerHTML = document.querySelector(".theUser").innerHTML;
/* Code above changes the user for the comment modal window */

/* Code below changes the image for the comment modal window */
document.querySelector(".thePost").src = document.querySelector(".yourPost").src;
/* Code above changes the image for the comment modal window */

/* Code below allows for the search box to operate */
function search_stocks(){
  let input0 = document.querySelector('#searchbar');
  if(input0 === document.activeElement){
    document.querySelector('#followers').style.display = "block";
  }
  document.querySelector('.modalFront').addEventListener("click", function(){
  });
  let input = document.querySelector('#searchbar').value;
  input = input.toLowerCase()
  let x = document.getElementsByClassName('follower');
  for(let i = 0; i < x.length; i++){
    if (!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display="none";
    }
    else {
      x[i].style.display="list-item";
    }
  }
}
/* Code above allows for search box to operate */
