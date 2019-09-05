input.onButtonPressed(Button.A, function () {
    dfplayermini.playFile(0, dfplayermini.isRepeat.no)
})
input.onButtonPressed(Button.AB, function () {
    dfplayermini.setEQ(dfplayermini.EQ.Jazz)
    dfplayermini.playFileInFolder(0, 0, dfplayermini.isRepeat.no)
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.playLoopFolder(0)
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(30)
dfplayermini.press(dfplayermini.playType.Play)
dfplayermini.playLoopAllFiles()
basic.forever(function () {
	
})
