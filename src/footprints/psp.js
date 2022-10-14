module.exports = {
  nets: {
    GND: 'GND',
    VCC: 'VCC',
    X: undefined,
    Y: undefined
  },
  body: p => {



    return `(module "JOYSTICK-PSP1000" (layer "F.Cu") (tedit 200000)
  (descr "PSP-1000 THUMB SLIDE JOYSTICK")
  (tags "PSP-1000 THUMB SLIDE JOYSTICK")
  ${p.at}
  (attr smd)
  (fp_text reference "S2" (at 0 -10.795 180) (layer "F.SilkS")
    (effects (font (size 0.6096 0.6096) (thickness 0.127)))
    (tstamp 7d7c0909-b3f4-402e-a872-2a12bf0901e1)
  )
  (fp_text value "JOYSTICK_SLIDE" (at 0 10.033 180) (layer "F.SilkS")
    (effects (font (size 0.6096 0.6096) (thickness 0.127)))
    (tstamp 2d645c45-f9f6-4fe6-be8a-3c78754dd9d2)
  )
  (fp_line (start 5.4991 -9.37514) (end 9.37514 -5.4991) (layer "F.SilkS") (width 0.2032) (tstamp 191d745f-09ac-41b7-84e9-9c35abccd72d))
  (fp_line (start -5.4991 -9.37514) (end -9.37514 -5.4991) (layer "F.SilkS") (width 0.2032) (tstamp 5f37d1c5-2973-42d6-8e87-1c596d447096))
  (fp_line (start 3.89636 -9.37514) (end 5.4991 -9.37514) (layer "F.SilkS") (width 0.2032) (tstamp 636b6990-8277-4c2a-98f1-ac38d762ce7f))
  (fp_line (start -5.4991 9.37514) (end 5.4991 9.37514) (layer "F.SilkS") (width 0.2032) (tstamp 711d1f2b-7c6f-4406-bf53-35aa8485f67f))
  (fp_line (start 9.37514 5.4991) (end 9.37514 -5.4991) (layer "F.SilkS") (width 0.2032) (tstamp b7ec94eb-e377-4843-a9d4-6c4661f41afb))
  (fp_line (start -9.37514 5.4991) (end -9.37514 -5.4991) (layer "F.SilkS") (width 0.2032) (tstamp b7f80015-e90a-4fbe-b601-45518e1720d7))
  (fp_line (start -9.37514 5.4991) (end -5.4991 9.37514) (layer "F.SilkS") (width 0.2032) (tstamp d6846ea7-7fd6-41fd-b190-936bea2a4eb0))
  (fp_line (start 9.37514 5.4991) (end 5.4991 9.37514) (layer "F.SilkS") (width 0.2032) (tstamp e06e8aa7-e153-48c0-a9d1-a19b5089c920))
  (fp_line (start -5.4991 -9.37514) (end -3.89636 -9.37514) (layer "F.SilkS") (width 0.2032) (tstamp fdb977b4-5517-4144-ba6e-5f128153b962))
  (fp_line (start -8.99922 5.74802) (end -5.74802 8.99922) (layer "Dwgs.User") (width 0.127) (tstamp 0574e075-2594-4438-bbc0-8c8fc583653d))
  (fp_line (start -5.99948 -8.74776) (end -8.74776 -5.99948) (layer "Dwgs.User") (width 0.127) (tstamp 39cc8ef5-d8dd-44aa-b9d9-32d81db2ef2a))
  (fp_line (start -5.4991 -9.24814) (end -5.99948 -8.74776) (layer "Dwgs.User") (width 0.127) (tstamp 55278d41-f42d-4e48-a850-2204c21d0135))
  (fp_line (start -8.99922 5.74802) (end -8.99922 11.99896) (layer "Dwgs.User") (width 0.127) (tstamp 5b6f374d-8259-4c2b-b68d-008e47d1c5ca))
  (fp_line (start 5.4991 -9.24814) (end 9.24814 -5.4991) (layer "Dwgs.User") (width 0.127) (tstamp 68749e4e-c6fe-41eb-af3a-29aeb0706aa3))
  (fp_line (start -9.24814 5.4991) (end -8.99922 5.74802) (layer "Dwgs.User") (width 0.127) (tstamp 6ca7e4a5-7bde-4f72-a85f-5d11aea31a8e))
  (fp_line (start -10.39876 -7.65556) (end -8.74776 -5.99948) (layer "Dwgs.User") (width 0.127) (tstamp 7aa052d0-9b16-4032-98c4-1554e6486510))
  (fp_line (start 9.24814 5.4991) (end 9.24814 -5.4991) (layer "Dwgs.User") (width 0.127) (tstamp 9486eaf1-02fa-4cbc-9ed7-eb03d1bc9760))
  (fp_line (start -7.64794 -10.40638) (end -5.99948 -8.74776) (layer "Dwgs.User") (width 0.127) (tstamp bd70cb30-fb80-4819-8695-036c532484ae))
  (fp_line (start -8.99922 11.99896) (end -5.74802 11.99896) (layer "Dwgs.User") (width 0.127) (tstamp c10cd760-64f9-42b3-84bb-c8dd72b8b1f6))
  (fp_line (start -5.4991 9.24814) (end 5.4991 9.24814) (layer "Dwgs.User") (width 0.127) (tstamp c2abb88c-aba0-4079-831a-8856a9968f8e))
  (fp_line (start -5.4991 -9.24814) (end 5.4991 -9.24814) (layer "Dwgs.User") (width 0.127) (tstamp c5ebcd84-ea47-4584-9ce7-ad7ea72104ec))
  (fp_line (start 9.24814 5.4991) (end 5.4991 9.24814) (layer "Dwgs.User") (width 0.127) (tstamp ce8a405e-63bd-4622-b309-87d904dba135))
  (fp_line (start -5.74802 11.99896) (end -5.74802 8.99922) (layer "Dwgs.User") (width 0.127) (tstamp cf2ca2b8-c110-4ac7-9be4-383392984644))
  (fp_line (start -8.74776 -5.99948) (end -9.24814 -5.4991) (layer "Dwgs.User") (width 0.127) (tstamp d9ad94bb-34f0-4f1a-8524-bdaeaee863fb))
  (fp_line (start -9.24814 5.4991) (end -9.24814 -5.4991) (layer "Dwgs.User") (width 0.127) (tstamp e84c1345-f09e-4367-a88c-c0057c80e52f))
  (fp_line (start -5.74802 8.99922) (end -5.4991 9.24814) (layer "Dwgs.User") (width 0.127) (tstamp f2c4bfc6-de7b-44b0-8929-ec4bd5cebfe1))
  (pad "" np_thru_hole circle (at -7.37362 10.0584) (size 1.99898 1.99898) (drill 1.99898) (layers *.Cu *.Mask)
    (solder_mask_margin 0.1016) (tstamp 2e0dabf9-9d03-4ae2-a692-3c4816b0e21f))
  (pad "" np_thru_hole circle (at -8.89 -8.98398) (size 1.99898 1.99898) (drill 1.99898) (layers *.Cu *.Mask)
    (solder_mask_margin 0.1016) (tstamp 3c9fdb2f-ecf9-44d3-83c1-9c763d03af90))
  (pad "GND" smd rect (at -2.99974 -7.74954 90) (size 4.49834 1.4986) (layers "F.Cu" "F.Paste" "F.Mask")
    (solder_mask_margin 0.1016) ${p.net.GND.str} (tstamp ffee5a36-5bf2-4c4a-b1fe-60fb5fb6d661))
  (pad "VCC" smd rect (at 0.99822 -7.74954 90) (size 4.49834 1.4986) (layers "F.Cu" "F.Paste" "F.Mask")
    (solder_mask_margin 0.1016) ${p.net.VCC.str} (tstamp 27f37be1-f41b-4f91-9608-f709ea51242b))
  (pad "X" smd rect (at 2.99974 -7.74954 90) (size 4.49834 1.4986) (layers "F.Cu" "F.Paste" "F.Mask")
    (solder_mask_margin 0.1016) ${p.net.X.str} (tstamp 53f47836-096c-448f-8c94-f2235e5557d3))
  (pad "Y" smd rect (at -0.99822 -7.74954 90) (size 4.49834 1.4986) (layers "F.Cu" "F.Paste" "F.Mask")
    (solder_mask_margin 0.1016) ${p.net.Y.str} (tstamp 617527c2-4fe3-4dff-85c0-d07a89eb4c1f))
)
`
  }
}