var obj;

fetch("./courses.json")
    .then(function (resp) {return resp.json();})
    .then(function (data) {work(data);})

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