//JSON city stats home page
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      
        let card1 = document.createElement('section');
        let h21 = document.createElement('h2');
        let h31 = document.createElement('h3');
        let year1 = document.createElement('p');
        let pop1 = document.createElement('p');
        let rain1 = document.createElement('p');
        let image1 = document.createElement('img');

        h21.textContent = towns[6].name;
        h31.textContent = towns[6].motto;
        year1.textContent = 'Year Founded: ' + towns[6].yearFounded;
        pop1.textContent = 'Population: ' + towns[6].currentPopulation;
        rain1.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;
        image1.setAttribute('src', 'images/' + towns[6].photo);
        image1.setAttribute('alt', 'Preston');
        image1.setAttribute('class', 'picture');

        card1.appendChild(image1);
        card1.appendChild(h21);
        card1.appendChild(h31);
        card1.appendChild(year1);
        card1.appendChild(pop1);
        card1.appendChild(rain1);
        document.querySelector('div.home-city-grid').appendChild(card1);

        let card2 = document.createElement('section');
        let h22 = document.createElement('h2');
        let h32 = document.createElement('h3');
        let year2 = document.createElement('p');
        let pop2 = document.createElement('p');
        let rain2 = document.createElement('p');
        let image2 = document.createElement('img');

        h22.textContent = towns[0].name;
        h32.textContent = towns[0].motto;
        year2.textContent = 'Year Founded: ' + towns[0].yearFounded;
        pop2.textContent = 'Population: ' + towns[0].currentPopulation;
        rain2.textContent = 'Annual Rain Fall: ' + towns[0].averageRainfall;
        image2.setAttribute('src', 'images/' + towns[0].photo);
        image2.setAttribute('alt', 'Soda Springs');
        image2.setAttribute('class', 'picture');

        card2.appendChild(image2);
        card2.appendChild(h22);
        card2.appendChild(h32);
        card2.appendChild(year2);
        card2.appendChild(pop2);
        card2.appendChild(rain2);
        
        document.querySelector('div.home-city-grid').appendChild(card2);

        let card3 = document.createElement('section');
        let h23 = document.createElement('h2');
        let h33 = document.createElement('h3');
        let year3 = document.createElement('p');
        let pop3 = document.createElement('p');
        let rain3 = document.createElement('p');
        let image3 = document.createElement('img');

        h23.textContent = towns[2].name;
        h33.textContent = towns[2].motto;
        year3.textContent = 'Year Founded: ' + towns[2].yearFounded;
        pop3.textContent = 'Population: ' + towns[2].currentPopulation;
        rain3.textContent = 'Annual Rain Fall: ' + towns[2].averageRainfall;
        image3.setAttribute('src', 'images/' + towns[2].photo);
        image3.setAttribute('alt', 'Fish Haven');
        image3.setAttribute('class', 'picture');

        card3.appendChild(image3);
        card3.appendChild(h23);
        card3.appendChild(h33);
        card3.appendChild(year3);
        card3.appendChild(pop3);
        card3.appendChild(rain3);
        
        document.querySelector('div.home-city-grid').appendChild(card3);
      
    });