const request = new XMLHttpRequest();
request.open(
	"GET",
	"https://api.edamam.com/api/recipes/v2?type=public&app_id=3ec28d79&app_key=fcd09282a9404523092a4a1d33ad13f3&ingr=5-6&diet=balanced&health=alcohol-free&cuisineType=Asian&dishType=Starter&imageSize=SMALL&field=image"

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
/*https://developer.edamam.com/edamam-docs-recipe-api*/
