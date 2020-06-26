
function exampleAPICall() {  
	// NB: pass params depending on API documentation at https://data.rijksmuseum.nl/object-metadata/api/
	// Any params passed are to append to the url variable below
	// Replace [apikey] with your own API key
	var input = document.getElementById("search").value;
	input=trim(input);
	input = input.replace(" ", "+");
	let url = "https://www.rijksmuseum.nl/api/nl/collection?key=FPIMwGHZ&involvedMaker="+input;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);

	xmlhttp.send();
	xmlhttp.addEventListener("readystatechange", processRequest, false);

	function processRequest(e) {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			json_file = JSON.parse(xmlhttp.responseText);
			console.log (json_file)
			artObjects = json_file["artObjects"];
			document.getElementById.innerHTML=""
			for (x in artObjects){
				Obj = artObjects[x[0]]
				imageLink = Obj["webImage"].url;
				title = Obj["title"];
				painter = Obj["principalOrFirstMaker"];
				document.getElementById("menu").innerHTML+="<br><br><br><br><div class = gallery> <img src=\""+imageLink+"\" width= 100 height= 100 ></div>";
				document.getElementById("menu").innerHTML+="<div class = desc><li><a href= #> "+title+" </a></li></div>";
				document.getElementById("menu").innerHTML+="by: "+painter;
			}





		

			// Whatever your heart and soul desires for the JSON file, has to be done in this block
			//alert(JSON.stringify(json_file));
		}
	}	
			
}

function trim(str) {
    return str.toString().replace(/^\s+|\s+$/g,'');
}
