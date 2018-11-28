import Layer from './layer/layer.js';
import './css/common.css';
const App = function () {
	var app = document.getElementById('app')
	console.log(app)
	var layer = new Layer()
	app.innerHTML = layer.tpl({
		name1: 'name1',
		name2: 'name2',
	})
}

new App()
