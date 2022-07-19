const url='https://rickandmortyapi.com/api/character/'
fetch(url)
.then(response=>response.json())
.then(dato=>{
    console.log(dato)
    let elementos= document.getElementById('elemento')
    elementos.innerHTML=  dato.results.map(
        dato=>`<p> ${dato.name}</p> <img src='${dato.image}'>`
    )
})
.catch(error => console.log(error))