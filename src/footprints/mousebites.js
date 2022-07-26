module.exports = {
  nets: [],
  params: {},
  body: p => {
    return `(module mousebites (layer "F.Cu") (tedit 5B90EF0D)
    ${p.at}
  (attr through_hole)

  (fp_line (start -2.794 0) (end 2.794 0) (layer "Dwgs.User") (width 0.15) (tstamp 9f680a18-1241-4418-aadb-0c206c9b1e25))
  (pad "" np_thru_hole circle (at -2.54 -0.254) (size 0.7874 0.7874) (drill 0.7874) (layers *.Cu *.Mask) (tstamp 0e5c956a-0664-4fcf-9bb1-1eae993c2225))
  (pad "" np_thru_hole circle (at 1.27 -0.254) (size 0.7874 0.7874) (drill 0.7874) (layers *.Cu *.Mask) (tstamp 538ab23b-56dc-41b1-84f0-d71d488e9061))
  (pad "" np_thru_hole circle (at 0 -0.254) (size 0.7874 0.7874) (drill 0.7874) (layers *.Cu *.Mask) (tstamp 9a1ee4ae-e660-49f2-995b-2f9e786a47d2))
  (pad "" np_thru_hole circle (at 2.54 -0.254) (size 0.7874 0.7874) (drill 0.7874) (layers *.Cu *.Mask) (tstamp b4877e61-d908-4a92-9ac0-5dfa5a23f7e8))
  (pad "" np_thru_hole circle (at -1.27 -0.254) (size 0.7874 0.7874) (drill 0.7874) (layers *.Cu *.Mask) (tstamp f35b2073-882e-4ac0-9440-1e7208b06a2e))
)
`
  }
}