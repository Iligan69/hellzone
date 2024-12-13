var contents = [
    {
        cAuthor: 'WEBTECH DEVS',
        cCap: 'Enjoy our website!',
        cImage: 'gifs/cool-fun.gif'
    },
    {
        cAuthor: 'Bitlog 91270',
        cCap: '',
        cImage: 'images/utg-quib.jpg'
    },
    {
        cAuthor: 'cholalat',
        cCap: 'wahoooo',
        cImage: 'gifs/wopamgangnamstyleopopopopwopamgangnamstyle-dancing.gif'
    } ,
    {
        cAuthor: 'Among us',
        cCap: 'NEW GAMEPLAY!',
        cImage: 'images/amogus.jpg'
    } ,
    {
        cAuthor: 'Jun Ray B. Iligan',
        cCap: 'merry christmas everyone',
        cImage: 'images/reindog.jpg'
    } ,
    {
        cAuthor: 'Apollo C. Quiboloy',
        cCap: 'with my future wives <3',
        cImage: 'images/childlover.jpg'
    } ,
    {
        cAuthor: 'Elijah990',
        cCap: '',
        cImage: 'gifs/screaming-cat-cat.gif'
    } ,
    {
        cAuthor: 'naruto_fan699420',
        cCap: 'naruto sage mode cosplay by vhong navarro?? <33',
        cImage: 'images/1_vhong_-_copy.jpg'
    } ,
    {
        cAuthor: 'Corpse Husband',
        cCap: 'face reveal at 69k!',
        cImage: 'images/corpsehusband.png'
    } ,
    {
        cAuthor: 'Tatay Susing',
        cCap: 'akong kanding',
        cImage: 'gifs/cursed-goat.gif'
    } ,
    {
        cAuthor: 'Ms. Maria Ainna Butiong',
        cCap: 'Everyone! Notebook for Webtech!',
        cImage: 'images/kardo.jpg'
    } ,
    {
        cAuthor: 'Alden Recharge',
        cCap: 'Inagaw mo sakin si Maine, di mo lang alam, I have two sides',
        cImage: 'images/yuzhong.jpg'
    } ,
    {
        cAuthor: 'CallMeCarson',
        cCap: 'when landlord come to collect rent',
        cImage: 'gifs/carson-green.gif'
    } ,
    {
        cAuthor: 'CallMeCarson',
        cCap: 'jwu',
        cImage: 'images/carson.png'
    } ,
    {
        cAuthor: 'Riyan D. Macahabal',
        cCap: 'Popol main here...',
        cImage: 'images/popol and riyan.jpg'
    } ,
    {
        cAuthor: 'Bitlog 91270',
        cCap: 'hahaha',
        cImage: 'images/500.jpg'
    } ,
    {
        cAuthor: 'Apple IPhone',
        cCap: 'New Emoji: bisaya',
        cImage: 'images/bisaya.jpg'
    } ,
    {
        cAuthor: 'Princess Marie De Guzman',
        cCap: 'di nyu lng alam kabilang self ko',
        cImage: 'gifs/two-sides.gif'
    } ,
    {
        cAuthor: 'sweetboy420',
        cCap: '',
        cImage: 'gifs/give-me-your-liver-liver.gif'
    } ,
    {
        cAuthor: 'Vic Sotto',
        cCap: 'pwede na...',
        cImage: 'images/pwedena.jpg'
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