module.exports = {
    // switches
    alps: require('./alps'),
    choc: require('./choc'),
    chocmini: require('./chocmini'),
    mx: require('./mx'),
    pg1350: require('./pg1350'),
    // inputs
    psp: require('./psp'),
    button: require('./button'),
    jumper: require('./jumper'),
    omron: require('./omron'),
    scrollwheel: require('./scrollwheel'),
    rotary: require('./rotary'),
    pimoroni: require('./pimoroni'),

    // components
    fpc: require('./fpc'),
    res: require('./res'), //resistor
    diode: require('./diode'), 
    jstph: require('./jstph'),
    pad: require('./pad'),
    via: require('./via'),
    pin: require('./pin'),
    ams1117: require('./ams1117'),
    cap: require('./cap'),
    '74hc595': require('./74hc595'),
    trace: require('./trace'),

    // outputs
    oled: require('./oled'),
    rgb: require('./rgb'),
    slider: require('./slider'),
    trrs: require('./trrs'),
    puck: require('./puck'),
    mousebites: require('./mousebites'),
    text: require('./text'),
    m2: require('./m2'),

    // mcus
    blackpill: require('./blackpill'),
    promicro_pretty: require('./promicro_pretty'),
    xiao: require('./xiao'),
    promicro: require('./promicro'),
    nice_nano: require('./nice_nano'),
    elitec: require('./elitec'),
    controller: require('./controller'),
}