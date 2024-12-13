var contents = [
    {
        cAuthor: 'Bitlog 91270',
        cCap: 'hahaha',
        cImage: 'images/500.jpg'
    },
    {
        cAuthor: 'Tito Badang',
        cCap: 'chilax lang...',
        cImage: 'images/beer.jpg'
    },
    {
        cAuthor: 'Burat, Samar News',
        cCap: 'Boto na kayo!',
        cImage: 'images/bobongburat.jpg'
    },
    {
        cAuthor: 'Bitlog 91270',
        cCap: 'Davao',
        cImage: 'images/chikenvsdurian.jpg'
    },
    {
        cAuthor: 'Apollo C. Quiboloy',
        cCap: 'with my future wives <3',
        cImage: 'images/childlover.jpg'
    },
    {
        cAuthor: 'Tito Badang',
        cCap: 'chilax lang pt. 2...',
        cImage: 'images/eatwell.jpg'
    },
    {
        cAuthor: 'iFunny.co',
        cCap: 'LOL! XD',
        cImage: 'images/godsaid.jpg'
    },
    {
        cAuthor: 'ogomitlog',
        cCap: '',
        cImage: 'images/pixels.webp'
    },
    {
        cAuthor: 'Vic Sotto',
        cCap: 'pwede na...',
        cImage: 'images/pwedena.jpg'
    },
    {
        cAuthor: 'Tito Badang',
        cCap: 'chilax lang pt.3 ...',
        cImage: 'images/sisig.jpg'
    },
    {
        cAuthor: 'Silka Papaya',
        cCap: '69 pesos lang!',
        cImage: 'images/sponsor.jpg'
    },
    {
        cAuthor: 'KarlTzy',
        cCap: 'Happy Novena everyone!',
        cImage: 'images/stobilee.jpg'
    },
    {
        cAuthor: 'Jun Ray B. Iligan',
        cCap: 'mangaon ta goys... hahaha',
        cImage: 'images/ulam.jpg'
    },
    {
        cAuthor: 'Nanay Dionesia',
        cCap: 'suntukan kayo ni manny... paks!',
        cImage: 'images/undertaker.jpg'
    },
    {
        cAuthor: 'Bitlog 91270',
        cCap: '',
        cImage: 'images/utg-quib.jpg'
    },
    {
        cAuthor: 'Roronoa Zoro',
        cCap: 'training to become the greatest swordsman, prepare yourself, Mihawk!',
        cImage: 'images/zoroirl.jpg'
    },
    {
        cAuthor: 'naruto_fan699420',
        cCap: 'naruto sage mode cosplay by vhong navarro?? <33',
        cImage: 'images/1_vhong_-_copy.jpg'
    },
    {
        cAuthor: 'Artificial Intelligence',
        cCap: 'AI will soon take over the world.',
        cImage: 'images/ai approved.jpg'
    },
    {
        cAuthor: 'Among us',
        cCap: 'NEW GAMEPLAY!',
        cImage: 'images/amogus.jpg'
    },
    {
        cAuthor: 'Apple IPhone',
        cCap: 'New Emoji: bisaya',
        cImage: 'images/bisaya.jpg'
    },
    {
        cAuthor: 'CallMeCarson',
        cCap: 'jwu',
        cImage: 'images/carson.png'
    },
    {
        cAuthor: 'Corpse Husband',
        cCap: 'face reveal at 69k!',
        cImage: 'images/corpsehusband.png'
    },
    {
        cAuthor: 'Jane Doe',
        cCap: 'ang sweet ng bf ko <3',
        cImage: 'images/grade 5 age 19.jpg'
    },
    {
        cAuthor: 'Ms. Maria Ainna Butiong',
        cCap: 'Everyone! Notebook for Webtech!',
        cImage: 'images/kardo.jpg'
    },
    {
        cAuthor: 'Riyan D. Macahabal',
        cCap: 'Popol main here...',
        cImage: 'images/popol and riyan.jpg'
    },
    {
        cAuthor: 'Jun Ray B. Iligan',
        cCap: 'merry christmas everyone',
        cImage: 'images/reindog.jpg'
    },
    {
        cAuthor: 'Alden Recharge',
        cCap: 'Inagaw mo sakin si Maine, di mo lang alam, I have two sides',
        cImage: 'images/yuzhong.jpg'
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