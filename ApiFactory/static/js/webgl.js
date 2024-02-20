import * as THREE from "three";

let scene, camera, renderer;
let geometry, material, wireframe, light, edges, line, lines, lineMaterial;
let target, width, height, size, waveHeight;
let t;
let perlin;

function init() {
	target = document.querySelector(".wave");
	width = target.offsetWidth;
	height = target.offsetHeight;
	size = width < height ? width : height;
	t = 0;
	perlin = new Perlin();

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10000);
	camera.position.z = size;

	renderer = new THREE.WebGLRenderer({ antialias: true, depth: false });
	renderer.setClearColor(0xf5f5f5);
	renderer.setSize(width, height);

	waveHeight = 30;

	target.replaceChildren();
	target.appendChild(renderer.domElement);

	// const composer = new THREE.EffectComposer(renderer);
	// const renderPass = new THREE.RenderPass(scene, camera)
	// const bokehPass = new THREE.BokehPass(scene, camera, {
	//     focus: 1.0,
	//     aperture: 0.025,
	//     maxblur: 0.01,
	//     width: width,
	//     height: height,
	// });
	// composer.addPass(renderPass);
	// composer.addPass(bokehPass);
}

function createGeometry() {
	geometry = new THREE.PlaneGeometry(
		size * 1.3,
		size * 1.3,
		size / 30,
		size / 30
	);

	wireframe = new THREE.WireframeGeometry(geometry);
	lineMaterial = new THREE.LineBasicMaterial({ color: 0x73d2e6 });
	line = new THREE.LineSegments(wireframe, lineMaterial);
	line.rotation.x = -88 * (Math.PI / 180); // deg to rad: `degrees * (PI / 180)`;
	scene.add(line);
}

function updateVertices(geom) {
	let vertices = geom.geometry.attributes.position.array;

	for (let i = 0; i <= vertices.length; i += 3) {
		vertices[i + 2] =
			perlin.noise(vertices[i] / 900 + t, vertices[i + 1] / 900 + t) * waveHeight;
	}
	geom.geometry.attributes.position.needsUpdate = true;
}

function animate() {
	requestAnimationFrame(animate);
	t += 0.001;
	updateVertices(line);
	renderer.render(scene, camera);
}

init();
createGeometry();
animate();

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener("scroll", () => {
		waveHeight = window.scrollY <= 60 ? 30 : window.scrollY / 2;
	});

	window.addEventListener('resize', () => {
		init();
		createGeometry();
	})

});