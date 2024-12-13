var contents = [
    {
        cAuthor: 'flamelover',
        cCap: '',
        cImage: 'hot/fire.jpg'
    },
    {
        cAuthor: 'Memelover2',
        cCap: 'this if fine meme',
        cImage: 'hot/fine.jpg'
    },
    {
        cAuthor: 'flamelover',
        cCap: '',
        cImage: 'hot/fire2.jpg'
    },
    {
        cAuthor: 'flamelover',
        cCap: '',
        cImage: 'hot/flame1.jpg'
    },
    {
        cAuthor: 'justagirl_',
        cCap: 'when i spot a spider in the house',
        cImage: 'hot/burn.jpg'
    },
    {
        cAuthor: 'flamelover',
        cCap: '',
        cImage: 'hot/flame2.png'
    },
    {
        cAuthor: 'John D. Golagat',
        cCap: 'akong idol.',
        cImage: 'hot/ghostrider.jpg'
    },
    {
        cAuthor: 'flamelover',
        cCap: '',
        cImage: 'hot/hell.jpg'
    },
    {
        cAuthor: 'flamelover',
        cCap: '',
        cImage: 'hot/hell1.jpg'
    },
    {
        cAuthor: 'John D. Golagat',
        cCap: 'hoooo...',
        cImage: 'hot/notcool.jpg'
    },
    {
        cAuthor: 'AI Generated Nonsense',
        cCap: '',
        cImage: 'hot/hot.jpg'
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