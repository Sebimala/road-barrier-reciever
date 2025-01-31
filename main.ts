/**
 * radio road barrier
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(0)
    }
})
radio.setGroup(1)
