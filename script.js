function openPortfolio() {
    console.log("Portfolio Opening")
    document.getElementById("homePage").style.display = "none";
    document.getElementById("portfolios").style.display = "block";
    console.log("Portfolio Opened")
}

function closePortfolio() {
    console.log("Portfolio Closing")
    document.getElementById("homePage").style.display = "block";
    document.getElementById("portfolios").style.display = "none";
    console.log("Portfolio Closed")

    // Close every part
    document.getElementById("urbainPart").style.display = "none";
    document.getElementById("astroPart").style.display = "none";
    document.getElementById("normandiePart").style.display = "none";
    document.getElementById("naturePart").style.display = "none";
    document.getElementById("exploPart").style.display = "none";
    document.getElementById("chateauxPart").style.display = "none";
}


function openUrbain() {
    document.getElementById("urbainPart").style.display = "block";
}

function openAstro() {
    document.getElementById("astroPart").style.display = "block";
}

function openNormandie() {
    document.getElementById("normandiePart").style.display = "block";
}

function openNature() {
    document.getElementById("naturePart").style.display = "block";
}

function openExplo() {
    document.getElementById("exploPart").style.display = "block";
}

function openChateaux() {
    document.getElementById("chateauxPart").style.display = "block";
}
