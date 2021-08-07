input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showNumber(score)
    basic.pause(1000)
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let score = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let _1 = game.createSprite(0, 0)
let _2 = game.createSprite(1, 0)
let _3 = game.createSprite(2, 0)
let _4 = game.createSprite(3, 0)
let _5 = game.createSprite(4, 0)
score = 0
basic.forever(function () {
    basic.pause(randint(500, 3000))
    for (let index = 0; index < 4; index++) {
        _1.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
    }
    _1.set(LedSpriteProperty.X, 0)
    if (_1.isTouching(player)) {
        score += -1
    } else {
        score += 1
    }
    _1.set(LedSpriteProperty.Y, 0)
})
basic.forever(function () {
    basic.pause(randint(500, 3000))
    for (let index = 0; index < 4; index++) {
        _5.change(LedSpriteProperty.Y, 1)
        basic.pause(1500)
    }
    if (_5.isTouching(player)) {
        score += -1
    } else {
        score += 1
    }
    _5.set(LedSpriteProperty.Y, 0)
})
basic.forever(function () {
    basic.pause(randint(500, 3000))
    for (let index = 0; index < 4; index++) {
        _2.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
    if (_2.isTouching(player)) {
        score += -1
    } else {
        score += 1
    }
    _2.set(LedSpriteProperty.Y, 0)
})
basic.forever(function () {
    basic.pause(randint(500, 3000))
    for (let index = 0; index < 4; index++) {
        _4.change(LedSpriteProperty.Y, 1)
        basic.pause(600)
    }
    if (_4.isTouching(player)) {
        score += -1
    } else {
        score += 1
    }
    _4.set(LedSpriteProperty.Y, 0)
})
basic.forever(function () {
    basic.pause(randint(500, 3000))
    for (let index = 0; index < 4; index++) {
        _3.change(LedSpriteProperty.Y, 1)
        basic.pause(1200)
    }
    if (_3.isTouching(player)) {
        score += -1
    } else {
        score += 1
    }
    _3.set(LedSpriteProperty.Y, 0)
})
