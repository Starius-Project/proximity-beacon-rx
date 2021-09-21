radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    if (Math.map(signal, -95, -42, 0, 9) >= 8 && released == 0) {
        basic.showIcon(IconNames.Yes)
        radio.sendString("2")
        released = 1
    }
})
let released = 0
let signal = 0
radio.setGroup(1)
basic.showIcon(IconNames.Surprised)
