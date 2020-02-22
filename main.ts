radio.onReceivedString(function (receivedString) {
    if (receivedString == "Snake") {
        basic.showIcon(IconNames.Snake)
    } else if (receivedString == "Giraffe") {
        basic.showIcon(IconNames.Giraffe)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("Giraffe")
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("Snake")
})
radio.setGroup(10)
basic.showIcon(IconNames.Yes)
