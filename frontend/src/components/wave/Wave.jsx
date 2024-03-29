import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Perlin from './perlin.js'

export const Wave = () => {
	const waveRef = useRef(null)

	let width
	let height
	let size
	let t
	let waveHeight
	let perlin
	let scene
	let camera
	let renderer
	let geometry
	let wireframe
	let lineMaterial
	let line

	useEffect(() => {
		width = window.innerWidth
		height = window.innerHeight
		size = (width + height) / 2
		t = 0
		waveHeight = 50
		perlin = new Perlin()

		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000)
		camera.position.z = size / 1.3

		renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setClearColor(0xf5f5f5)
		renderer.setSize(width, height)
		renderer.setPixelRatio(window.devicePixelRatio)

		const target = waveRef.current
		target?.appendChild(renderer.domElement)

		geometry = new THREE.PlaneGeometry(
			size * 1.3,
			size * 1.3,
			size / 30,
			size / 30
		)

		wireframe = new THREE.WireframeGeometry(geometry)
		lineMaterial = new THREE.LineBasicMaterial({ color: 0x73d2e6 })
		line = new THREE.LineSegments(wireframe, lineMaterial)
		line.rotation.x = -88 * (Math.PI / 180) // deg to rad: `degrees * (PI / 180 `;
		scene.add(line)

		function updateVertices(geom) {
			let vertices = geom.geometry.attributes.position.array

			for (let i = 0; i <= vertices.length; i += 3) {
				vertices[i + 2] =
					perlin.noise(vertices[i] / 900 + t, vertices[i + 1] / 900 + t) *
					waveHeight
			}
			geom.geometry.attributes.position.needsUpdate = true
		}

		var animate = function () {
			requestAnimationFrame(animate)
			t += 0.002
			updateVertices(line)
			renderer.render(scene, camera)
		}

		animate()

		window.addEventListener('scroll', () => {
			waveHeight = window.scrollY <= 50 ? 50 : window.scrollY / 1.5
		})

		window.addEventListener('resize', () => {
			renderer.setSize(window.innerWidth, window.innerHeight)
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
		})
	}, [])

	return <div ref={waveRef}></div>
}
