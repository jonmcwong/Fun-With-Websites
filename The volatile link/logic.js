var image = getElementById('pic')
function gotorandomlink() {
	var link = Math.ceil((Math.random() * 4)).toString() + ".html"
	window.location.replace(link)
	//alert("Took you to " + link)
}

