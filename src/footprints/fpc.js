module.exports = {
  nets: {
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    F: '',
    G: '',
    H: '',
    I: '',
    J: '',
    K: '',
    L: '',
    GND: 'GND'

  },
  params: {
    class: 'FPC',
    side: 'F',
  },
  body: p => {

    const [neg, pos] = p.param.side == 'F' ? ['-', ''] : ['', '-']

    return `
    (module "FPC-SMD_FPC05012-09200-.5mm-rev" (layer "${p.param.side}.Cu") (tedit 61D55FDD)
      ${p.at}
      (fp_text reference "${p.ref}" (at -0.232 -2.448 ${p.rot}) (layer "F.SilkS") hide (effects (font (size 1.143 1.143) (thickness 0.152)) (justify right)))
      (fp_text value "Conn_01x12_Female" (at -0.232 -4.226 ${p.rot}) (layer "F.Fab") hide (effects (font (size 1.143 1.143) (thickness 0.152)) (justify right)))
      (fp_text user "C479750" (at 0 0 ${p.rot}) (layer "Cmts.User") (effects (font (size 1 1) (thickness 0.15))) )

      (fp_line (start -5.5 4.971) (end -5.5 2.588) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_line (start 5.5 -1.524) (end 3.131 -1.524) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_line (start 5.5 4.971) (end -5.5 4.971) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_line (start -5.5 -1.524) (end -3.131 -1.524) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_line (start 5.5 4.971) (end 5.5 2.588) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_line (start 5.5 0.137) (end 5.5 -1.524) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_line (start -5.5 0.137) (end -5.5 -1.524) (layer "${p.param.side}.SilkS") (width 0.254))
      (fp_circle (center -3.429 -2.032) (end -3.302 -2.032) (layer "${p.param.side}.SilkS") (width 0.254) (fill none))

      (pad "A" smd rect (at ${neg}2.75 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.A.str})
      (pad "B" smd rect (at ${neg}2.25 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.B.str})
      (pad "C" smd rect (at ${neg}1.75 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.C.str})
      (pad "D" smd rect (at ${neg}1.25 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.D.str})
      (pad "E" smd rect (at ${neg}0.75 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.E.str})
      (pad "F" smd rect (at ${neg}0.25 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.F.str})
      (pad "G" smd rect (at ${pos}0.25 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.G.str})
      (pad "H" smd rect (at ${pos}0.75 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.H.str})
      (pad "I" smd rect (at ${pos}1.25 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.I.str})
      (pad "J" smd rect (at ${pos}1.75 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.J.str})
      (pad "K" smd rect (at ${pos}2.25 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.K.str})
      (pad "L" smd rect (at ${pos}2.75 -1.362 ${p.rot}) (size 0.28 1.25) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.L.str})


      (pad "13" smd rect (at 4.55 1.362) (size 1.8 2) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.GND.str})
      (pad "14" smd rect (at -4.55 1.362) (size 1.8 2) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.GND.str}))`
  }
}