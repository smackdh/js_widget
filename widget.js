// create-widget.js

(function () {
	var div = document.createElement('div');
	div.style.backgroundColor = 'orange';
	div.innerText = 'Sustainability Page';
	div.style.width = '200px';
	div.style.height = '100px';
	div.style.display = 'flex';
	div.style.justifyContent = 'center';
	div.style.alignItems = 'center';
	div.style.color = 'white';
	div.style.borderRadius = '5px';
	div.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.1)';

	// This assumes you want to append the widget to the body. Adjust if you want it elsewhere.
	document.body.appendChild(div);
})();
