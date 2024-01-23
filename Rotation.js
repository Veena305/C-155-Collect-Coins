AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfAscent;

      if (e.key === "ArrowRight") {
        if (diverRotation.x < 20) {
          diverRotation.x += 1;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.x > -20) {
          diverRotation.x -= 1;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverRotation.z < 40) {
          diverRotation.z += 1;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y < 4) {
          diverPosition.y += 0.02;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (diverRotation.z > -20) {
          diverRotation.z -= 1;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y > -4) {
          diverPosition.y -= 0.02;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});