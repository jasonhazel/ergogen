module.exports = {
  params: {
    side: 'F',
    mirror: false,
  },
  nets: {
    GND: "GND",
    VCC: "VCC",
    SDA: "P2",
    SCL: "P3",
    INT: undefined
  },
  body: p => {
    let pins = p.param.mirror ?
      `
      (pad "" thru_hole oval (at -9.5 -5) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.GND.str} )
      (pad "" thru_hole oval (at -9.5 -2.46) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.INT.str} )
      (pad "" thru_hole oval (at -9.5 0.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.SCL.str})
      (pad "" thru_hole oval (at -9.5 2.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.SDA.str})
      (pad "" thru_hole rect (at -9.5 5.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)  ${p.net.VCC.str}  ) 
      ` : `
      (pad "" thru_hole rect (at -9.5 -5) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.VCC.str} )
      (pad "" thru_hole oval (at -9.5 -2.46) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.SDA.str} )
      (pad "" thru_hole oval (at -9.5 0.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.SCL.str})
      (pad "" thru_hole oval (at -9.5 2.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.INT.str})
      (pad "" thru_hole oval (at -9.5 5.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)  ${p.net.GND.str}  ) 
      `
    let out =
      `
      (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
        ${p.at /* parametric position */}

        (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer B.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
     
        (fp_line (start -5 -7.5) (end -5 -12.5) (layer "F.SilkS") (width 0.12))
        (fp_line (start -5 7.5) (end -5 12.5) (layer "F.SilkS") (width 0.12))
        (fp_line (start -5 -12.5) (end 11 -12.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -5 12.5) (end 11 12.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -11 7.5) (end -5 7.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -11 -7.5) (end -11 7.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -11 -7.5) (end -5 -7.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start 11 12.5) (end 11 -12.5) (layer "F.SilkS") (width 0.12) )
        (pad 1 thru_hole circle (at -3 -10) (size 2.7 2.7) (drill 2.2) (layers *.Cu *.Mask))
        (pad 1 thru_hole circle (at -3 10) (size 2.7 2.7) (drill 2.2) (layers *.Cu *.Mask))
        (pad 1 thru_hole circle (at 8 -10) (size 2.7 2.7) (drill 2.2) (layers *.Cu *.Mask))
        (pad 1 thru_hole circle (at 8 10) (size 2.7 2.7) (drill 2.2) (layers *.Cu *.Mask))
        ${pins}
      )
    `
    return out
  }
}