/*PLEASE DO NOT COPY OR CHANGE THIS CODE*/

filterSelection("all");

function filterSelection(c) {
  let x = document.getElementsByClassName("news-card"); //aik array hoga x, length=5 ka
  // console.log("Array x", x);
  if (c == "all") { //agar c equal to "all" ho to
    c = ""; //c ko empty k equal ker do kyu k all ka function already call ho chuka uper
  }
  for (let i = 0; i < x.length; i++) {
    removenews(x[i], "show"); //RFS
    if (x[i].className.indexOf(c) > -1) {
      addnews(x[i], "show");
    }
  }
}

function addnews(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  //console.log("arr1",arr1);
  arr2 = name.split(" "); //RFS
  //console.log("arr2",arr2);
  for (let i = 0; i < arr2.length; i++) {

    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removenews(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" "); //RFS
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
      //console.log( "arr2[i]", arr2[i] );  
    }
  }
  element.className = arr1.join(" ");
}

/**********************************************Tesla*************************************************** */
const key = "0934ce4db1434b3aa30737ccb1f0d32e";
const base = "https://newsapi.org/";

let query = "tesla";
let sortBy1 = "description";

fetch(`${base}v2/everything?q=${query}&sortBy=${sortBy1}&apiKey=${key}`)
  .then(function (response) {
    return response.json();
  }).then(function (newsArray) {
    console.log('All News', newsArray);


    document.getElementsByClassName("news-card")[0].innerHTML =
      `<p>
      ${newsArray.articles[0].title}
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample0" aria-expanded="false" aria-controls="collapseWidthExample">Expand
      </button>
    </p>
    <div>
      <div class="collapse collapse-horizontal" id="collapseWidthExample0">
        <div class="card card-body" style="width: 600px;">
        ${newsArray.articles[0].description}
        <a href="${newsArray.articles[0].url}" target="_blank">Read More Here</a>
        </div>
      </div>
    </div>`

    document.getElementsByClassName("news-card")[1].innerHTML =
      `<p>
    ${newsArray.articles[1].title}
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample">Expand
    </button>
  </p>
  <div>
    <div class="collapse collapse-horizontal" id="collapseWidthExample1">
      <div class="card card-body" style="width: 600px;">
      ${newsArray.articles[1].description}
      <a href="${newsArray.articles[1].url}" target="_blank">Read More Here</a>
      </div>
    </div>
  </div>`
  });
/***********************************************TechCrunch************************************************************ */

let query2 = "techcrunch";

fetch(`${base}v2/top-headlines?sources=${query2}&apiKey=${key}`)
  .then(function (response) {
    return response.json();
  }).then(function (newsArray) {
    console.log('All News', newsArray);

    document.getElementsByClassName("news-card")[2].innerHTML =
      `<p>
  ${newsArray.articles[2].title}
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample">Expand
  </button>
</p>
<div>
  <div class="collapse collapse-horizontal" id="collapseWidthExample2">
    <div class="card card-body" style="width: 600px;">
    ${newsArray.articles[2].description}
    <a href="${newsArray.articles[2].url}" target="_blank">Read More Here</a>
    </div>
  </div>
</div>`
  });
/***********************************************Apple*********************************************************** */
let query3 = "apple";
let sortBy2 = "popularity";

fetch(`${base}v2/everything?q=${query3}&sortBy=${sortBy2}&apiKey=${key}`)
  .then(function (response) {
    return response.json();
  }).then(function (newsArray) {
    console.log('All News', newsArray);

    document.getElementsByClassName("news-card")[3].innerHTML =
      `<p>
${newsArray.articles[3].title}
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3" aria-expanded="false" aria-controls="collapseWidthExample">Expand
</button>
</p>
<div>
<div class="collapse collapse-horizontal" id="collapseWidthExample3">
  <div class="card card-body" style="width: 600px;">
  ${newsArray.articles[3].description}
  <a href="${newsArray.articles[3].url}" target="_blank">Read More Here</a>
  </div>
</div>
</div>`

    document.getElementsByClassName("news-card")[4].innerHTML =
      `<p>
${newsArray.articles[4].title}
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample4" aria-expanded="false" aria-controls="collapseWidthExample">Expand
</button>
</p>
<div>
<div class="collapse collapse-horizontal" id="collapseWidthExample4">
  <div class="card card-body" style="width: 600px;">
  ${newsArray.articles[4].description}
  <a href="${newsArray.articles[4].url}" target="_blank">Read More Here</a>
  </div>
</div>
</div>`
  });