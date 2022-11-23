module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'D',
        side: 'both',
        tht: true,
        via: false,
        padSize: 0.9,

    },
    body: p => {
        const side = p.param.side == 'back' ? 'B' : 'F'
        const model = '  (model "${KICAD6_3DMODEL_DIR}/Diode_SMD.3dshapes/D_SOD-123F.wrl" (offset(xyz 0 0 0)) (scale(xyz 1 1 1)) (rotate(xyz 0 0 0)) ) '
        const standard = `module ComboDiode (layer ${side}.Cu) (tedit 5B24D78E)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        ${''/* diode symbols */}
    `


        const front = `
        (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (pad 1 smd rect(at -1.65 0 ${ p.rot})(size ${p.param.padSize} 1.2)(layers F.Cu F.Paste F.Mask) ${p.net.to.str})
        (pad 2 smd rect(at 1.65 0 ${p.rot})(size ${p.param.padSize} 1.2)(layers F.Cu F.Paste F.Mask) ${p.net.from.str })
        `
        
        const back = `
    
        (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))        
        (pad 1 smd rect(at -1.65 0 ${p.rot})(size ${p.param.padSize} 1.2)(layers B.Cu B.Paste B.Mask) ${p.net.to.str})
        (pad 2 smd rect(at 1.65 0 ${p.rot})(size ${p.param.padSize} 1.2)(layers B.Cu B.Paste B.Mask) ${p.net.from.str })`

        const throughhole = `
        (pad 2 thru_hole circle (at 3.81 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.from.str})
        (pad 1 thru_hole rect (at -3.81 0 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.to.str})
        `

        const via = `
        (pad 2 thru_hole circle (at 2.35 0) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.from.str})
        (pad 1 thru_hole circle (at -2.35 0) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.to.str})
        `
        return `(${standard}
            ${p.param.side == 'front' || p.param.side == 'both' ? front : '' }
            ${p.param.side == 'back' || p.param.side == 'both' ? back : '' }
            ${p.param.tht == true ? throughhole : ''}
            ${p.param.via == true ? via : ''}
            ${model}
        )`

        return compiled
    },
//     body: p => `
  
//     (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


//         ${p.at /* parametric position */}

//         ${'' /* footprint reference */}
//         (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
//         (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
//         ${''/* diode symbols */}
//         (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
//         (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
//         (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
//         (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
//         (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
//         (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
//         (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
//         (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
//         (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
//         (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
//         (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
//         (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
//         (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
//         (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))
    
//         ${''/* SMD pads on both sides */}
//         (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})
//         (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.from.str})
//         (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
//         (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.from.str})
        
//         ${''/* THT terminals */}
//         (pad 1 thru_hole circle (at 3.81 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.from.str})
//         (pad 2 thru_hole rect (at -3.81 0 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.to.str})
//     )
  
//     `
}