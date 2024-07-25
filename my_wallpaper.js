//your parameter variables go here!
let size = 90;

let something = true

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(110, 146, 212);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

rect(size, size, size, size);

if(size > 50){
fill(115, 54, 54);
}
else{
fill(183, 79, 209);
}

ellipse(100, 100, size/2, size);

}

// strokeWeight(0);
// fill(34, 73, 143);
// rect(70, 20, 110, 150);

// strokeWeight(1);
// stroke(20, 44, 87);
// rect(72, 22, 106, 146);

// strokeWeight(0);
// fill(255, 255, 255);
// rect(10, 110, 125, 80);

// strokeWeight(1);
// stroke(191, 191, 191);
// rect(12, 112, 121, 76);