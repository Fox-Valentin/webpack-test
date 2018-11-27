import Layer from './layer/layer.js';
import './css/common.css';
import pic1 from './assets/1.jpg'
const App = function () {
	console.log(pic1)
	var layer = new Layer()
	var app = document.getElementById('app')
	app.innerHTML = layer.tpl
}

new App()
