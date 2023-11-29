var map = L.map('map').setView([40.04023,-3.611], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Personalizamos los iconos
var greenIcon = L.icon({
    iconUrl: 'images/leaf-green.png',
    shadowUrl: 'images/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'images/leaf-red.png',
    shadowUrl: 'images/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var orangeIcon = L.icon({
    iconUrl: 'images/leaf-orange.png',
    shadowUrl: 'images/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//Entrada por el Jardín de la Reina
var markerReina = L.marker([40.03683,-3.60805], {icon: greenIcon}).addTo(map);
markerReina.bindPopup("Entrada Jardín de la Reina").openPopup();

//Entrada por el Jardín del Parterre
var markerParterre = L.marker([40.03677,-3.60755], {icon: redIcon}).addTo(map);
markerParterre.bindPopup("Entrada Jardín del Parterre").openPopup();

//Fuente de la Boticaria
var markerBoticaria = L.marker([40.03703,-3.60758], {icon: orangeIcon}).addTo(map);
markerBoticaria.bindPopup("Fuente de la Boticaria").openPopup();

//Presa del Palacio
var markerPresa = L.marker([40.03694,-3.60663], {icon: greenIcon}).addTo(map);
markerPresa.bindPopup("Presa del Palacio").openPopup();

//Fuente de Hércules y la Hidra
var markerHercules = L.marker([40.03713,-3.60799], {icon: redIcon}).addTo(map);
markerHercules.bindPopup("Fuente de Hércules y la Hidra").openPopup();

//Jardín de las Estatuas
var markerEstatuas = L.marker([40.03725,-3.60829], {icon: orangeIcon}).addTo(map);
markerEstatuas.bindPopup("Jardín de las Estatuas").openPopup();

//Cascada de las Castañuelas
var markerCascada = L.marker([40.03717,-3.60849], {icon: greenIcon}).addTo(map);
markerCascada.bindPopup("Cascada de las Castañuelas").openPopup();

//Fuente de Apolo
var markerApolo = L.marker([40.03737,-3.60795], {icon: redIcon}).addTo(map);
markerApolo.bindPopup("Fuente de Apolo").openPopup();

//La Galería
var markerGaleria = L.marker([40.03760,-3.60829], {icon: orangeIcon}).addTo(map);
markerGaleria.bindPopup("La Galería").openPopup();

//Fuente del Reloj
var markerReloj = L.marker([40.03780,-3.60864], {icon: greenIcon}).addTo(map);
markerReloj.bindPopup("Fuente del Reloj").openPopup();

//Salón de los Reyes Católicos
var markerReyes = L.marker([40.03850,-3.60802], {icon: redIcon}).addTo(map);
markerReyes.bindPopup("Salón de los Reyes Católicos").openPopup();

//Fuente del Niño de la Espina
var markerNino = L.marker([40.03819,-3.60925], {icon: orangeIcon}).addTo(map);
markerNino.bindPopup("Fuente Niño de la Espina").openPopup();

//La pajarera
var markerPajarera = L.marker([40.03906,-3.61007], {icon: greenIcon}).addTo(map);
markerPajarera.bindPopup("La Pajarera").openPopup();

//Cenador
var markerCenador = L.marker([40.03866,-3.61148], {icon: redIcon}).addTo(map);
markerCenador.bindPopup("El Cenador").openPopup();

//Fuente de Venus
var markerVenus = L.marker([40.03922,-3.61091], {icon: orangeIcon}).addTo(map);
markerVenus.bindPopup("Fuente de Venus").openPopup();

//El Obelisco
var markerObelisco = L.marker([40.03911,-3.61172], {icon: greenIcon}).addTo(map);
markerObelisco.bindPopup("El Obelisco").openPopup();

//Antigüo Puente Verde
var markerPuente = L.marker([40.03850,-3.61116], {icon: redIcon}).addTo(map);
markerPuente.bindPopup("Antigüo Puente Verde").openPopup();

//Mirador del Culón
var markerCulon = L.marker([40.04000,-3.61418], {icon: orangeIcon}).addTo(map);
markerCulon.bindPopup("Mirador del Culón").openPopup();

//Fuente de Neptuno
var markerNeptuno = L.marker([40.04012,-3.61343], {icon: greenIcon}).addTo(map);
markerNeptuno.bindPopup("Fuente de Neptuno").openPopup();

//Fuente de Baco
var markerBaco = L.marker([40.04035,-3.61270], {icon: redIcon}).addTo(map);
markerBaco.bindPopup("Fuente de Baco").openPopup();

//El Rosedal
var markerRosedal = L.marker([40.04006,-3.61143], {icon: orangeIcon}).addTo(map);
markerRosedal.bindPopup("El Rosedal").openPopup();

//Fuente de Diana
var markerDiana = L.marker([40.04028,-3.61071], {icon: greenIcon}).addTo(map);
markerDiana.bindPopup("Fuente de Diana").openPopup();

//Plátanos de la Tronca
var markerTronca = L.marker([40.04079,-3.60989], {icon: redIcon}).addTo(map);
markerTronca.bindPopup("Plátanos de la Tronca").openPopup();

//Plátano Llorón
var markerLloron = L.marker([40.04070,-3.60939], {icon: orangeIcon}).addTo(map);
markerLloron.bindPopup("Plátano Llorón").openPopup();

//Contorno parque
var contornoIsla = L.polygon([
    [40.0369797,-3.6073454],
    [40.0377354,-3.6075063],
    [40.0394522, -3.6079677],
    [40.0403311,-3.6082037],
    [40.0411689,-3.6084719],
    [40.0418753,-3.6087294],
    [40.0425611,-3.6089001],
    [40.0431443,-3.6092434],
    [40.0440889,-3.6100051],
    [40.0449184,-3.6107025],
    [40.0450745,-3.6108527],
    [40.0450662,-3.6112282],
    [40.0446966,-3.611593],
    [40.0444749,-3.6117968],
    [40.0442449,-3.6121402],
    [40.0439739,-3.6120651],
    [40.0440067,-3.6117968],
    [40.0439492,-3.611475],
    [40.0437028,-3.6113999],
    [40.0433414,-3.611711],
    [40.0430622,-3.6121509],
    [40.042824,-3.612623],
    [40.0423558,-3.6128483],
    [40.0418049,-3.6131935],
    [40.0415379,-3.613408],
    [40.040885,-3.6138318],
    [40.04031,-3.6142181],
    [40.0397843,-3.6148833],
    [40.0395543,-3.6154841],
    [40.03916,-3.6161707],
    [40.0386836,-3.6170719],
    [40.0384536,-3.6175655],
    [40.0383222,-3.6168359],
    [40.0387,-3.6157416],
    [40.0392422,-3.614776],
    [40.0394064,-3.6142395],
    [40.0394229,-3.6137889],
    [40.0390615,-3.6132096],
    [40.0388643,-3.6123727],
    [40.0387986,-3.6116217],
    [40.038355,-3.6107205],
    [40.0378293,-3.6100982],
    [40.0374351,-3.6094545],
    [40.0372123,-3.6091063],
    [40.0372657,-3.6087845],
    [40.0372287,-3.6082695],
    [40.0371076,-3.6083285],
    [40.0370418,-3.608358],
    [40.0369823,-3.6082668],
    [40.0369084,-3.6079878],
    [40.0368632,-3.6077464],
    [40.0368365,-3.6074836],
    [40.036857,-3.6073602],
    [40.0369289,-3.6073253],
    [40.0369797,-3.6073454]
    ],
    {
        color: 'black',
        fillColor: 'black',
        fillOpacity: 0.3,
        radius: 500
    }).addTo(map);