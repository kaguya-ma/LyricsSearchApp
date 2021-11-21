const url = "https://api.lyrics.ovh";


async function searchLyrics(searchTerm) {
    fetch(`${url}/suggest/${searchTerm}`)
        .then(res => res.json())
        .then(data =>  showData(data))
}

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault()

    const searchTerm = document.querySelector("#search").value.trim();

    if(!searchTerm) {
        alert("Please enter song or artist name")

    } else {
        searchLyrics(searchTerm)
    }
})


function showData(data) {
    let listItems = ''
    data.data.forEach(song => {
        console.log(song)
        listItems +=
            `<li>${song.title} <a href="${song.link}">Get lyrics</button></a></li>`
    })
    console.log(listItems)
    document.querySelector("#ul").innerHTML=listItems

}

