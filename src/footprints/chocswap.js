module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'SW',
    width: 1
  },
  body: p => {
    const template = `
(module "Kailh_socket_PG1350" (layer "F.Cu")

  ${p.at}

  (fp_text reference "${p.ref}" (at -5 -2) (layer "B.Fab")
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))    
  )

  (fp_line (start -2.5 1.5) (end -7 1.5) (layer "B.SilkS") (width 0.15) )
  (fp_line (start 1.5 3.7) (end -1 3.7) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -7 1.5) (end -7 2) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -2.5 2.2) (end -2.5 1.5) (layer "B.SilkS") (width 0.15) )
  (fp_line (start 2 4.2) (end 1.5 3.7) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -7 6.2) (end -2.5 6.2) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -1.5 8.2) (end -2 7.7) (layer "B.SilkS") (width 0.15) )
  (fp_line (start 2 7.7) (end 1.5 8.2) (layer "B.SilkS") (width 0.15) )
  (fp_line (start 1.5 8.2) (end -1.5 8.2) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -2 6.7) (end -2 7.7) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -7 5.6) (end -7 6.2) (layer "B.SilkS") (width 0.15) )
  (fp_line (start -7 7) (end -7 6) (layer "F.SilkS") (width 0.15) )
  (fp_line (start 7 6) (end 7 7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start 7 -7) (end 7 -6) (layer "F.SilkS") (width 0.15) )
  (fp_line (start 7 7) (end 6 7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start -7 -6) (end -7 -7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start 6 7) (end 7 7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start -6 -7) (end -7 -7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start -7 7) (end -6 7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start 7 -7) (end 6 -7) (layer "F.SilkS") (width 0.15) )
  (fp_line (start -6.9 6.9) (end -6.9 -6.9) (layer "Eco2.User") (width 0.15) )
  (fp_line (start 2.6 -6.3) (end -2.6 -6.3) (layer "Eco2.User") (width 0.15) )
  (fp_line (start 6.9 -6.9) (end 6.9 6.9) (layer "Eco2.User") (width 0.15) )
  (fp_line (start -6.9 6.9) (end 6.9 6.9) (layer "Eco2.User") (width 0.15) )
  (fp_line (start 6.9 -6.9) (end -6.9 -6.9) (layer "Eco2.User") (width 0.15) )
  (fp_line (start -2.6 -3.1) (end -2.6 -6.3) (layer "Eco2.User") (width 0.15) )
  (fp_line (start 2.6 -3.1) (end 2.6 -6.3) (layer "Eco2.User") (width 0.15) )
  (fp_line (start -2.6 -3.1) (end 2.6 -3.1) (layer "Eco2.User") (width 0.15) )
  (fp_line (start -1.5 8.2) (end -2 7.7) (layer "B.Fab") (width 0.15) )
  (fp_line (start -9.5 2.5) (end -7 2.5) (layer "B.Fab") (width 0.12) )
  (fp_line (start -2.5 1.5) (end -7 1.5) (layer "B.Fab") (width 0.15) )
  (fp_line (start 1.5 8.2) (end -1.5 8.2) (layer "B.Fab") (width 0.15) )
  (fp_line (start 2 4.75) (end 4.5 4.75) (layer "B.Fab") (width 0.12) )
  (fp_line (start 4.5 4.75) (end 4.5 7.25) (layer "B.Fab") (width 0.12) )
  (fp_line (start 4.5 7.25) (end 2 7.25) (layer "B.Fab") (width 0.12) )
  (fp_line (start -9.5 5) (end -9.5 2.5) (layer "B.Fab") (width 0.12) )
  (fp_line (start 1.5 3.7) (end -1 3.7) (layer "B.Fab") (width 0.15) )
  (fp_line (start -7 5) (end -9.5 5) (layer "B.Fab") (width 0.12) )
  (fp_line (start -7 6.2) (end -2.5 6.2) (layer "B.Fab") (width 0.15) )
  (fp_line (start -2.5 2.2) (end -2.5 1.5) (layer "B.Fab") (width 0.15) )
  (fp_line (start 2 4.2) (end 1.5 3.7) (layer "B.Fab") (width 0.15) )
  (fp_line (start 2 4.25) (end 2 7.7) (layer "B.Fab") (width 0.12) )
  (fp_line (start -7 1.5) (end -7 6.2) (layer "B.Fab") (width 0.12) )
  (fp_line (start -2 6.7) (end -2 7.7) (layer "B.Fab") (width 0.15) )
  (fp_line (start 2 7.7) (end 1.5 8.2) (layer "B.Fab") (width 0.15) )
  (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer "F.Fab") (width 0.15) )
  (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer "F.Fab") (width 0.15) )
  (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer "F.Fab") (width 0.15) )
  (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer "F.Fab") (width 0.15) )
  (fp_line (start ${-9 * p.param.width} -8.5) (end ${9 * p.param.width} -8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start ${9 * p.param.width} -8.5) (end ${9 * p.param.width} 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start ${9 * p.param.width} 8.5) (end ${-9 * p.param.width} 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start ${-9 * p.param.width} 8.5) (end ${-9 * p.param.width} -8.5) (layer Dwgs.User) (width 0.15))
  (pad "" np_thru_hole circle (at -5 3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask) )
  (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) )
  (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask) )
  (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) )
  (pad "" np_thru_hole circle (at 0 5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask) )
  (pad "" np_thru_hole circle (at 5.22 -4.2) (size 0.9906 0.9906) (drill 0.9906) (layers *.Cu *.Mask) )
  (pad "1" smd rect (at 3.275 5.95 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.from.str})
  (pad "2" smd rect (at -8.275 3.75 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.to.str})
)
`



    return template
  }
}