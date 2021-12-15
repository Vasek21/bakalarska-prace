let random = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    let tool = 0
    random = randint(0, 2)
    if (random == 0) {
        basic.showString("scissors")
        basic.showLeds(`
            # . . . #
            # # . # .
            # # # . .
            # # . # .
            # . . . #
            `)
    } else if (tool == 1) {
        basic.showString("rock")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showString("paper")
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
