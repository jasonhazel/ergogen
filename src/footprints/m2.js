module.exports = {
  params: {
    size: '4.4'
  },
  body: p => {
    return `(module M2 (layer "F.Cu") (tedit 5F880A3E)
    ${p.at}
  (attr through_hole)
 

  (pad "1" thru_hole circle (at 0 0) (size ${p.param.size} ${p.param.size}) (drill 2.2) (layers *.Cu *.Mask) (tstamp 41c9d83b-325c-4159-a170-61d8654be338))
)
`
  }

}