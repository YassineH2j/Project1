var obj;

fetch("./courses.json")
    .then(function (resp) { return resp.json(); })
    .then(function (data) { work(data); })

function work(data) {
    console.log(data);
    let htmlString = "";
    data.forEach(element => {
        htmlString +=
            `<div class="card">
                <div class="imggg">
                    <img src="${element.src}" alt="">
                </div>
                <h3>${element.text}</h3>
                <p>${element.creator}</p>
                <h3>${element.price}</h3>
            </div>`
    });
    document.getElementById("cardss").innerHTML = htmlString;
}

var search = document.getElementById("btn");
search.addEventListener("click", function (event) {
    event.preventDefault();
    fetch("./courses.json")
        .then(function (resp) { return resp.json(); })
        .then(function (data) { work2(data); })
});

function work2(data) {
    var text = document.getElementById("search").value;
    console.log(data);
    let htmlString = "";
    data.forEach(element => {
        let str = "";
        str =
            `<div class="card">
                <div class="imggg">
                    <img src="${element.src}" alt="">
                </div>
                <h3>${element.text}</h3>
                <p>${element.creator}</p>
                <h3>${element.price}</h3>
            </div>`
            if(str.includes(text)) htmlString += str;
    });
    if(text != ""){
            document.getElementById("id1").innerHTML = "";
            document.getElementById("id2").innerHTML = "";
            document.getElementById("cardss").innerHTML = htmlString;
    } 
}
