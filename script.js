/* typing animation */

new Typed("#typing",{

strings:["Software Developer","Java Programmer","Web Developer"],

typeSpeed:100,

backSpeed:50,

loop:true

})

/* GitHub API projects */

fetch("https://api.github.com/users/yourusername/repos")

.then(res=>res.json())

.then(data=>{

let container=document.getElementById("project-container")

data.slice(0,6).forEach(repo=>{

container.innerHTML+=`

<div class="project-card">

<h3>${repo.name}</h3>

<p>${repo.description || "No description"}</p>

<a href="${repo.html_url}" target="_blank">View Code</a>

</div>

`

})

})

/* scroll animation */

ScrollReveal().reveal('.card',{

delay:200,

distance:'50px',

origin:'bottom'

})

ScrollReveal().reveal('.project-card',{

delay:200,

distance:'50px',

origin:'bottom'

})
