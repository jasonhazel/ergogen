module.exports = {
  nets: {
    colnet: undefined,
    colrow: undefined,
    rownet: undefined
  },
  params: {
    keycaps: false,
    hideRow: false,
    hideCol: false,
    endCol: false
  },
  body: p => {
    console.log(p.param.hideCol, p.param.hideRow)
    const keycap = `
(fp_line (start -9 8.5) (end -9 -8.5) (layer "Dwgs.User") (width 0.15) (tstamp c8fb0e8c-a702-4abf-8afe-bedb64abe0e1))
(fp_line (start 9 -8.5) (end 9 8.5) (layer "Dwgs.User") (width 0.15) (tstamp facfc131-66c7-4b5b-b59f-7d81e0c94438))
(fp_line (start -9 -8.5) (end 9 -8.5) (layer "Dwgs.User") (width 0.15) (tstamp 3bb6370c-713d-4d7f-8232-809c9ec621ba))
(fp_line (start 9 8.5) (end -9 8.5) (layer "Dwgs.User") (width 0.15) (tstamp 5880b9b0-aa32-4505-8669-deb95429be37))
    `

    const row = `
(pad "3" smd circle (at 8.4375 -7.877499) (size 0.3 0.3) (layers "F.Cu") ${p.net.rownet.str})
(pad "3" smd rect (at 0.35625 -7.877499 ${270 + p.rot}) (size 0.3 16.1625) (layers "F.Cu") ${p.net.rownet.str})
(pad "3" thru_hole circle (at -7.725 -7.877499) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${p.net.rownet.str})
`

    const col = `
(pad "2" smd circle (at -8.625 10.025) (size 0.3 0.3) (layers "B.Cu") ${p.net.colnet.str})
(pad "2" smd rect (at -8.625 1.49375 ${p.rot}) (size 0.3 17.0625) (layers "B.Cu")  ${p.net.colnet.str})
`

    const endCol = `
    (pad "2" smd rect (at -8.625 -1.85 ${p.rot}) (size 0.3 10.25) (layers "B.Cu") ${p.net.colnet.str})
    (pad "2" thru_hole circle (at -8.625 3.275) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${p.net.colnet.str})
    `

    const standard = `(module "PG1350rev" (layer "F.Cu")
    ${p.at}
    (fp_text reference "${p.ref}" (at 0 0) (layer "F.SilkS") ${p.ref_hide}
      (effects (font (size 1.27 1.27) (thickness 0.15)))
    )


  (fp_line (start 8.3875 -5.3875) (end 7.5875 -5.3875) (layer "B.SilkS") (width 0.1) (tstamp 3675f25e-5ff8-42b4-acc3-650a7bd6ab8f))
  (fp_line (start 7.9875 -5.9875) (end 8.3875 -5.3875) (layer "B.SilkS") (width 0.1) (tstamp 4f122230-c25e-4538-b969-3bf6036d60bb))
  (fp_line (start 7.9875 -6.3875) (end 7.9875 -5.9875) (layer "B.SilkS") (width 0.1) (tstamp 68fb45c6-3868-4deb-9a5d-cb35c88042f1))
  (fp_line (start 7.9875 -5.9875) (end 8.5375 -5.9875) (layer "B.SilkS") (width 0.1) (tstamp 6f981731-c3ba-4063-a78a-298ae4928d35))
  (fp_line (start 7.9875 -5.3875) (end 7.9875 -4.8875) (layer "B.SilkS") (width 0.1) (tstamp 7a477314-2391-401b-908d-3c76caf973a5))
  (fp_line (start 7.9875 -5.9875) (end 7.4375 -5.9875) (layer "B.SilkS") (width 0.1) (tstamp b5f782af-38fb-4125-afda-d9b531a3b5db))
  (fp_line (start 7.5875 -5.3875) (end 7.9875 -5.9875) (layer "B.SilkS") (width 0.1) (tstamp f5756753-a0c7-4f3a-8eeb-8b32aa2af08e))
  
  (fp_line (start 7.9875 -5.9875) (end 7.4375 -5.9875) (layer "F.SilkS") (width 0.1) (tstamp 3751595f-15d4-4887-84f0-83a062670f9c))
  (fp_line (start 7.9875 -5.9875) (end 8.3875 -5.3875) (layer "F.SilkS") (width 0.1) (tstamp 3d46c041-56e9-4ac4-9841-b3a2c0f4e45e))
  (fp_line (start 7.9875 -5.3875) (end 7.9875 -4.8875) (layer "F.SilkS") (width 0.1) (tstamp 47cdf3be-aa0f-41b7-8541-8035650069a2))
  (fp_line (start 7.9875 -6.3875) (end 7.9875 -5.9875) (layer "F.SilkS") (width 0.1) (tstamp 49d4c661-7673-4e6e-9581-1a27ac7550ca))
  (fp_line (start 7.5875 -5.3875) (end 7.9875 -5.9875) (layer "F.SilkS") (width 0.1) (tstamp 68a9194d-745f-4786-a0ea-7f312c1b598d))
  (fp_line (start 7.9875 -5.9875) (end 8.5375 -5.9875) (layer "F.SilkS") (width 0.1) (tstamp ca8269a4-8927-4bd6-8b4c-5cbd96711c84))
  (fp_line (start 8.3875 -5.3875) (end 7.5875 -5.3875) (layer "F.SilkS") (width 0.1) (tstamp f0456bfc-c183-47bc-89a4-deb68d537bfb))
  
  (fp_line (start 6 7) (end 7 7) (layer "Dwgs.User") (width 0.15) (tstamp 148d4173-b063-4b10-8a8d-efdde1f30322))
  (fp_line (start -7 7) (end -6 7) (layer "Dwgs.User") (width 0.15) (tstamp 291d9785-819b-4ab3-8871-6887bb427f84))
  (fp_line (start -7 -6) (end -7 -7) (layer "Dwgs.User") (width 0.15) (tstamp 2e74c5cf-df21-4ecb-90c2-e2781152c95b))
  (fp_line (start 7 -7) (end 7 -6) (layer "Dwgs.User") (width 0.15) (tstamp 69814d9b-0367-4de8-9718-43b37031d240))
  (fp_line (start -6 -7) (end -7 -7) (layer "Dwgs.User") (width 0.15) (tstamp 72596630-6f62-446b-a788-e57836f8a3c1))
  (fp_line (start 7 6) (end 7 7) (layer "Dwgs.User") (width 0.15) (tstamp 792df31f-d7c8-4ab7-9004-848451dfcc4f))
  (fp_line (start 7 -7) (end 6 -7) (layer "Dwgs.User") (width 0.15) (tstamp b57691ac-45e2-4fef-b67e-be0698b53c0a))
  (fp_line (start -7 7) (end -7 6) (layer "Dwgs.User") (width 0.15) (tstamp bac0882a-cd95-40e5-bcae-36dd00c1e400))
  
  ${p.param.keycaps ? keycap : '' }
  
  ${'' /* middle shaft */ }
  (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) (tstamp 397c7179-11c5-4ba2-8026-b27a0edfc173))
  
  ${'' /* stabilizers */}
  (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask) (tstamp 4d24f783-afb0-42a0-9683-e8b59325e024))
  (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) (tstamp 611b89fe-c54b-4f54-9b17-d4142ae633a4))


  (pad "1" thru_hole circle (at -5 -3.8) (size 2.75 2.75) (drill 1.5) (layers *.Cu "F.Mask") ${p.net.colrow.str})
  (pad "1" smd rect (at 7.9875 -3.9875 ${p.rot}) (size 1.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.colrow.str})
  (pad "1" smd rect (at 2.175 -3.39 ${270 + p.rot}) (size 0.3 12.525) (layers "F.Cu") ${p.net.colrow.str})
  (pad "1" smd rect (at 7.9875 -3.9875 ${p.rot}) (size 1.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.colrow.str})
  (pad "1" smd circle (at 8.4375 -3.39) (size 0.3 0.3) (layers "F.Cu") ${p.net.colrow.str})
  (pad "1" thru_hole circle (at 7.9875 -3.9875) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.colrow.str})
  (pad "1" thru_hole circle (at 5 -3.8) (size 2.75 2.75) (drill 1.5) (layers *.Cu "B.Mask") ${p.net.colrow.str})

  (pad "2" thru_hole circle (at 0 -5.9) (size 2.75 2.75) (drill 1.5) (layers *.Cu *.Mask) ${p.net.colnet.str})
  (pad "2" smd rect (at -4.3125 -6.975 ${270 + p.rot}) (size 0.3 8.625) (layers "B.Cu") ${p.net.colnet.str})
  (pad "2" thru_hole circle (at -8.625 -6.975) (size 0.6 0.6) (drill 0.3) (layers *.Cu) ${p.net.colnet.str})
  ${p.param.endCol ? endCol : (p.param.hideCol ? '' : col) }

  (pad "3" smd rect (at 7.9875 -7.2875 ${p.rot}) (size 1.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") ${p.net.rownet.str})
  (pad "3" smd rect (at 7.9875 -7.2875 ${p.rot}) (size 1.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") ${p.net.rownet.str})
  (pad "3" thru_hole circle (at 7.9875 -7.2875) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.rownet.str})
  ${p.param.hideRow ? '' : row }
)
    
`

    return standard
  }
}