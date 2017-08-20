//alert("Hello from your Chrome extension!")
var myLink
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      myLink = tabs[0].url.split("/")[2];
   }
);

var visits = document.getElementById("visits");
var lists = JSON.parse(localStorage.getItem('lists')) || [];
var present;
var text;

if (lists.length === 0) {
	var link = [
		{site: `${myLink}`, times: 1},
	];
	present = 1;
	lists.push(link);
	localStorage.setItem("lists", JSON.stringify(lists));
}
else {
	present = parseInt(lists[lists.length-1][0].times);
	present = present+1;
	lists[lists.length-1][0].times = present;
	lists.push(lists[lists.length-1]);
	lists.shift();
	localStorage.setItem("lists", JSON.stringify(lists));
}

text = parseInt(lists[lists.length-1][0].times);
visits.innerHTML = "<tr>" + `${text}` + "</tr>";
