var contents = [
    {
        cAuthor: "blackbeard",
        cCap: "",
        cImage: "recent/blackbeard.gif"
    },
    {
        cAuthor: "thatsadguy",
        cCap: "",
        cImage: "recent/cryemoji.gif"
    }
    ,
    {
        cAuthor: "Lord Beerus",
        cCap: "orang",
        cImage: "recent/fulloforanges.png"
    },
    {
        cAuthor: "sillycat",
        cCap: "me when hehe",
        cImage: "recent/hehe.jpg"
    },
    {
        cAuthor: "averageITguy",
        cCap: "",
        cImage: "recent/it.jpg"
    },
    {
        cAuthor: "Leonardo Da Vinci",
        cCap: "can't paint something like this",
        cImage: "recent/libamg.jpg"
    },
    {
        cAuthor: "edgyalterego69",
        cCap: "i hate old people",
        cImage: "recent/lion.jpg"
    },
    {
        cAuthor: "Maris Racal",
        cCap: "sumbagay lang mi atong ga kalat sa akong screenshot bi",
        cImage: "recent/myself.jpg"
    },
    {
        cAuthor: "javascripthater",
        cCap: "java = javascript people",
        cImage: "recent/ske.gif"
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