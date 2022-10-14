module.exports = {
  nets: { 
    to: '',
    from: ''
  },
  params: {
    class: 'C',
    side: 'F',
    value: ''
  },
  body: p => {
    const model = '(model "${KICAD6_3DMODEL_DIR}/Capacitor_SMD.3dshapes/C_0805_2012Metric.wrl" (offset(xyz 0 0 0)) (scale(xyz 1 1 1)) (rotate(xyz 0 0 0)) ) '

    return `(footprint "C_0805_2012Metric_Pad1.18x1.45mm_HandSolder" (layer "${p.param.side}.Cu")
      ${p.at}
      (fp_text reference "${p.ref}" (at 0 -1.68 ${p.rot}) (layer "${p.param.side}.SilkS") hide
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value "${p.param.value}" (at 0 1.68 ${p.rot}) (layer "${p.param.side}.Fab")
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (fp_line (start -0.261252 -0.735) (end 0.261252 -0.735) (layer "${p.param.side}.SilkS") (width 0.12) )
      (fp_line (start -0.261252 0.735) (end 0.261252 0.735) (layer "${p.param.side}.SilkS") (width 0.12) )
      (fp_line (start 1.88 -0.98) (end 1.88 0.98) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start 1.88 0.98) (end -1.88 0.98) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start -1.88 -0.98) (end 1.88 -0.98) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start -1.88 0.98) (end -1.88 -0.98) (layer "${p.param.side}.CrtYd") (width 0.05) )
      (fp_line (start -1 -0.625) (end 1 -0.625) (layer "${p.param.side}.Fab") (width 0.1) )
      (fp_line (start 1 0.625) (end -1 0.625) (layer "${p.param.side}.Fab") (width 0.1) )
      (fp_line (start 1 -0.625) (end 1 0.625) (layer "${p.param.side}.Fab") (width 0.1) )
      (fp_line (start -1 0.625) (end -1 -0.625) (layer "${p.param.side}.Fab") (width 0.1) )

      (pad "1" smd roundrect (at -1.0375 0 ${p.rot}) (size 1.175 1.45) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.212766) ${p.net.to.str})
      (pad "2" smd roundrect (at 1.0375 0 ${p.rot}) (size 1.175 1.45) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.212766) ${p.net.from.str})
      ${model}
    )`
  }
}