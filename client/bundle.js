(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function luckyButton() {
  document
      .getElementById("feeling-lucky-btn")
      .addEventListener("click", async (e) => {
          e.preventDefault();
          const query = document.getElementById("search").value.trim();
          let url = `http://localhost:3000/lucky/${query}`;
          console.log(url);
          await fetch(url)
              .then((r) => r.json())
              .then((content) => {
                  window.location.href = content.body.url;
              })
              .catch((err) => {
                  console.log(err);
              });
      });
}

luckyButton();

},{}],2:[function(require,module,exports){
function searchButton() {
    document
        .getElementById("google-search-btn")
        .addEventListener("click", async (e) => {
            e.preventDefault();
            const query = document.getElementById("search").value.trim();
            let url = `http://localhost:3000/search/${query}`;
            console.log(url);
            await fetch(url)
                .then((r) => r.json())
                .then((content) => {
                    console.log(content.body);
                    // window.location.href = "http://localhost:8000/searchResults.html"
                    // document.addEventListener("DOMContentLoaded", parseData);
                    parseData(content.body);
                })
                .catch(console.warn);
        });
}

searchButton();

function parseData(data) {
    data.forEach((apiData) => loadSearchPage(apiData));
}

function loadSearchPage(apiData) {
    // this query selector gets the div on google homepage
    const allResults = document.querySelector("#result");

    // this query selector gets the div on search results page
    // const allResults = document.querySelector("#results");
    const resultDiv = document.createElement("div");
    resultDiv.className = "result-box";
    // link
    let link = document.createElement("a");
    let resultLink = apiData.url;
    link.setAttribute("href", resultLink);
    // title
    let textContent = `<h3>${apiData.title}</h3>`;
    link.innerHTML = resultLink + textContent;
    // description
    let description = document.createElement("p");
    description.textContent = result.snippet;

    resultDiv.append(link);
    resultDiv.append(description);
    allResults.append(resultDiv);
}

},{}]},{},[2,1]);
