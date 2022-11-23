module.exports = {
  params: {
    width: 5,
    height: 0.5
  },
  body: p => `
  (module "drillCut" 
    ${p.at}
    (layer "F.Cu")
    ( pad "" np_thru_hole oval (at 0 0) (size ${p.param.width} ${p.param.height}) (drill oval ${p.param.width} ${p.param.height}) (layers *.Mask) )
  )
`
}