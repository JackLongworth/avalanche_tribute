var directions = {
  UP: false,
  DOWN: false,
  LEFT: false,
  RIGHT: false,
};

const GRAVITY = new THREE.Vector3(0, 0.01);

class Player {


  constructor(spawn = new THREE.Vector3(0,0,0), velocity = new THREE.Vector3(0, 0)) {

    this.mesh = createBox(spawn, {x: 1, y:1, z:1}, 0xf54242);
    this.velocity = velocity;
    this.grounded = true;
  }

  updatePlayerMovement(dt) {

    // In the Horizontal plane
    if (directions.LEFT) {
      this.velocity.x = -0.01 * dt;
    } else if (directions.RIGHT) {
      this.velocity.x = 0.01 * dt;
    } else {
      this.velocity.x = 0 * dt;
    }

    /////////////////// look up how to implement a jump

    // In the Vertical plane
    if (directions.UP && this.grounded) {
      this.velocity.y = 0.02 * dt;
      this.grounded = false;
    }

    // gravity
    this.velocity.sub(GRAVITY);
    this.mesh.position.add(this.velocity);
  }

  doCollision(dt) {
    if (this.mesh.position.y < 0 && this.velocity.y < 0) {
      this.mesh.position.y = 0;
      this.velocity.y = 0;
      this.grounded = true;
    }
    // 
    // var playerGeometry = this.mesh.geometry;
    //
    // for (var vertexIndex = 0; vertexIndex < playerGeometry.vertices.length; vertexIndex++) {
    //   var localVertex = playerGeometry.vertices[vertexIndex].clone();
    //   var globalVertex
    // }
  }

  update(dt) {
    camera.position.set(0, this.mesh.position.y+2, 20);
    camera.lookAt(0, this.mesh.position.y+2, 0);
    this.updatePlayerMovement(dt);
    this.doCollision(dt);
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === 'a') {
    directions.LEFT = true;
  }
  if (event.key === 'd') {
    directions.RIGHT = true;
  }
  if (event.key === 'w') {
    directions.UP = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === 'a') {
    directions.LEFT = false;
  }
  if (event.key === 'd') {
    directions.RIGHT = false;
  }
  if (event.key === 'w') {
    directions.UP = false;
  }
});
