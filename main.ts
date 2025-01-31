radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P0.setAngle(90)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        servos.P0.setAngle(0)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
/**
 * radio road barrier
 */
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
radio.setGroup(1)
strip.clear()
