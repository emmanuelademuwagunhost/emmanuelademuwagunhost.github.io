/*   
I am aware the code is not dry and has a little bug. This will surely be fixed.
I tried not to use ChatGPT or any AI tool. Just w3schools, stackoverflow, etc.
Emmanuel Ademuwagun
*/


let commentArray = [
  {name: "Connor Walton",date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
  {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
  {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
  ]
  
  
  document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector(".comment_inputpage");
  
  //First Comment Area
    const commentSection = document.querySelector(".comment__area");
    const commentMainContainer= document.createElement("div");
    commentMainContainer.classList.add("comment__maincontainer");
    commentSection.appendChild(commentMainContainer);
  
    const commentContent = document.createElement("div");
    commentContent.classList.add("comment__contents");
    commentMainContainer.appendChild(commentContent);
  
    const commentImagecontent = document.createElement("div");
    commentImagecontent.classList.add("comment__imagecontent");
    commentContent.appendChild(commentImagecontent);
  
    const commentHeadercontent = document.createElement("div");
    commentHeadercontent.classList.add("comment__headercontent");
    commentContent.appendChild(commentHeadercontent);
  
    const commentSbfw = document.createElement("div");
    commentSbfw.classList.add("comment__sbfw");
    commentHeadercontent.appendChild(commentSbfw);
  
    const commentName = document.createElement("div");
    commentName.classList.add("comment__name");
    commentName.innerHTML = commentArray[0].name;
    commentSbfw.appendChild(commentName);
  
    const commentDate = document.createElement("div");
    commentDate.classList.add("comment__date");
    commentDate.innerHTML = commentArray[0].date;
    commentSbfw.appendChild(commentDate);
  
    const mainCommentDi = document.createElement("div");
    mainCommentDi .classList.add("main_comment_di");
    mainCommentDi.innerHTML = commentArray[0].comment;
    commentHeadercontent.appendChild(mainCommentDi);
  
    // Second Comment Area
    const commentMainContainer2= document.createElement("div");
    commentMainContainer2.classList.add("comment__maincontainer");
    commentSection.appendChild(commentMainContainer2);
  
    const commentContent2 = document.createElement("div");
    commentContent2.classList.add("comment__contents");
    commentMainContainer2.appendChild(commentContent2);
  
    const commentImagecontent2 = document.createElement("div");
    commentImagecontent2.classList.add("comment__imagecontent");
    commentContent2.appendChild(commentImagecontent2);
  
    const commentHeadercontent2 = document.createElement("div");
    commentHeadercontent2.classList.add("comment__headercontent");
    commentContent2.appendChild(commentHeadercontent2);
  
    const commentSbfw2 = document.createElement("div");
    commentSbfw2.classList.add("comment__sbfw");
    commentHeadercontent2.appendChild(commentSbfw2);
  
    const commentName2 = document.createElement("div");
    commentName2.classList.add("comment__name");
    commentName2.innerHTML = commentArray[1].name;
    commentSbfw2.appendChild(commentName2);
  
    const commentDate2 = document.createElement("div");
    commentDate2.classList.add("comment__date");
    commentDate2.innerHTML = commentArray[1].date;
    commentSbfw2.appendChild(commentDate2);
  
    const mainCommentDi2 = document.createElement("div");
    mainCommentDi2 .classList.add("main_comment_di");
    mainCommentDi2.innerHTML = commentArray[1].comment;
    commentHeadercontent2.appendChild(mainCommentDi2);
    //Third Comment Area
    const commentMainContainer3= document.createElement("div");
    commentMainContainer3.classList.add("comment__maincontainer");
    commentSection.appendChild(commentMainContainer3);
  
    const commentContent3 = document.createElement("div");
    commentContent3.classList.add("comment__contents");
    commentMainContainer3.appendChild(commentContent3);
  
    const commentImagecontent3 = document.createElement("div");
    commentImagecontent3.classList.add("comment__imagecontent");
    commentContent3.appendChild(commentImagecontent3);
  
    const commentHeadercontent3 = document.createElement("div");
    commentHeadercontent3.classList.add("comment__headercontent");
    commentContent3.appendChild(commentHeadercontent3);
  
    const commentSbfw3 = document.createElement("div");
    commentSbfw3.classList.add("comment__sbfw");
    commentHeadercontent3.appendChild(commentSbfw3);
  
    const commentName3 = document.createElement("div");
    commentName3.classList.add("comment__name");
    commentName3.innerHTML = commentArray[2].name;
    commentSbfw3.appendChild(commentName3);
  
    const commentDate3 = document.createElement("div");
    commentDate3.classList.add("comment__date");
    commentDate3.innerHTML = commentArray[2].date;
    commentSbfw3.appendChild(commentDate3);
  
    const mainCommentDi3 = document.createElement("div");
    mainCommentDi3 .classList.add("main_comment_di");
    mainCommentDi3.innerHTML = commentArray[2].comment;
    commentHeadercontent3.appendChild(mainCommentDi3);
  
  // When the Comment Button is Clicked
  form.addEventListener("submit", (event) => {
   
  //Creation of Date 
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
  // Aggrgating the Date i.e. day, month, and year in a single variable
      let currentDate = `${day}/${month}/${year}`;
      console.log(currentDate); 
  // Preventing Automatic Reload After Comment Button is Clicked
      event.preventDefault();
  //Getting the values from the user and saving it in variables
      const name = event.target.name.value;
      const comment = event.target.comment.value;
      
  //Structuring and Saving The User Comments  in the Comment Array 
    console.log(`Your Name is ${name}`);
    console.log(`Your Comment is ${comment}`);
    commentArray.push({name:`${name}`, date: `${currentDate}`, comment:`${comment}`});
    console.log(commentArray);
  
  //Displaying User Comment on the Webpage
    let arrayLength = commentArray.length -1;
console.log(arrayLength)
    if (arrayLength ===3){
      // First Comment Row
      commentName.innerHTML = commentArray[arrayLength].name;
      commentDate.innerHTML = commentArray[arrayLength].date;
      mainCommentDi.innerHTML= commentArray[arrayLength].comment;
  
    // Second Comment Row
      commentName2.innerHTML = commentArray[arrayLength-3].name;
      commentDate2.innerHTML = commentArray[arrayLength-3].date;
      mainCommentDi2.innerHTML= commentArray[arrayLength-3].comment;

     // Third Comment Row
     commentName3.innerHTML = commentArray[arrayLength-2].name;
     commentDate3.innerHTML = commentArray[arrayLength-2].date;
     mainCommentDi3.innerHTML= commentArray[arrayLength-2].comment;
    
    }
    else if (arrayLength ===4){
      // First Comment Row
      commentName.innerHTML = commentArray[arrayLength].name;
      commentDate.innerHTML = commentArray[arrayLength].date;
      mainCommentDi.innerHTML= commentArray[arrayLength].comment;
  
    // Second Comment Row
      commentName2.innerHTML = commentArray[arrayLength-1].name;
      commentDate2.innerHTML = commentArray[arrayLength-1].date;
      mainCommentDi2.innerHTML= commentArray[arrayLength-1].comment;

     // Third Comment Row
     commentName3.innerHTML = commentArray[arrayLength-4].name;
     commentDate3.innerHTML = commentArray[arrayLength-4].date;
     mainCommentDi3.innerHTML= commentArray[arrayLength-4].comment;
    
    }
    else {
  // Third Comment Row
    commentName3.innerHTML = commentArray[arrayLength-2].name;
    commentDate3.innerHTML = commentArray[arrayLength-2].date;
    mainCommentDi3.innerHTML= commentArray[arrayLength-2].comment;
  // Second Comment Row
    commentName2.innerHTML = commentArray[arrayLength-1].name;
    commentDate2.innerHTML = commentArray[arrayLength-1].date;
    mainCommentDi2.innerHTML= commentArray[arrayLength-1].comment;
  // First Comment Row
    commentName.innerHTML = commentArray[arrayLength].name;
    commentDate.innerHTML = commentArray[arrayLength].date;
    mainCommentDi.innerHTML= commentArray[arrayLength].comment;
    }
  
  //Clearing the Form After User Submits Comments
    document.getElementById('inputtext__name').value = "";
    document.getElementById('textarea__comment').value = "";
    
  
    });  
   
  
  });