module.exports = {
  nets: {
    to: '',
    from: ''
  },
  params: {
    class: 'R',
    side: 'F',
    value: '4k7'
  },
  body: p => {
    const model = '  (model "${KICAD6_3DMODEL_DIR}/Resistor_SMD.3dshapes/R_0805_2012Metric.wrl" (offset(xyz 0 0 0)) (scale(xyz 1 1 1)) (rotate(xyz 0 0 0)) ) '

    return `
    (module "R_0805_2012Metric_Pad1.20x1.40mm_HandSolder" (layer "${p.param.side}.Cu") 
      ${p.at}
      (fp_text reference "${p.ref}" (at 0 -1.65 ${p.rot}) (layer "${p.param.side}.SilkS") hide
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value "${p.param.value}" (at 0 1.65 ${p.rot}) (layer "${p.param.side}.Fab")
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (layer "${p.param.side}.SilkS") (width 0.12) )
      (fp_line (start -0.227064 -0.735) (end 0.227064 -0.735) (layer "${p.param.side}.SilkS") (width 0.12) )
      (fp_line (start 1.85 -0.95) (end 1.85 0.95) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start 1.85 0.95) (end -1.85 0.95) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start -1.85 0.95) (end -1.85 -0.95) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start 1 0.625) (end -1 0.625) (layer "${p.param.side}.Fab") (width 0.1) )
      (fp_line (start -1 0.625) (end -1 -0.625) (layer "${p.param.side}.Fab") (width 0.1) )
      (fp_line (start 1 -0.625) (end 1 0.625) (layer "${p.param.side}.Fab") (width 0.1))
      (fp_line (start -1 -0.625) (end 1 -0.625) (layer "${p.param.side}.Fab") (width 0.1) )

      (pad "1" smd rect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.to.str})
      (pad "2" smd rect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.from.str})
      (pad 1 thru_hole circle (at -1 0 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.to.str})
      (pad 2 thru_hole circle (at 1 0 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.from.str})
      ${model}
      )`
  }
}