//your parameter variables go here!
let face = 150;
let nose = 100;
let ear = 50;
let innerear = 25;

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
  background(255, 215, 181);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//ears
fill(166, 81, 7);
ellipse(35, 50, ear, ear);
ellipse(165, 50, ear, ear);

fill(176, 176, 176);
ellipse(35, 50, innerear, innerear);
ellipse(165, 50, innerear, innerear);

//face
fill(166, 81, 7);
ellipse(100, 100, face, face);

fill(176, 176, 176);
arc(100, 85, 80, 110, 180, 360, CHORD);

fill(0, 0, 0);
ellipse(75, 70, 10, 20);
ellipse(125, 70, 10, 20);

//nose
fill(176, 176, 176);
ellipse(100, 120, nose, nose);

fill(0, 0, 0);
arc(100, 100, 90, 60, 180, 360, CHORD);

line(100, 100, 100, 125);

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

// if(nose > 50){
//   fill(199, 199, 199);
//   }
//   else{
//   fill(28, 28, 28);
//   }


//eyes
// fill(232, 232, 232);
// arc(75, 90, 20, 80, 180, 360, CHORD);
// arc(125, 90, 20, 80, 180, 360, CHORD);


// arc(75, 90, 15, 70, 180, 360, CHORD);
// arc(125, 90, 15, 70, 180, 360, CHORD);