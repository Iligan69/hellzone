var contents = [
    {
        cAuthor: 'dragonslayerwtf',
        cCap: 'screaming...',
        cImage: 'videos/aaah.mp4'
    },
    {
        cAuthor: 'ilovedotabutihatepldt',
        cCap: 'paminaw diri pldt',
        cImage: 'videos/abandon.mp4'
    },
    {
        cAuthor: 'editor121',
        cCap: '',
        cImage: 'videos/ah y4w4.mp4'
    },
    {
        cAuthor: 'NaZi',
        cCap: 'Wer auch immer das gemacht hat, kommt ins Konzentrationslager',
        cImage: 'videos/demonitization.mp4'
    },
    {
        cAuthor: 'howtobasics101',
        cCap: 'hahaha',
        cImage: 'videos/fireflies.mp4'
    },
    {
        cAuthor: 'PH Philippines',
        cCap: 'NEW CONTENT!!',
        cImage: 'videos/PHK.mp4'
    },   
    {
        cAuthor: 'editor121',
        cCap: '',
        cImage: 'videos/ah yawa.mp4'
    },
    {
        cAuthor: 'Rodrico Duterte, PRD',
        cCap: 'Epekto ng druga...',
        cImage: 'videos/uwu hubog.mp4'
    }

]

var maincontent = document.getElementById("homepagefeedcontainer");

contents.forEach(function(cont) {
    console.log(cont.cImage);
    var cContainer = document.createElement("div");
    cContainer.classList.add('c-Container')

    cContainer.innerHTML =  "<p>by " + cont.cAuthor + "</p>" +
    "<h3>" + cont.cCap + "</h3>" + 
    "<video controls> <source src='" + cont.cImage + "' type='video/mp4'></video>";

    maincontent.appendChild(cContainer);
})