
class butter extends THREE.Object3D{
	constructor(scene, x, y, z){
		"use strict";
		super();

		this.addButterPackage(0,0,0);
		this.addButter(0,0.1,0);

		this.position.set(x, y, z);

		scene.add(this);
	}

	addButterPackage(x, y, z){
		"use strict";
		var geometry = new THREE.CubeGeometry(1, 1, 2);
		var material = new THREE.MeshBasicMaterial({ color: 0xf2f2f2, wireframe: true });
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x, y, z);

		this.add(mesh);
	}

	addButter(x, y, z){
		"use strict";
		var geometry = new THREE.CubeGeometry(0.9, 0.9, 1.8);
		var material = new THREE.MeshBasicMaterial({ color: 0xffff33, wireframe: true });
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x, y, z);

		this.add(mesh);
	}


}