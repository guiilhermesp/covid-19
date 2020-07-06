(function () {
    // var covidContainer = document.getElementById("covid-info");
    var btn = document.getElementById("button");

    btn.addEventListener("click", function () {
        this.style.visibility = "hidden";
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.coronaanalytic.com/brazil');
        request.onload = function () {
            var data = JSON.parse(request.responseText);
         renderHtml(data);
        };
        request.send();
    });

    function renderHtml(data) {
        var htmlResult = document.getElementById('covidInfo');
        var list = document.createElement('ul');
        data.values.forEach((el) => {
            var item = document.createElement('li');
            item.innerHTML = `<div class="list">
                <h2 class="states edge">${el.state}</h2>
                <div class="indicadors test">
                    <div>
                        <h2 class="deaths size-number">${el.deaths}</h2>
                        <p class="deaths2">Deaths</p>
                    </div>
                    <div>
                        <h2 class="cases size-number">${el.cases}</h2>
                        <p class="cases2">Cases</p>
                    </div>
                    <div>
                        <h2 class="refuses size-number">${el.refuses}</h2>
                        <p class="refuses">Refuses</p>
                    </div>
                </div>
            </div>`;
            list.appendChild(item);
            item.classList.add('anotherclass');

        });
        htmlResult.appendChild(list);
    };
})();