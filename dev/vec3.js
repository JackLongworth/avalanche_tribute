class Vec3 {
  constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
  }

  add(vec3) {
      this.x += vec3.x;
      this.y += vec3.y;
      this.z += vec3.z;

      return this;
  };

  minus(vec3) {
      this.x -= vec3.x;
      this.y -= vec3.y;
      this.z -= vec3.z;

      return this;
  }

  times(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;
  }
}
