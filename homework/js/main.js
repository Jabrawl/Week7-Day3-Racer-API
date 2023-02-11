let form = document.querySelector('#formId')
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const getData = async (year, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

const DOM_Elements = {
    driver_api: '.driver-api'
}


// Creation of the Ranger List HTML

const headline = () => {
    const html = `<tr class="headline">
      <td class="headline-pos">Position</td>
      <td class="headline-nam">Name</td>    
      <td class="headline-dri">Nationality</td>
      <td class="headline-spo">Sponsor</td>
      <td class="headline-poi">Points</td>
    </tr>`;
    document.querySelector(DOM_Elements.driver_api).insertAdjacentHTML('beforeend', html)
}

const create_list = (id, position, name, nationality, sponsor, points) => {
    const html = `<tr class="driver-stats" id=${id}>
      <td class="driver">${position}</td>
      <td class="driver">${name}</td>    
      <td class="driver">${nationality}</td>
      <td class="driver">${sponsor}</td>
      <td class="driver">${points}</td>
    </tr>`;
    document.querySelector(DOM_Elements.driver_api).insertAdjacentHTML('beforeend', html)
}

const load_standings = async () => {
    let year_form = document.querySelector('#year-form').value
    let round_form = document.querySelector('#round-form').value


    document.querySelector('.driver-api').innerHTML = ''
    headline()
    const drivers = await getData(year_form, round_form);
    drivers.forEach(element => create_list(element.Driver.driverId, element.position, element.Driver.givenName, element.Driver.nationality, element.Constructors[0].name, element.points))
}
