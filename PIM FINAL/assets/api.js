function exampleAPICall() {  
	// NB: pass params depending on API documentation at https://data.rijksmuseum.nl/object-metadata/api/
	// Any params passed are to append to the url variable below
	// Replace [apikey] with your own API key
	let url = "https://www.rijksmuseum.nl/api/nl/collection?key=FPIMwGHZ";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);

	xmlhttp.send();
	xmlhttp.addEventListener("readystatechange", processRequest, false);

	function processRequest(e) {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			json_file = JSON.parse(xmlhttp.responseText);
			artObjects = json_file["artObjects"];
			console.log(json_file)
			for (x in artObjects){
				Obj = artObjects[x[0]]
				imageLink = Obj["webImage"].url;
				console.log(imageLink);
				title = Obj["title"];
				painter = Obj["principalOrFirstMaker"];
				document.getElementById("test").innerHTML+="<div class=gallery><div class = column><img src="+imageLink+" ><a target=_blank href="+imageLink+"><img+src="+imageLink+">Click here to view image in full screen</a><div class = desc> "+title+"<br> By: " +painter+" </div></div></div><br><br>"
			}

		


			// Whatever your heart and soul desires for the JSON file, has to be done in this block
			//alert(JSON.stringify(json_file));
		}
	}

	
}





exampleAPICall();