var json_new;
var request = new XMLHttpRequest();
request.open('GET', 'https://api.ipdata.co/?api-key=test');
request.setRequestHeader('Accept', 'application/json');
request.onreadystatechange = function () {
	if (this.readyState === 4) {
		json_new=JSON.parse(this.responseText);
		document.getElementById("ipget").innerHTML=json_new.ip;
		document.getElementById("couget").innerHTML=json_new.country_name;
		document.getElementById("regget").innerHTML=json_new.region;
		document.getElementById("citget").innerHTML=json_new.city;
		document.getElementById("conget").innerHTML=json_new.continent_name;
		document.getElementById("codget").innerHTML=json_new.calling_code;
		document.getElementById("asn_name").innerHTML=json_new.asn.name;
		document.getElementById("car_name").innerHTML=json_new.carrier.name;
		document.getElementById("asn_type").innerHTML=json_new.asn.type;
		document.getElementById("cur_name").innerHTML=json_new.currency.name;
		document.getElementById("time_zone").innerHTML=json_new.time_zone.name;
		}};
request.send();
