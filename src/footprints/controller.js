module.exports = {
  nets: {
    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    VCC: 'VCC',

    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    VCC: 'VCC',
    F4: 'F4',
    F5: 'F5',
    F6: 'F6',
    F7: 'F7',
    B1: 'B1',
    B3: 'B3',
    B2: 'B2',
    B6: 'B6',
    D3: 'D3',
    D2: 'D2',
    D1: 'D1',
    D0: 'D0',
    D4: 'D4',
    C6: 'C6',
    D7: 'D7',
    E6: 'E6',
    B4: 'B4',
    B5: 'B5', 
    B7: 'B7',
    D5: 'D5',
    C7: 'C7',
    F1: 'F1',
    F0: 'F0'
  },
  params: {
    class: 'MCU',
    orientation: 'down',
    side: 'F',
    eliteC: false,
    niceNano: false
  },
  body: p => {
    const [ neg, pos ] = p.param.orientation == 'down' ? ['-', ''] : ['', '-']

    const niceNano = `
      (pad "27" thru_hole circle (at 8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C7.str})
      (pad "28" thru_hole circle (at 8.89 ${neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D5.str})
      (pad "29" thru_hole circle (at 8.89 ${neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B7.str})
    `

    const eliteC = `
      (pad "25" thru_hole circle (at 13.97 ${pos}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F0.str})
      (pad "26" thru_hole circle (at 13.97 ${pos}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F1.str})
      (pad "27" thru_hole circle (at 13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C7.str})
      (pad "28" thru_hole circle (at 13.97 ${neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D5.str})
      (pad "29" thru_hole circle (at 13.97 ${neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B7.str})
      `

    const body = `
    (module "CONTROLLER" (layer "F.Cu") (tedit 5BDF551E)
      ${p.at}
      (attr through_hole)
      (fp_text value "CONTROLLER" (at 0 0) (layer "F.SilkS") hide
        (effects (font (size 1.2 1.2) (thickness 0.2032)))
        (tstamp 41c89c8e-0f97-4797-9a39-8582a63268a5)
      )
     
      

 
      
      (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer "Dwgs.User") (width 0.2) (tstamp 3fce9cf2-f532-47a5-a866-cfa1b81d5b6e))
      (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer "Dwgs.User") (width 0.2) (tstamp 5527f1ed-3051-4d26-b710-5ff4d76a7a30))
      (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer "Dwgs.User") (width 0.2) (tstamp b00d80fd-bfac-486b-88f3-26d0a8aeeebb))
      (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer "Dwgs.User") (width 0.2) (tstamp f8c61750-5c0e-4749-ae24-a771253cc5da))


      (pad "1" thru_hole rect (at -13.97 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask)  ${p.net.RAW.str})
      (pad "2" thru_hole circle (at -11.43 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask)  ${p.net.GND.str})
      (pad "3" thru_hole circle (at -8.89 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask)  ${p.net.RST.str})
      (pad "4" thru_hole circle (at -6.35 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
      (pad "5" thru_hole circle (at -3.81 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F4.str})
      (pad "6" thru_hole circle (at -1.27 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F5.str})
      (pad "7" thru_hole circle (at 1.27 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F6.str})
      (pad "8" thru_hole circle (at 3.81 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F7.str})
      (pad "9" thru_hole circle (at 6.35 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B1.str})
      (pad "10" thru_hole circle (at 8.89 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B3.str})
      (pad "11" thru_hole circle (at 11.43 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B2.str})
      (pad "12" thru_hole circle (at 13.97 ${pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B6.str})
      
      (pad "13" thru_hole circle (at 13.97 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B5.str})
      (pad "14" thru_hole circle (at 11.43 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B4.str})
      (pad "15" thru_hole circle (at 8.89 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.E6.str})

      ${p.param.niceNano ? niceNano : ''}

      (pad "16" thru_hole circle (at 6.35 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D7.str})
      (pad "17" thru_hole circle (at 3.81 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C6.str})
      (pad "18" thru_hole circle (at 1.27 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D4.str})
      (pad "19" thru_hole circle (at -1.27 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D0.str})
      (pad "20" thru_hole circle (at -3.81 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D1.str})
      (pad "21" thru_hole circle (at -6.35 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
      (pad "22" thru_hole circle (at -8.89 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
      (pad "23" thru_hole circle (at -11.43 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D2.str})
      (pad "24" thru_hole circle (at -13.97 ${neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D3.str})

      ${p.param.eliteC ? eliteC : ''}

    )
`


    return body
  }
}