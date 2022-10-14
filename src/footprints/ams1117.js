module.exports = {
  nets: {
    GND: 'GND',
    VOUT: '3V3',
    VIN: 'RAW'
  },
  params: {
    class: 'LDO',
    side: 'F',
    value: 'AMS1117-3.3'
  },
  body: p => {
    const model = '(model "${KICAD6_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SOT-223.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)) )'


    return `(module "SOT-223-3_TabPin2" (layer "${p.param.side}.Cu")
    ${p.at}
    (fp_text reference "${p.ref}" (at 0 -4.5 ${p.rot}) (layer "${p.param.side}.SilkS") hide
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "${p.param.value}" (at 0 4.5 ${p.rot}) (layer "${p.param.side}.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (fp_line (start -4.1 -3.41) (end 1.91 -3.41) (layer "${p.param.side}.SilkS") (width 0.12) )
    (fp_line (start 1.91 -3.41) (end 1.91 -2.15) (layer "${p.param.side}.SilkS") (width 0.12) )
    (fp_line (start -1.85 3.41) (end 1.91 3.41) (layer "${p.param.side}.SilkS") (width 0.12) )
    (fp_line (start 1.91 3.41) (end 1.91 2.15) (layer "${p.param.side}.SilkS") (width 0.12) )
    (fp_line (start -4.4 -3.6) (end -4.4 3.6) (layer "${p.param.side}.CrtYd") (width 0.05) )
    (fp_line (start 4.4 -3.6) (end -4.4 -3.6) (layer "${p.param.side}.CrtYd") (width 0.05) )
    (fp_line (start 4.4 3.6) (end 4.4 -3.6) (layer "${p.param.side}.CrtYd") (width 0.05) )
    (fp_line (start -4.4 3.6) (end 4.4 3.6) (layer "${p.param.side}.CrtYd") (width 0.05) )
    (fp_line (start -1.85 3.35) (end 1.85 3.35) (layer "${p.param.side}.Fab") (width 0.1) )
    (fp_line (start -1.85 -2.35) (end -0.85 -3.35) (layer "${p.param.side}.Fab") (width 0.1) )
    (fp_line (start -1.85 -2.35) (end -1.85 3.35) (layer "${p.param.side}.Fab") (width 0.1) )
    (fp_line (start 1.85 -3.35) (end 1.85 3.35) (layer "${p.param.side}.Fab") (width 0.1) )
    (fp_line (start -0.85 -3.35) (end 1.85 -3.35) (layer "${p.param.side}.Fab") (width 0.1) )
    (pad "1" smd rect (at -3.15 -2.3 ${p.rot}) (size 2 1.5) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.GND.str})
    (pad "" smd rect (at 3.15 0 ${p.rot}) (size 2 3.8) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") )
    (pad "2" smd rect (at -3.15 0 ${p.rot}) (size 2 1.5) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.VOUT.str})
    (pad "3" smd rect (at -3.15 2.3 ${p.rot}) (size 2 1.5) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.VIN.str})
        
    ${model}
    )
  `
  }
}