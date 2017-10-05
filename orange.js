
class orange extends THREE.Object3D{
	constructor(scene, x, y, z){
		"use strict";
		super();

		this.addOrange(0, 0, 0);


		this.position.set(x, y, z);

		scene.add(this);
	}

	addOrange(x, y, z){
		'use strict';
		var geometry = new THREE.SphereGeometry(1,60);
		var material = new THREE.MeshBasicMaterial({ color: 0xff6600, wireframe: true });
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0, 0, 0);
		
		this.add(mesh);
	}

}