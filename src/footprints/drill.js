module.exports = {
  params: {
    size: 2.2,
  },
  body: p => {
    return `(module DrillHole (layer "F.Cu") (tedit 5F880A3E)
    ${p.at}
  (pad "" np_thru_hole circle (at 0 0) (size ${p.param.size} ${p.param.size}) (drill ${p.param.size}) (layers *.Cu *.Mask) )
)
`
  }

}