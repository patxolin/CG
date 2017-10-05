
class car extends THREE.Object3D{

	constructor(scene, x, y, z){
		"use strict";

		super();
		this.addCarBody(0,0,0);
		this.addCarFront(0, 0, -2);
		this.addCarWheel(-0.9, 0, -1.9);
		this.addCarWheel(1, 0, -1.9);
		this.addCarWheel(-1.2, 0, 0);
		this.addCarWheel(1.3, 0, 0);


		this.position.set(x, y, z);

		scene.add(this);
	}

	addCarBody(x, y, z){
		"use strict";
		var geometry = new THREE.CubeGeometry(1.5, 1.3, 2);
		var material = new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true });
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x, y, z);

		this.add(mesh);
	}

	addCarFront(x, y, z){
		"use strict";
		var geometry = new THREE.CubeGeometry(1, 1, 2);
		var material = new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true });
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(x, y, z);

		this.add(mesh);
	}

	addCarWheel(x, y, z){
		"use strict";
		var geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.3, 32);
		var material = new THREE.MeshBasicMaterial( {color: 0x999966, wireframe: true} );
		var mesh = new THREE.Mesh(geometry, material);
		mesh.rotateX((90*Math.PI)/180);
		mesh.rotateZ((90*Math.PI)/180);
		mesh.position.set(x, y, z);

		this.add(mesh);
	}

}