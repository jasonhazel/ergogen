module.exports = {
  params: {
    side: 'F',
    text: '',
    h_size: 1,
    v_size: 1,
    thickness: 0.15,
    justify: null,
    layer: 'SilkS'
  },
  body: p => {
    justify = p.param.justify && `(justify ${p.param.justify})` || '';
    // const mirror = p.param.side != 'F' ? 'mirror' : ''
    return `
            (gr_text "${p.param.text}" ${p.at} (layer ${p.param.side}.${p.param.layer})
                (effects (font (size ${p.param.h_size} ${p.param.v_size}) (thickness ${p.param.thickness})) ${justify})
            )
        `
  }
}