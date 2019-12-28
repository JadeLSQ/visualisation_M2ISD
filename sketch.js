var mapimg;

var clat = 0;
var clon = 0;

// Shanghai 31° 13′ 56″ nord, 121° 28′ 09″ est
var lat =31.2304;
var lon =121.2809; 

var zoom =1;

function preload(){
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiamFkZS1paSIsImEiOiJjazFhb3N1cnEwMTljM25vYnU0ejlmdHplIn0.w-ZfcrJpkw0ff5ytJ3P6bg');
}

//formule Web Mercator projection : 
//https://en.wikipedia.org/wiki/Web_Mercator_projection

function mercX(lon){
	lon = radians(lon);
	var a = (256/PI) * pow(2, zoom);
	var b = lon + PI;
	return a * b; 
}

function mercY(lat){
	lat = radians(lat);
	var a = (256/PI) * pow(2, zoom);
	var b = PI-log(tan(PI/4 + lat/2));
	return a * b;
}

function setup() {
  createCanvas(1024, 512);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var center_x = mercX(clon);
  var center_y = mercY(clat);

  var x = mercX(lon) - center_x;
  var y = mercX(lat) - center_y;
  //let pos1 = map.project( mapboxgl.LngLat.convert({ lng: 121.473701, lat:31.230416}));

  fill(255, 0, 255, 200);
  ellipse(x, y, 20, 20);

}

