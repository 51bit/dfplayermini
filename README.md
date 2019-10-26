# DFPlayer Mini driver
makecode pxt extension for Xuefeng DFPlayer Mini Audio Board

**DFPlayer Mini Module:**

![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/icon.png?raw=true "DFPlayer Mini Module")

**Xuefeng DFPlayer Mini Audio Board:**

![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/icon2.png?raw=true "DFPlayer Mini Audio Board picture")

![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/icon3.jpg?raw=true "DFPlayer Mini Audio Board picture 2")

## Basic Usage

```blocks
input.onButtonPressed(Button.A, function () {
    dfplayermini.playLoopAllFiles()
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.setEQ(dfplayermini.EQ.Rock)
})
input.onButtonPressed(Button.AB, function () {
    dfplayermini.setEQ(dfplayermini.EQ.Jazz)
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
basic.forever(function () {
	
})
```

Use ``||connect||`` to connect to Xuefeng DFPlayer Mini Audio Board.

Use ``||playLoopAllFiles||`` to play loop all files.

Use ``||setEQ||`` to set EQ for DFPlayer mini.

## Demo

### setup DFPlayer Mini

#### micro:bit + DFPlayer audio board
![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/microbitDemo.jpg?raw=true "micro:bit + DFPlayer audio board")

#### makecode code
![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/makecodeDemo.png?raw=true "makecode code")

## Supported targets

* for PXT/microbit

## License

MIT
