//Añadimos una imagen a modo de logotipo
var imageUrl='images/Logo.png';
var latLngBounds=([[40.0427,-3.6124], [40.0413, -3.61]]);
var options={
    opacity: 0.8,
    alt: 'Logotipo de Tandem'
}
var logotipo = L.imageOverlay(imageUrl, latLngBounds, options);
logotipo.addTo(map);