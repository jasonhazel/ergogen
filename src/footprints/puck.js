module.exports = {
  body: p => {
    return `(module TentingPuck (layer "F.Cu") (tedit 5F880A3E)
    ${p.at}
  (attr through_hole)
 
  (fp_circle (center 0 0) (end 20.55 0) (layer "B.CrtYd") (width 0.55) (fill none) (tstamp e3555261-a740-4515-927d-081f80927a1e))
  (pad "1" thru_hole circle (at 0 -19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp 41c9d83b-325c-4159-a170-61d8654be338))
  (pad "1" thru_hole circle (at 0 19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp 791ea4b7-679d-45c3-8cdb-916195bb4645))
  (pad "1" thru_hole circle (at -19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp b881f8df-69a1-4292-9fbe-8bfeca01494b))
  (pad "1" thru_hole circle (at 19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) (tstamp f304d519-f54a-4b52-8adc-0c6d0e1c172a))
)
`
  }
  
}