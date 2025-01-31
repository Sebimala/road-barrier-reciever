radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P0.setAngle(70)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        servos.P0.setAngle(5)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        strip.clear()
    }
})
/**
 * radio road barrier
 */
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
radio.setGroup(1)
strip.clear()
