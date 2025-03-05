//1. WINDOW PROMPT (EASY WAY)

//let username;

//username = window.prompt("What's your username");

//you will see the prompt. go ahead and type your username

//console.log(username);//check the console by clicking inspect to see the username in the console

//2. HTML TEXTBOX (PROFESSIONAL WAY)

/*
    1. go to index.html and add the following: 
    <h1>Welcome</h1>
    <label>username:</label>
    <input id="myText"><br><br>
    <button id="mySubmit">submit</button>

    2. add document.
*/

// let username;
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username)
// }

//go ahead and type username then press submit and look in the console to see if the username is stored

/*
    1. lets change the h1 and give it an id in the HTML     
        <h1 id="myH1">Welcome</h1>
    2. let's replace console.log with another document.getElementById
        document.getElementById("myH1").textContent = `Hello ${username}`
    3. Now when you type the username and click submit you should get Hello and the username
        
*/

let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
