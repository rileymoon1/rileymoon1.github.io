$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(150, 620, 200, 100, "lightpink");
    createPlatform(350, 500, 200, 100, "turquoise");
    createPlatform(700, 401, 200, 100, "#FDFD96");
    createPlatform(980, 288, 200, 100, "#dbafe4ff");
    createPlatform(1200, 570, 200, 100, "#bbfdbfff");

    // TODO 3 - Create Collectables
    createCollectable("database", 325, 500);
    createCollectable("database", 700, 367);
    createCollectable("database", 1200, 557);

    // TODO 4 - Create Cannons
    createCannon("left", 400, 550);
    createCannon("bottom", 550, 750);
    createCannon("top", 955, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
