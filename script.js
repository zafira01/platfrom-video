function stars(rating){
let full=Math.round(rating/2)
return "⭐".repeat(full)
}

let films=[

// ACTION
{title:"Avengers Endgame",cat:"Action",rating:8.4,trailer:"TcMBFSGVi1c"},
{title:"Avengers Infinity War",cat:"Action",rating:8.4,trailer:"6ZfuNTqbHE8"},
{title:"John Wick",cat:"Action",rating:7.4,trailer:"C0BMx-qxsP4"},
{title:"Fast X",cat:"Action",rating:6.5,trailer:"aOb15GVFZxU"},
{title:"Deadpool",cat:"Action",rating:8.0,trailer:"Xithigfg7dA"},
{title:"Mission Impossible",cat:"Action",rating:8.2,trailer:"avz06PDqDbM"},

// SCI-FI
{title:"Interstellar",cat:"Sci-Fi",rating:8.7,trailer:"YoHD9XEInc0"},
{title:"Inception",cat:"Sci-Fi",rating:8.8,trailer:"zSWdZVtXT7E"},
{title:"The Matrix",cat:"Sci-Fi",rating:8.7,trailer:"m8e-FF8MsqU"},
{title:"Transformers",cat:"Sci-Fi",rating:7.0,trailer:"d96cjJhvlMA"},
{title:"Dune",cat:"Sci-Fi",rating:8.1,trailer:"n9xhJrPXop4"},

// FANTASY
{title:"Avatar",cat:"Fantasy",rating:7.8,trailer:"u3V5KDHRQvk"},
{title:"Doctor Strange",cat:"Fantasy",rating:7.5,trailer:"HSzx-zryEgM"},
{title:"Harry Potter",cat:"Fantasy",rating:7.6,trailer:"VyHV0BRtdxo"},
{title:"Lord of the Rings",cat:"Fantasy",rating:8.8,trailer:"V75dMMIW2B4"},
{title:"Aladdin",cat:"Fantasy",rating:8.0,trailer:"eGLSPyGszjo"},
{title:"Barbie",cat:"Fantasy",rating:7.0,trailer:"pBk4NYhWNMM"},

// DRAMA
{title:"Oppenheimer",cat:"Drama",rating:8.5,trailer:"uYPbbksJxIg"},
{title:"Titanic",cat:"Drama",rating:7.9,trailer:"kVrqfYjkTdQ"},
{title:"Forrest Gump",cat:"Drama",rating:8.8,trailer:"bLvqoHBptjg"},
{title:"Joker",cat:"Drama",rating:8.4,trailer:"zAGVQLHvwOY"},

// ANIMATION
{title:"Frozen",cat:"Animation",rating:7.4,trailer:"TbQm5doF_Uc"},
{title:"Zootopia",cat:"Animation",rating:8.0,trailer:"jWM0ct-OLsM"},
{title:"Coco",cat:"Animation",rating:8.4,trailer:"Rvr68u6k5sI"},
{title:"Inside Out",cat:"Animation",rating:8.1,trailer:"yRUAzGQ3nSY"}

]

// CONTAINER
let container=document.getElementById("filmContainer")

// TRENDING
let trendingTitle=document.createElement("div")
trendingTitle.className="catTitle"
trendingTitle.innerText="🔥 Trending Now"

let trendingGrid=document.createElement("div")
trendingGrid.className="movies"

container.appendChild(trendingTitle)
container.appendChild(trendingGrid)

films.slice(0,6).forEach(film=>{
createMovie(film,trendingGrid)
})

// CATEGORY
let categories=["Action","Sci-Fi","Fantasy","Animation","Drama"]

categories.forEach(cat=>{
let title=document.createElement("div")
title.className="catTitle"
title.innerText=cat

let grid=document.createElement("div")
grid.className="movies"

container.appendChild(title)
container.appendChild(grid)

films.filter(f=>f.cat===cat).forEach(film=>{
createMovie(film,grid)
})
})

// CREATE MOVIE
function createMovie(film,grid){
let poster="https://img.youtube.com/vi/"+film.trailer+"/maxresdefault.jpg"

let div=document.createElement("div")
div.className="movie"

div.innerHTML=`
<div class="rating">${stars(film.rating)} (${film.rating})</div>
<div class="cat">${film.cat}</div>
<img src="${poster}">
<div class="title">${film.title}</div>
`

div.onclick=()=>play(film.trailer)

grid.appendChild(div)
}

// PLAYER
function play(id){
let player=document.getElementById("player")
player.src="https://www.youtube.com/embed/"+id+"?autoplay=1"
document.querySelector(".player").classList.add("fullscreen")
document.getElementById("backBtn").style.display="block"
document.getElementById("filmContainer").style.display="none"
}

function back(){
document.querySelector(".player").classList.remove("fullscreen")
document.getElementById("backBtn").style.display="none"
document.getElementById("filmContainer").style.display="block"
}

// SEARCH
document.getElementById("search").addEventListener("keyup",function(){
let value=this.value.toLowerCase()
let movie=document.querySelectorAll(".movie")

movie.forEach(m=>{
let title=m.innerText.toLowerCase()
m.style.display = title.includes(value) ? "block" : "none"
})
})