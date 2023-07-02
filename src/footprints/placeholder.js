module.exports = {
  nets: {
    net: ''
  },
  params: {
    class: 'placeholder',
    override: null,
    width: 0.5,
    height: 0.5,
    side: 'F',
    value: null
  },
  body: p => {

    const layout = (toggle, side) => {
      if (!toggle) return ''
      return ``
    }

    return `
    
        (module ${p.param.class} (layer ${p.param.side}.Cu) (tedit 5B24D78E)

            ${p.at /* parametric position */}
            (fp_text reference "${p.param.override || p.ref}" (at 0 0 0) (layer "${p.param.side}.Fab")
              (effects (font (size 1 1) (thickness 0.15)))
            )

            (pad 1 smd circle (at 0 0 ${p.rot}) (size ${p.param.width} ${p.param.height}) (layers ${p.param.side}.Cu))
            
        )
    
        `
  }
}