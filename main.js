
import './style.css';

let content =  document.addEventListener("click", function getInputValue() {
  document.getElementById("textInput").value;
  
    })
    document.querySelector('#app').innerHTML = `

<div class="header">
<h1>AMV Embedded Systems</h1>
<h4>"Automating a better tomorrow"</h4>
</div>

<div class="main">  
<div class="post">
      <h4onclick="getInputValue();">Post a Comment</h4>
      <input id= "textInput" type="text" placeholder="Comment" >
    </div>
    <div class="comments">
    <h3>Comments</h3>
    <span>${content}</span>    
    </div>
</div>
<ul>
<li>Home</li>   
  <li>Auto</li>
  </ul>
  <div>
  <a href="https://www.linkedin.com/in/adam-m-vaughn/" target="_blank">Contact Us Today!</a>
  </div>
  `;
  