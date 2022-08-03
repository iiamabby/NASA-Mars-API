

var nameB = document.getElementById('name');
var date = document.getElementById('date');
var author = document.getElementById('author');
fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&&api_key=Enter key here").then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
  extractToLocal(data)
 

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
var marsRover = {
  images: []
};

const extractToLocal = (data) => {
  for(var i = 0; i < data.photos.length; i++){

    marsRover.images.push({ 
      "img" : data.photos[i].img_src,
      "earth_date"  : data.photos[i].earth_date
  });

}
}

const readResponse = () =>{

const image = new Image() 


  var i = 0;
  var interval = setInterval(function(){
      var obj =  marsRover.images[i]
      image.src = obj.img
      document.getElementById('parent').append(image);
      console.log("Image: ", i + " / " ,marsRover.images.length)
      i++;
      if(i === obj.length) clearInterval(interval);
  }, 5000);

}

readResponse()
