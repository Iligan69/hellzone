var contents = [    
    {
        cAuthor: 'WEBTECH DEVS',
        cCap: 'Enjoy our website!',
        cImage: 'gifs/cool-fun.gif'
    },
    {
        cAuthor: 'CallMeCarson',
        cCap: 'when landlord come to collect rent',
        cImage: 'gifs/carson-green.gif'
    },
    {
        cAuthor: 'Salaryman',
        cCap: '',
        cImage: 'gifs/computer-memes.gif'
    },
    {
        cAuthor: 'Tatay Susing',
        cCap: 'akong kanding',
        cImage: 'gifs/cursed-goat.gif'
    },
    {
        cAuthor: 'LiveLeak',
        cCap: 'Woman gets rammed',
        cImage: 'gifs/duck-liveleak.gif'
    },
    {
        cAuthor: 'sweetboy420',
        cCap: '',
        cImage: 'gifs/give-me-your-liver-liver.gif'
    },
    {
        cAuthor: 'ogomitlog',
        cCap: '',
        cImage: 'gifs/joker-ia-joker-ai.gif'
    },
    {
        cAuthor: 'Mobile Legends',
        cCap: 'Nana revamp in February 31!',
        cImage: 'gifs/onanay-gma.gif'
    },
    {
        cAuthor: 'Elijah990',
        cCap: '',
        cImage: 'gifs/screaming-cat-cat.gif'
    },
    {
        cAuthor: 'SQLLemon',
        cCap: '',
        cImage: 'gifs/skeleton-skeleton-meme.gif'
    },
    {
        cAuthor: 'ItsDaJokah',
        cCap: 'me when im the jokah',
        cImage: 'gifs/joker-ishowspeed.gif'
    },
    {
        cAuthor: 'Squidward',
        cCap: 'hello ladies',
        cImage: 'gifs/squidward.gif'
    },
    {
        cAuthor: 'Princess Marie De Guzman',
        cCap: 'di nyu lng alam kabilang self ko',
        cImage: 'gifs/two-sides.gif'
    },
    {
        cAuthor: 'cholalat',
        cCap: 'wahoooo',
        cImage: 'gifs/wopamgangnamstyleopopopopwopamgangnamstyle-dancing.gif'
    }
]

var maincontent = document.getElementById("homepagefeedcontainer");

contents.forEach(function(cont) {
    console.log(cont.cImage);
    var cContainer = document.createElement("div");
    cContainer.classList.add('c-Container')

    cContainer.innerHTML =  "<p>by " + cont.cAuthor + "</p>" +
    "<h3>" + cont.cCap + "</h3>" + 
    "<img src = '" + cont.cImage + "'>"

    maincontent.appendChild(cContainer);
})