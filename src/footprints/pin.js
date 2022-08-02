module.exports = {
  nets: {
    net: undefined
  },
  params: {
    shape: 'circle',
    size: 1.6,
    drill: 1.1
  },
  body: p => {
    return `(module pin (layer "F.Cu") (tedit 5F880A3E)
    ${p.at}
  (attr through_hole)
 

  (pad 1 thru_hole ${p.param.shape} (at 0 0) (size ${p.param.size} ${p.param.size}) (drill ${p.param.drill}) (layers *.Cu *.Mask) (zone_connect 2) ${p.net.net.str})
)
`
  }

}