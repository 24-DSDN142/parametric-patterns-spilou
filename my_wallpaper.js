//your parameter variables go here!
let face = 150; //changes the size of the main part of the face
let nose = 100; //changes the size of the nose
let ear = 50; //changes the size of the outer ears
let innerear = 25; //changes the size of the inner ears
let mouth = 100 //changes the y poition of the mouth line

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255, 215, 181);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//ears - outter ear
strokeWeight(1);
if(face > 100){
  fill(166, 81, 7);
}
else{
  fill(128, 90, 24);
}
ellipse(35, 50, ear, ear);
ellipse(165, 50, ear, ear);

//ears - inner ear
fill(176, 176, 176);
ellipse(35, 50, innerear, innerear);
ellipse(165, 50, innerear, innerear);

//face - main part
if(face > 100){
  fill(166, 81, 7);
}
else{
  fill(128, 90, 24);
}
ellipse(100, 100, face, face);

//face - around eye patch
fill(176, 176, 176);
arc(100, 90, 80, 110, 180, 360, CHORD);

//stripes - left
fill(0, 0, 0);
triangle(26, 88, 26, 100, 45, 95);
triangle(27, 117, 26, 104, 45, 105);

//stripes - right
triangle(174, 112, 174, 100, 155, 105);
triangle(173, 83, 174, 96, 155, 95);

//eyes
ellipse(80, 68, 10, 20);
ellipse(120, 68, 10, 20);

//nose - main part
fill(150, 150, 150);
ellipse(100, 120, nose, nose);

//nose - black part
fill(0, 0, 0);
ellipse(100, 95, nose, 30);

//mouth - line
strokeWeight(2);
line(100, mouth, 100, 125);

}
