
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
<h4 onclick="getInputValue();">Post a Comment</h4>
<input id= "textInput" type="text" placeholder="Comment" >
</div>
<div class="comments">
<h3>Comments</h3>
<span>${content}</span>    
</div>
<table>
<tr>
<th>Comment</th>
<th>Platform</th>
<th>Time Posted</th>
</tr>
<tr>
<td>"Test Comment number 1"</td>
<td>Twitter</td>
<td>12:01pmCST</td>
</tr>
<tr>
<td>"Test Comment number 2"</td>
<td>IG</td>
<td>2:08pmEST</td>
</tr>
<tr>
<td>"Test Comment number 3"</td>
<td>FB</td>
<td>1:53amCST</td>
</tr>
</table>
<div class = "tableDiv">
<div class = "container">
<div class = "comment"></div>
<div class = "platform"></div>
<div class = "time"></div>
</div>
</div>
<ul>
<li>Home</li>   
<li>Auto</li>
</ul>
<div>
<a href="https://www.linkedin.com/in/adam-m-vaughn/" target="_blank">Contact Us Today!</a>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  `;