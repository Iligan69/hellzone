var contents = [
    {
        cAuthor: 'victormc',
        cCap: 'perhaps he couldve added a sort of context...',
        cImage: 'trending/banned.jpg'
    },
    {
        cAuthor: 'caseoh',
        cCap: '',
        cImage: 'trending/caseoh.jpg'
    },
    {
        cAuthor: 'chill_guyslayer',
        cCap: 'perhaps he couldve added a sort of context...',
        cImage: 'trending/chillsuicidal.jpg'
    },
    {
        cAuthor: 'pentaar_mc',
        cCap: 'coolest professor',
        cImage: 'trending/finger.jpg'
    },
    {
        cAuthor: 'No Context Memes',
        cCap: '',
        cImage: 'trending/knee.jpg'
    },
    {
        cAuthor: 'SQL_Lemon',
        cCap: 'tired...',
        cImage: 'trending/lemon.jpg'
    },
    {
        cAuthor: 'cplover82',
        cCap: '',
        cImage: 'trending/mid.jpg'
    },
    {
        cAuthor: 'maam webtech',
        cCap: '',
        cImage: 'trending/queen.jpg'
    },
    {
        cAuthor: 'Hot Takes',
        cCap: 'How are they even funny?',
        cImage: 'trending/rivals.jpg'
    },
    {
        cAuthor: 'kalibanga_king69',
        cCap: '',
        cImage: 'trending/tummyhurts.jpg'
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