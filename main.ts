input.onButtonPressed(Button.A, function () {
    WrappedMaqueen.setMotors(0, 0)
})
input.onButtonPressed(Button.AB, function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
})
basic.forever(function () {
    basic.showNumber(DFRobotMaqueenPlus.readSpeed(Motors1.M1))
})
