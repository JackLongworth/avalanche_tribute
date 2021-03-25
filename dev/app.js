let camera, scene, renderer;
let gameStarted = false;
let player;
let timer;

let boxes;


function init() {
  boxes = [];

  timer = new FrameTimer();

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(10, 10, 20);
  scene.add(directionalLight);


  const width = 10;
  const height = width * (window.innerHeight / window.innerWidth);
  camera = new THREE.PerspectiveCamera(
    45, // fov
    width / height,  // aspect ratio
    1, // near
    1000 // far
  )

  player = new Player();
  scene.add(player.mesh);

  createBox(new THREE.Vector3(-12, 49.5, 0), {x: 1, y:100, z:1}, 0x554f5c);
  createBox(new THREE.Vector3(12, 49.5, 0), {x: 1, y:100, z:1}, 0x554f5c);

  renderer = new THREE.WebGLRenderer( { antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);
  document.body.appendChild(renderer.domElement);
  renderer.setAnimationLoop(gameLoop);
}

function createBox(position, dimensions, colourValue) {
  const geometry = new THREE.BoxGeometry(dimensions.x, dimensions.y, dimensions.z);
  const color = new THREE.Color(colourValue);
  const material = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);

  scene.add(mesh);
  boxes.push(mesh);
  return mesh;
}

function gameLoop() {
  dt = timer.mark();
  player.update(dt);
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  // Adjust camera
  console.log("resize", window.innerWidth, window.innerHeight);
  const aspect = window.innerWidth / window.innerHeight;
  const width = 10;
  const height = width / aspect;

  camera.top = height / 2;
  camera.bottom = height / -2;

  // Reset renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});
