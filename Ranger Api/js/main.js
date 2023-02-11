const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

const DOM_Elements = {
    ranger_list: '.ranger-list'
}


// Creation of the Ranger List HTML
const create_list = (id, name, color, power, season) => {
    const html = `<div class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${id}>
      <li class="list-group-item">${name}</li>
      <li class="list-group-item">${color}</li>    
      <li class="list-group-item">${season}</li>
      <li class="list-group-item">${power}</li>
    </ul>
</div>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}


const load_data = async () => {
    const rangers = await getData();
    rangers.forEach(element => {
    if (element['morp-coin']) create_list(element.id, element.name, element.color, element['morp-coin'], element.season)
    else create_list(element.id, element.name, element.color, element['power-coin'], element.season)})
}

const clear_data = () => {
    document.querySelector('.ranger-list').innerHTML = '';
}

