class FrameTimer {
  constructor() {
    this.last = new Date().getTime();
  }

  mark() {
    const old = this.last;
    this.last = new Date().getTime();

    const duration = this.last - old;
    return duration;
  }
}
