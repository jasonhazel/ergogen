module.exports = {
  params: {
    drill: 2.2,
    pad: 2.5
  },
  body: p => {
    return `(module DrillHole (layer "F.Cu") (tedit 5F880A3E)
    ${p.at}
  (pad "" thru_hole circle (at 0 0) (size ${p.param.pad} ${p.param.pad}) (drill ${p.param.drill}) (layers *.Cu *.Mask) (tstamp 41c9d83b-325c-4159-a170-61d8654be338))
)
`
  }

}