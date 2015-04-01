document.body.style.backgroundColor = '#333';

var width = 960,
    height = 500,
    radius = Math.sqrt(width / 2 * width / 2 + height / 2 * height / 2) + 5;

var vendor = ["", "-webkit-", "-moz-", "-ms-", "-o-"]
    .reduce(function(p, v) { return v + "transform" in document.body.style ? v : p; });

var θ = Math.PI * (3 - Math.sqrt(5)),
    spacing = 4,
    size = spacing - 1,
    speed = 1,
    index = 0,
    total = (radius * radius) / (spacing * spacing);

var canvas = d3.select("body").append("canvas")
    .attr("width", radius * 2)
    .attr("height", radius * 2)
    .style("position", "absolute")
    .style("left", width / 2 - radius + "px")
    .style("top", height / 2 - radius + "px")
    .style(vendor + "transform-origin", radius + "px " + radius + "px");

var context = canvas.node().getContext("2d");

context.translate(radius, radius);

d3.timer(function() {
  canvas.style(vendor + "transform", "rotate(" + -speed / 2 + "deg)");

  for (var j = 0; index < total && j < speed; ++j) {
    var radius = spacing * Math.sqrt(++index),
        angle = index * θ,
        x = radius * Math.cos(angle),
        y = radius * Math.sin(angle);

    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = d3.hsl(angle * 180 / Math.PI - radius, 1, .5) + "";
    context.fill();
  }

  speed += .1;
});
