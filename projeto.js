
var camera, scene, renderer;
var geometry, material, mesh;

var objects = [];



function createGame(x, y, z){
	"use strict";

	track = new track(scene, 0, 0, 0);
	car = new car(scene, 21.5, 31, 0);
	objects.push(new orange(scene, 3, 31, 0));
	objects.push(new orange(scene, 3, 31, -3));
	objects.push(new orange(scene, 3, 31, -6));
	objects.push(new butter(scene, 6, 31, 0));
	objects.push(new butter(scene, 6, 31, -3));
	objects.push(new butter(scene, 6, 31, -6));
	objects.push(new butter(scene, 6, 31, 3));
	objects.push(new butter(scene, 6, 31, 6));

	
}

function onResize(){
	"use strict";

	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0){
		camera.aspect = renderer.getSize().width / renderer.getSize().height;
		camera.updateProjectionMatrix();
	}

	render();
}

function createCamera(){
	"use strict";
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.x = 0;
	camera.position.y = 85;
	camera.position.z = 0;
	camera.lookAt(scene.position);
}

function createScene(){
	"use strict"

	scene = new THREE.Scene();

	scene.add(new THREE.AxisHelper(10));

	createGame(0, 0, 0);

}

function onKeyDown(e){
	"use strict";

	switch (e.keyCode){
		case 65: // A
		case 97: // a
			scene.traverse(function (node){
				if (node instanceof THREE.Mesh){
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
	}
	render();
}

function render(){
	"use strict";
	renderer.render(scene, camera);

}

function init(){
	"use strict";

	renderer = new THREE.WebGLRenderer({ antialias: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	createCamera();

	render();

	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);

}