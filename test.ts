input.onButtonPressed(Button.AB, function () {
    dfplayermini.setEQ(dfplayermini.EQ.Jazz)
    dfplayermini.playFileInFolder(1, 1, dfplayermini.isRepeat.No)
})
input.onButtonPressed(Button.A, function () {
    dfplayermini.playFile(1, dfplayermini.isRepeat.No)
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.playLoopFolder(1)
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(30)
dfplayermini.press(dfplayermini.playType.Play)
dfplayermini.playLoopAllFiles()
basic.forever(function () {
	
})
