# Visual-sequencer

Based on an idea of Alberto Novello and developed with him at "Cesare Pollini" Music conservatoire, Padova, Italy.

The visual sequencer patch is a sequencer which analyses the image captured from the camera and slices it in 12 cells (4 cols and 3 rows).

The mean value of the color in every cell is then compared with some templates stored during the initial calibration and, whenever the value of the cell matches one of them, a different sample is triggered depending on the color detected.
The 12-steps metro will cause the output of a cell whenever the beat count matches the cell number.


An initial calibration phase is needed, and it consists in manually adjusting the corners so that the patch will only scan the desired area. That can be done with the mouse directly on the floating window, or by modifying the "corners adjustment" values.

The second part of the calibration is about color. When the patch is loaded, a second window pops up, asking you to click on the specified colors, now it's when templates are created. The colors you store in the templates don't really have to match the ones that are specified in the labels.

Colors can be adjusted a bit with the BR, CO, SA parameters which corresponds to Brightness, Contrast and Saturation. That can be useful to diversify similar colors that could be seen as equals by the patch.

The color templates can be individually overwritten at any time by clicking the calibration button and storing the templates again.
The white color isn't linked to a sample, because it corresponds to a rest.


This sequencer is now programmed to generate rhythms basing on an image, that can be a grid with precise colors for predictable results, or a random image/video for more irregular and dynamic results, but can also be modified so that it will trigger other events like audio effects or parameters changes insted of audio samples.
