module.exports = {
    nets: {
      SDA: undefined,
      SCL: undefined,
      VCC: 'VCC',
      GND: 'GND'
    },
    params: {
      class: 'OLED',
	    side: 'F'
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value OLED (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        
        ${'' /* pins */}
        (pad 4 thru_hole oval (at 0.0 -3.81 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SDA.str})
        (pad 3 thru_hole oval (at 0.0 -1.27 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SCL.str})
        (pad 2 thru_hole oval (at 0.0 1.27 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.VCC.str})
        (pad 1 thru_hole rect (at 0.0 3.81 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.GND.str})
        )
        `
}