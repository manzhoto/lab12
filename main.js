console.log("Hello, World!");


document.body.removeChild(document.getElementsByTagName("h1")[0])

let h1 = document.createElement("h1");
h1.innerHTML = "Lab12 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);

let hr = document.createElement("hr");
document.body.appendChild(hr);

let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

let p = document.createElement("p");
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques: document.body.appendChild(p)";
h2.style.color = "red";
document.body.appendChild(p);

let ul = document.createElement("ul");

let li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "find elements in the DOM <b>(5 points)</b>;"
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "purple";
li.innerHTML = "create/add/remove elements <b>(5 points)</b>;"
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "change content of the elements <b>(5 points)</b>;"
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "purple";
li.innerHTML = "change styles of the elements <b>(5 points)</b>;"
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "change attributes of the elements <b>(5 points)</b>;"
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "purple";
li.innerHTML = "change classes of the elements <b>(5 points)</b>."
ul.appendChild(li);

document.body.appendChild(ul);

p = document.createElement("p");
p.innerHTML = 'Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a href="https://github.com/yessen/nu_web_programming/tree/main/week12">link.</a>';
h2.style.color = "black";
document.body.appendChild(p);

hr = document.createElement("hr");
document.body.appendChild(hr);

// last block

h2 = document.createElement("h2");
h2.innerHTML = "Submission";
h2.style.color = "red";
document.body.appendChild(h2);

ul = document.createElement("ul");

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "Create a new repository on Github, named lab12<b>(1 point)</b>;"
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "purple";
li.innerHTML = "Clone this repository to your local machine and work inside it."
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point)."
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "purple";
li.innerHTML = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point)."
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "Link this main.js file to your index.html file (Note: place your script at the end of the body section)."
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "purple";
li.innerHTML = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points)."
ul.appendChild(li);

li = document.createElement("li");
li.setAttribute('class','item');
li.style.color = "green";
li.innerHTML = "After you finish your work, submit it to the Github (2 points)."
ul.appendChild(li);


document.body.appendChild(ul);



