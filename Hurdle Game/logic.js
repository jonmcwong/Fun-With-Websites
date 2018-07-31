var noOfHurdles = 2;
//when race is first started
function saveTry() {
	var curtry = {
		counter: 0,
		status: "pending"
	}
	//Adds new item to end of string
	curkey = "try " + (sessionStorage.length + 1).toString();
	storeJSON(curkey, curtry);
}

var racestart = document.getElementById('start');
racestart.addEventListener("click", saveTry());

function jumpHurdle(event) {
	event.preventDefault();
	curkey = "try " + sessionStorage.length.toString();
	curtry = retrieveJSON(curkey);
	curtry.counter++;
	if (curtry.counter > noOfHurdles - 1) {

		curtry.status = "Won";
		storeJSON(curkey, curtry);
		window.location.replace("Win.html");

	} else {
		window.location.replace("empty_stretch.html");
		storeJSON(curkey, curtry);
	}
}

function runIntoHurdle(event) {
	event.preventDefault();
	curkey = "try " + sessionStorage.length.toString();
	curtry = retrieveJSON(curkey);
	curtry.status = "Lost";
	storeJSON(curkey, curtry);
	window.location.replace("Lost.html");

}
function showAttempts() {
	var table = "";
	table += "<table>";
	table += "<tr><th>Attempt</th><th>Hurdles Passed</th><th>Status</th></tr>"
	for (i = sessionStorage.length; i > 0; i--) {
		table += "<tr>";
		var key = "try " + i.toString();
		attempt = readJSON(key);
		table += "<td>" + key + "</td>";
		table += "<td>" + attempt.counter.toString() + "</td>"
		table += "<td>" + attempt.status + "</td>";
		table += "</tr>";
	}
	table += "</table>";
	document.getElementById('Attempts').innerHTML = table;

}

function storeJSON(key, data) {

	//takes your key and data as JSON and stores it 
	//encoded in session storage
	encodeddata = JSON.stringify(data);
	encodeddata = btoa(encodeddata);
	sessionStorage.setItem(key, encodeddata);
}

function retrieveJSON(key) {

	//takes your key and retrieves the relevant piece 
	//of data as JSON, removing the piece of data from session storage.
	retrieveddata = readJSON(key);
	sessionStorage.removeItem(key);
	return retrieveddata;
}

function readJSON(key) {
	retrieveddata = sessionStorage.getItem(key);
	if (!retrieveddata) {
		alert("Faulty Memory Reading");
		return false;
	}
	retrieveddata = atob(retrieveddata);
	retrieveddata = JSON.parse(retrieveddata);
	return retrieveddata;
}


