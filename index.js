const movies = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', () => {


    //create movie-1 element
    const createMovie = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets



        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-2 element
    const createMovie2 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-3 element
    const createMovie3 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-4 element
    const createMovie4 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-5 element
    const createMovie5 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-6 element
    const createMovie6 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-7 element
    const createMovie7 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-8 element
    const createMovie8 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-9 element
    const createMovie9 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-10 element
    const createMovie10 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-11 element
    const createMovie11 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-12 element
    const createMovie12 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-13 element
    const createMovie13 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-14 element
    const createMovie14 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //create movie-15 element
    const createMovie15 = (poster, title, description, runtime, showtime, available_tickets) => {

        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'col-12')

        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('col-4')

        const bodyDiv = document.createElement ('div')
        bodyDiv.classList.add('col-8', 'card-body')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-img')
        movieImg.src = poster

        const movieTitle = document.createElement('h5')
        movieTitle.classList.add('card-title')
        movieTitle.innerText = title

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description

        const movieRuntime = document.createElement('ul')
        movieRuntime.classList.add('list') 
        movieRuntime.innerText = runtime

        const movieShowtime = document.createElement('ul')
        movieShowtime.classList.add('ul')
        movieShowtime.innerText = showtime

        const movieTicketsAvailable = document.createElement('ul')
        movieTicketsAvailable.classList.add('ul')
        movieTicketsAvailable.innerText = available_tickets

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieDescription)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieTicketsAvailable)

        imgDiv.appendChild(movieImg)

        rowDiv.appendChild(imgDiv)
        rowDiv.appendChild(bodyDiv)

        cardDiv.appendChild(rowDiv)

        return cardDiv
    }

    //load movie-1
    const loadMovie = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[0]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-1').appendChild(movieElement)
        })
    }
    loadMovie()
    
    //load movie-2
    const loadMovie2 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[1]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-2').appendChild(movieElement)
        })
    }
    loadMovie2()

    //load movie-3
    const loadMovie3 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[2]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-3').appendChild(movieElement)
        })
    }
    loadMovie3()

    //load movie-4
    const loadMovie4 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[3]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-4').appendChild(movieElement)
        })
    }
    loadMovie4()

    //load movie-5
    const loadMovie5 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[4]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-5').appendChild(movieElement)
        })
    }
    loadMovie5()

    //load movie-6
    const loadMovie6 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[5]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-6').appendChild(movieElement)
        })
    }
    loadMovie6()

    //load movie-7
    const loadMovie7 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[6]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-7').appendChild(movieElement)
        })
    }
    loadMovie7()

    //load movie-8
    const loadMovie8 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[7]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-8').appendChild(movieElement)
        })
    }
    loadMovie8()

    //load movie-9
    const loadMovie9 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[8]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-9').appendChild(movieElement)
        })
    }
    loadMovie9()

    //load movie-10
    const loadMovie10 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[9]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-10').appendChild(movieElement)
        })
    }
    loadMovie10()

    //load movie-11
    const loadMovie11 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[10]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-10').appendChild(movieElement)
        })
    }
    loadMovie11()

    //load movie-12
    const loadMovie12 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[11]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-12').appendChild(movieElement)
        })
    }
    loadMovie12()

    //load movie-13
    const loadMovie13 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[12]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-13').appendChild(movieElement)
        })
    }
    loadMovie13()

    //load movie-14
    const loadMovie14 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[13]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-14').appendChild(movieElement)
        })
    }
    loadMovie14()

    //load movie-15
    const loadMovie15 = () => {
        fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            const movieData = data[14]
                  const title = movieData.title
                  const description = movieData.description
                  const poster = movieData.poster
                  const runtime= movieData.runtime
                  const showtime = movieData.showtime
                  const available_tickets = movieData.tickets_sold
                  const movieElement = createMovie(poster, title, description, runtime, showtime, available_tickets)
                  document.getElementById('movie-15').appendChild(movieElement)
        })
    }
    loadMovie15()
})