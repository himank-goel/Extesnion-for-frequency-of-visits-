console.log(1);
var obj;
var link = document.URL;
if(JSON.parse(localStorage.getItem(link)) == null)
	obj = 0;
else
	obj = JSON.parse(localStorage.getItem(link));
obj += 1;
localStorage.setItem(link, JSON.stringify(obj));
console.log(obj);