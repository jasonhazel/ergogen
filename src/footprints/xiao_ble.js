module.exports = {
  nets: {
    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    BAT: 'BAT',
    '3V3': '3V3',
    D0: 'D0',
    D1: 'D1',
    D2: 'D2',
    D3: 'D3',
    D4: 'D4',
    D5: 'D5',
    D6: 'D6',
    D7: 'D7',
    D8: 'D8',
    D9: 'D9',
    D10: 'D10',
  },
  params: {
    class: "XIAO",
    battery: true,
    reset: true
  },
  body: p => `(footprint "xiao-ble-tht" 
  (layer "F.Cu")
  ${p.at /* parametric position */}
  
  (attr smd exclude_from_pos_files)
  (fp_text reference "${p.ref}" (at 0 0) (layer "F.SilkS")  ${p.ref_hide}  (effects (font (size 0.889 0.889) (thickness 0.1016))) )

  (fp_line (start -8.89 10.5) (end -8.89 9.5) (layer F.SilkS) (width 0.15))
  (fp_line (start -8.89 10.5) (end -7.89 10.5) (layer F.SilkS) (width 0.15))
  (fp_line (start 8.89 10.5) (end 8.89 9.5) (layer F.SilkS) (width 0.15))
  (fp_line (start 8.89 10.5) (end 7.89 10.5) (layer F.SilkS) (width 0.15))

  (fp_line (start -8.89 -10.5) (end -8.89 -9.5) (layer F.SilkS) (width 0.15))
  (fp_line (start -8.89 -10.5) (end -7.89 -10.5) (layer F.SilkS) (width 0.15))
  (fp_line (start 8.89 -10.5) (end 8.89 -9.5) (layer F.SilkS) (width 0.15))
  (fp_line (start 8.89 -10.5) (end 7.89 -10.5) (layer F.SilkS) (width 0.15))


  (pad "1" thru_hole oval (at -7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D0.str})
  (pad "2" thru_hole oval (at -7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D1.str})
  (pad "3" thru_hole oval (at -7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D2.str})
  (pad "4" thru_hole oval (at -7.62 0 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D3.str})
  (pad "5" thru_hole oval (at -7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D4.str})
  (pad "6" thru_hole oval (at -7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D5.str})
  (pad "7" thru_hole oval (at -7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D6.str})
  (pad "8" thru_hole oval (at 7.62 7.62  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D7.str})
  (pad "9" thru_hole oval (at 7.62 5.08  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D8.str})
  (pad "10" thru_hole oval (at 7.62 2.54  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D9.str})
  (pad "11" thru_hole oval (at 7.62 0  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.D10.str})
  (pad "12" thru_hole oval (at 7.62 -2.54  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net['3V3'].str})
  (pad "13" thru_hole oval (at 7.62 -5.08  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.GND.str})
  (pad "14" thru_hole oval (at 7.62 -7.62  ${180 - p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask)  ${p.net.RAW.str})
  ${p.param.reset ? `(pad "17" thru_hole circle (at -1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask)  ${p.net.RST.str})` : ''}
  ${p.param.battery ? `(pad "19" thru_hole circle (at -4.445 -0.317  ${180 - p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask)  ${p.net.BAT.str})` : ''}
)
`
}