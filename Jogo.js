
var camera, scene, renderer;
var geometry, material, mesh;


function addCube(obj, x, y, z){
	"use strict";
	geometry = new THREE.CubeGeometry(60, 60, 60);
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addTorus(obj, x, y, z){
	"use strict";

	geometry = new THREE.TorusGeometry(1, 0.1, 10, 100, 6.3);
	material = new THREE.MeshBasicMaterial({ color: 0xffff00});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);

}

function createGame(x, y, z){
	"use strict";

	var table = new THREE.Object3D();
	var torus = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});

	addCube(table, 0, 0, 0);
	addTorus(torus, 0, 30, 0);

	scene.add(table);
	scene.add(torus);

	//torus.rotation.x = 90;

	table.position.x = x;
	table.position.y = y;
	table.position.z = z;

	torus.position.x = x;
	torus.position.y = y;
	torus.position.z = z;
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

function onResize(){
	"use strict";

	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0){
		camera.aspect = renderer.getSize().width / renderer.getSize().height;
		camera.updateProjectionMatrix();
	}

	render();
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