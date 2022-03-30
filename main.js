// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



  
  

mimicServerCall("http://mimicServer.example.comasdasd")
    .then( (resp) => {
      const heart = document.querySelectorAll('.like');
   
      for (let i = 0; i < heart.length; i++) {
          heart[i].addEventListener("click", function(e) {      
            let heartColor = e.target.innerHTML;
            
           if(heartColor == EMPTY_HEART) {
            e.target.innerHTML = FULL_HEART;
             e.target.classList.add("activated-heart");
    
            } else {
              e.target.innerHTML = EMPTY_HEART;
              e.target.classList.remove("activated-heart");
            };
        
         mimicServerCall();
      })
    }
  })
.catch((error) => {
      console.log(error);

      const errorMsg = setTimeout(function() {
        document.getElementById('modal').classList.remove("hidden");
      }, 3000);
      
    }
)

 


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
