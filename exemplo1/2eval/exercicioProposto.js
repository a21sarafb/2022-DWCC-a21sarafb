const request = new XMLHttpRequest();
request.open(
	"GET",
	"https://api.edamam.com/api/recipes/3e237f62"

	/*https://world.openfoodfacts.org/api/v0/product/737628064502.json*/
	/*https://poetrydb.org/title/all/author,title,lines,linecount.json*/
	/*https://api.agify.io?name=michael&country_id=US*/
);
request.responseType = "json";
// send request
request.send();
request.addEventListener("load", function () {
	const poetas = request.response;
	console.log(poetas);
});
