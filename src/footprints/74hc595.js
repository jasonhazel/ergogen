module.exports = {
  nets: {
    VCC: 'VCC',
    GND: 'GND',
    MOSI: 'MOSI',
    MISO: 'MISO',
    SCK: 'SCK',
    SCLR: 'VCC',
    OE: 'GND',
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    F: '',
    G: '',
    H: '',
  },
  params: {
    class: 'SR'
  },
  body: p => {
    return `(
      module "74HC595_SOIC-16_3.9x9.9mm_P1.27mm"
      
      ${p.at}
      (fp_text reference "74HC595" (at 5.9 0 270) (layer "B.Fab")
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value "" (at -5.9 0 270) (layer "B.Fab")
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (fp_text user "${p.ref}" (at 0 0 270) (layer "B.Fab")
        (effects (font (size 0.98 0.98) (thickness 0.15)) (justify mirror))
      )

      (fp_line (start 5.06 0) (end 5.06 3.45) (layer "B.SilkS") (width 0.12) (tstamp 4b4e7679-acd2-4382-b146-320233504a7f))
      (fp_line (start -5.06 0) (end -5.06 1.95) (layer "B.SilkS") (width 0.12) (tstamp bb4dbbaa-4b5d-4e6d-8c43-1b8be9dab861))
      (fp_line (start -5.06 0) (end -5.06 -1.95) (layer "B.SilkS") (width 0.12) (tstamp bcd658cb-5289-4019-8d06-04898f56833f))
      (fp_line (start 5.06 0) (end 5.06 -1.95) (layer "B.SilkS") (width 0.12) (tstamp cffab4f5-85f3-407b-a649-74bb72009e9b))
      (fp_line (start 5.2 -3.7) (end 5.2 3.7) (layer "B.CrtYd") (width 0.05) (tstamp 206fa646-d4f1-47db-8708-f40ae9f3e078))
      (fp_line (start -5.2 -3.7) (end 5.2 -3.7) (layer "B.CrtYd") (width 0.05) (tstamp 2ce31869-dfa4-442d-b82c-c59ac0baaa21))
      (fp_line (start 5.2 3.7) (end -5.2 3.7) (layer "B.CrtYd") (width 0.05) (tstamp 3f27385f-cbe1-45c9-ac9a-1c2672a2a35d))
      (fp_line (start -5.2 3.7) (end -5.2 -3.7) (layer "B.CrtYd") (width 0.05) (tstamp f5606098-a4b5-4eeb-9fa5-f9d99a2e7a01))
      (fp_line (start 3.975 1.95) (end 4.95 0.975) (layer "B.Fab") (width 0.1) (tstamp 685627e1-adcc-4b77-be91-0aa88724d2a5))
      (fp_line (start -4.95 -1.95) (end -4.95 1.95) (layer "B.Fab") (width 0.1) (tstamp 84774f2a-6971-4fa4-a1fe-c172a40ef77d))
      (fp_line (start 4.95 0.975) (end 4.95 -1.95) (layer "B.Fab") (width 0.1) (tstamp abee0a2f-9fba-43ed-bd4f-03e3c80e7647))
      (fp_line (start 4.95 -1.95) (end -4.95 -1.95) (layer "B.Fab") (width 0.1) (tstamp ba546f3f-9f91-45b7-b7e2-ee37445d0461))
      (fp_line (start -4.95 1.95) (end 3.975 1.95) (layer "B.Fab") (width 0.1) (tstamp e443601b-4cd7-4597-8edb-fe734fe053c8))
      (pad "1" smd roundrect (at 4.445 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 6182facb-9838-4626-8330-5d06c1a16807)  ${p.net.B.str})
      (pad "2" smd roundrect (at 3.175 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 9a2c90c4-d108-490c-a4ef-f90839b42fec) ${p.net.C.str})
      (pad "3" smd roundrect (at 1.905 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 0da1fa1b-42c1-4d2b-a998-dadd3810d15b) ${p.net.D.str})
      (pad "4" smd roundrect (at 0.635 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp b80307a9-b810-4fc6-81ab-e2a116bf8242) ${p.net.E.str})
      (pad "5" smd roundrect (at -0.635 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp f241e0ee-d3d0-4acb-927b-10754037fbc9) ${p.net.F.str})
      (pad "6" smd roundrect (at -1.905 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp cb71c3f8-0ed5-4b40-9de3-746f0ee4a205)  ${p.net.G.str})
      (pad "7" smd roundrect (at -3.175 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 10d0e8f3-fddb-4eac-917f-4364013d5539)  ${p.net.H.str})
      (pad "8" smd roundrect (at -4.445 2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 2e074f39-f341-4958-bef7-3b1a944c481f)  ${p.net.GND.str})
      (pad "9" smd roundrect (at -4.445 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp b8413942-d6c5-419c-abde-ad0808ce4040))
      (pad "10" smd roundrect (at -3.175 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp e95bc7e1-afa8-4e79-944d-b78ff54851e4) ${p.net.SCLR.str})
      (pad "11" smd roundrect (at -1.905 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 0c3504f3-b1ac-4d16-89e8-22bd078339b8) ${p.net.SCK.str})
      (pad "12" smd roundrect (at -0.635 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 4c2296af-32ad-43f5-a2a0-7acff7a8cb73)  ${p.net.MISO.str})
      (pad "13" smd roundrect (at 0.635 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 11e5ad7c-b3cd-4d0a-b629-21b4d9115b6f)  ${p.net.OE.str})
      (pad "14" smd roundrect (at 1.905 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp 45099ef8-b470-4f34-a90e-0a936a6b6d10)  ${p.net.MOSI.str})
      (pad "15" smd roundrect (at 3.175 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp fbe3d599-804b-4434-a0f7-d1228fca0003)  ${p.net.A.str})
      (pad "16" smd roundrect (at 4.445 -2.475 ${270 - p.rot}) (size 1.95 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (tstamp c901e045-695f-4c29-83cc-8cb0a4bb27cf)  ${p.net.VCC.str})

)`
  }
}