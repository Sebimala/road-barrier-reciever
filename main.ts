/**
 * radio road barrier
 */
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
        servos.P0.setAngle(0)
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
        strip.showColor(neopixel.hsl(0, 0, 0))
        basic.clearScreen()
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
radio.setGroup(3)
strip.clear()
