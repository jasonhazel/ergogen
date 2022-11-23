module.exports = {
  nets: {
    net: undefined
  },
  params: {
    class: 'dot',
    width: 0.25,
    height: 0.25,
    front: true,
    back: true,
  },
  body: p => {

    const layout = (toggle, side) => {
      if (!toggle) return ''
      return `(pad 1 smd circle (at 0 0 ${p.rot}) (size ${p.param.width} ${p.param.height}) (layers ${side}.Cu) ${p.net.net.str})`
    }

    return `
    
        (module dot (layer F.Cu) (tedit 5B24D78E)

            ${p.at /* parametric position */}


            ${layout(p.param.front, 'F')}
            ${layout(p.param.back, 'B')}
            
        )
    
        `
  }
}