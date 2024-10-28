// Initialize the Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; // Enable WebXR for AR
document.body.appendChild(renderer.domElement);

// Add AR button for entering AR mode
document.body.appendChild(THREE.ARButton.createButton(renderer));

// Add light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load a 3D model with GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load('model.glb', (gltf) => {
const model = gltf.scene;
model.scale.set(0.2, 0.2, 0.2); // Scale down the model if needed
model.position.set(0, -1, -3); // Adjust the model's position
scene.add(model);
}, undefined, (error) => {
console.error('Error loading model:', error);
});

// Animation loop for rendering
function animate() {
renderer.setAnimationLoop(() => {
renderer.render(scene, camera);
});
}

// Start the animation
animate();