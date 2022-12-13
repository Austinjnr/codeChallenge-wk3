// URLS
//1. Random meal
const films = 'http://localhost:3000/films'

    
    const createMovie1 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = documentElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.elementFromPoint('div')
        imgDiv.classList.add('col-6')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('col-6', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)


        imgDiv.appendChild(movieImg)


        rowDiv.appendChild(imgDiv)
        rowDiv,appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    document.getElementById('movie1').appendChild(
        createMovie1('https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg', 'js', 'a')
    )

