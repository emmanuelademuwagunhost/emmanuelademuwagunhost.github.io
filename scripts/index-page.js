import BandSiteApi from "./band-site-api.js";
const apiKey ="77d4b93f-600d-4b30-9267-31ae6d9db9c0"
const getComments = new BandSiteApi(apiKey);
const postComment = new BandSiteApi(apiKey);

const commentArray = await getComments.getComment()
for (let i=0; i< commentArray.length; i++){
    getCommentHtml(i);
}
//Place the Objects Using DOM Manipulation
function getCommentHtml(i){

const newTimeStamp = timeStampConversion(commentArray[i].timestamp)
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
commentName.innerHTML = commentArray[i].name;
commentSbfw.appendChild(commentName);
const commentDate = document.createElement("div");
commentDate.classList.add("comment__date");
commentDate.innerHTML = newTimeStamp;
commentSbfw.appendChild(commentDate);
const mainCommentDi = document.createElement("div");
mainCommentDi .classList.add("main_comment_di");
mainCommentDi.innerHTML = commentArray[i].comment;
commentHeadercontent.appendChild(mainCommentDi);

return commentHeadercontent;
}
//What Happens When The Comment Button is Clicked
const form = document.querySelector(".comment_inputpage");
form.addEventListener("submit", (event) => {
    // Preventing Automatic Reload After Comment Button is Clicked
    event.preventDefault();
    // Get Time Stamp 
    const currentTimestamp = new Date().getTime();
    //Getting the values from the user and saving it in variables
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    commentArray.push({name:`${name}`, comment:`${comment}`, timestamp:currentTimestamp});
    const latestComment = {name:`${name}`, comment:`${comment}`};
    postComment.postComment(latestComment);
    console.log(latestComment);
    getCommentHtml(commentArray.length -1);
    //Clear The Comment Box
    document.querySelector(".comment__area").innerHTML = ""
    // commentArray = await getComments.getComment();
    commentArray.sort((a, b) => b.timestamp - a.timestamp);
    //Run Through The Initial Array
    for (let i=0; i< commentArray.length; i++){
        getCommentHtml(i);
    }
});
console.log(commentArray)
// Fuction to get live timestamp
function getLiveTimeStamp(){
    let currentTimestamp = new Date().getTime();
    return currentTimestamp
}
// The timestamp Conversion Function
function timeStampConversion(timestamp){
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let convertedTime = `${month}/${day}/${year}`;
    return convertedTime;
}