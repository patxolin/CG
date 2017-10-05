
class track extends THREE.Object3D{

	constructor(scene, x, y, z){
		"use strict";

		super();
		this.addCube();

		//track
		// exterior limit
		this.addTorus(27, 30, 0);
		this.addTorus(27, 30, -4);
		this.addTorus(27, 30, -8);
		this.addTorus(27, 30, -12);
		this.addTorus(27, 30, -16);
		this.addTorus(27, 30, -4);
		this.addTorus(27, 30, 0);
		this.addTorus(27, 30, 4);
		this.addTorus(27, 30, 8);
		this.addTorus(27, 30, 12);
		this.addTorus(27, 30, 16);
			//bottom right curve
			this.addTorus(27, 30, 19.5);
			this.addTorus(25, 30, 22);
			this.addTorus(23, 30, 25);
		this.addTorus(20, 30, 27);
		this.addTorus(16, 30, 27);
		this.addTorus(12, 30, 27);
		this.addTorus(8, 30, 27);
		this.addTorus(4, 30, 27);
		this.addTorus(0, 30, 27);
		this.addTorus(-4, 30, 27);
		this.addTorus(-8, 30, 27);
		this.addTorus(-12, 30, 27);
		this.addTorus(-16, 30, 27);
			//bottom left curve
			this.addTorus(-19.5, 30, 27);
			this.addTorus(-22, 30, 25);
			this.addTorus(-25, 30, 23);
			this.addTorus(-27, 30, 20);
			this.addTorus(-27, 30, 17);
			this.addTorus(-25, 30, 14);
			this.addTorus(-22, 30, 11);
			this.addTorus(-19, 30, 8);
			this.addTorus(-16, 30, 5);
		this.addTorus(-15, 30, 2);
		this.addTorus(-15, 30, -1);
		this.addTorus(-15, 30, -4);
			//top left curve
			this.addTorus(-16, 30, -7);
			this.addTorus(-19, 30, -10);
			this.addTorus(-22, 30, -13);
			this.addTorus(-25, 30, -16);
			this.addTorus(-27, 30, -19);
			this.addTorus(-25, 30, -22);
			this.addTorus(-22, 30, -25);
			this.addTorus(-19, 30, -27);
			this.addTorus(-16, 30, -27);
		this.addTorus(-12, 30, -27);
		this.addTorus(-8, 30, -27);
		this.addTorus(-4, 30, -27);
		this.addTorus(-0, 30, -27);
		this.addTorus(4, 30, -27);
		this.addTorus(8, 30, -27);
		this.addTorus(12, 30, -27);
		this.addTorus(16, 30, -27);
			//top left curve
			this.addTorus(20, 30, -25);
			this.addTorus(23, 30, -22);
			this.addTorus(25, 30, -19);
		//interior limit
		this.addTorus(17, 30, 0);
		this.addTorus(17, 30, -4);
		this.addTorus(17, 30, -8);
		this.addTorus(17, 30, -12);
		this.addTorus(16, 30, -15);
		this.addTorus(17, 30, -4);
		this.addTorus(17, 30, 0);
		this.addTorus(17, 30, 4);
		this.addTorus(17, 30, 8);
		this.addTorus(17, 30, 12);
		this.addTorus(15, 30, 16);
		this.addTorus(12, 30, 17);
		this.addTorus(8, 30, 17);
		this.addTorus(4, 30, 17);
		this.addTorus(0, 30, 17);
		this.addTorus(-4, 30, 17);
		this.addTorus(-7, 30, 17);
		this.addTorus(-10, 30, 15);
		this.addTorus(-8, 30, 12);
		this.addTorus(-5, 30, 9);
		this.addTorus(-3, 30, 6);
		this.addTorus(-3, 30, 2);
		this.addTorus(-3, 30, -2);
		this.addTorus(-3, 30, -6);
		this.addTorus(-5, 30, -10);
		this.addTorus(-7, 30, -13.5);
		this.addTorus(-9, 30, -16);
		this.addTorus(-6, 30, -17);
		this.addTorus(-2, 30, -17);
		this.addTorus(2, 30, -17);
		this.addTorus(6, 30, -17);
		this.addTorus(10, 30, -17);
		this.addTorus(13, 30, -17);
		// track

		this.position.set(x, y, z);

		scene.add(this);
	}

	addCube(){
		"use strict";
		var geometry = new THREE.CubeGeometry(60, 60, 60);
		var material = new THREE.MeshBasicMaterial({ color: 0x3d3d5c, wireframe: true });
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0, 0, 0);

		this.add(mesh);
	}

	addTorus(x, y, z){
		"use strict";

		var geometry = new THREE.TorusGeometry(0.9, 0.2, 10, 100, 6.3);
		var material = new THREE.MeshBasicMaterial({ color: 0xffff00});
		var mesh = new THREE.Mesh(geometry, material);
		mesh.rotateX((90*Math.PI)/180);
		mesh.position.set(x, y, z);

		this.add(mesh);

	}

}