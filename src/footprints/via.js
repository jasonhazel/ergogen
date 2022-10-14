// Via
// Nets
//		net: the net this via should be connected to

module.exports = {
    nets: {
      net: undefined
    },
    body: p => `
      (module VIA-0.6mm (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}


      ${'' /* via */}
      (pad 1 thru_hole circle (at 0 0) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.net.str})
      )
    `
}