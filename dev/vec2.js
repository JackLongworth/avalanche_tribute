class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vec2) {
    this.x += vec2.x;
    this.y += vec2.y;

    return this;
  }

  minus(vec2) {
      this.x -= vec2.x;
      this.y -= vec2.y;

      return this;
  }

  times(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
  }
}
