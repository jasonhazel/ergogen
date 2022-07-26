module.exports = {
  nets: {

  },
  params: {
    class: 'TRK'
  },
  body: p => {
    return `(module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
  (descr "Pimoroni I2C trackball breakout")
  (tags "Through hole pin header THT 1x05 2.54mm single row")
  (fp_text reference REF** (at -5.9 5.2) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value pimoroni_trackball (at 0 12.49) (layer F.Fab)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (layer F.Fab) (width 0.1))
  (fp_line (start 1.27 -1.27) (end 1.27 11.43) (layer F.Fab) (width 0.1))
  (fp_line (start 1.27 11.43) (end -1.27 11.43) (layer F.Fab) (width 0.1))
  (fp_line (start -1.27 11.43) (end -1.27 -0.635) (layer F.Fab) (width 0.1))
  (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (layer F.Fab) (width 0.1))
  (fp_line (start -1.33 11.49) (end 1.33 11.49) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.33 1.27) (end -1.33 11.49) (layer F.SilkS) (width 0.12))
  (fp_line (start 1.33 1.27) (end 1.33 11.49) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.33 1.27) (end 1.33 1.27) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.33 0) (end -1.33 -1.33) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.33 -1.33) (end 0 -1.33) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.8 -1.8) (end -1.8 11.95) (layer F.CrtYd) (width 0.05))
  (fp_line (start -1.8 11.95) (end 1.8 11.95) (layer F.CrtYd) (width 0.05))
  (fp_line (start 1.8 11.95) (end 1.8 -1.8) (layer F.CrtYd) (width 0.05))
  (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer F.CrtYd) (width 0.05))
  (fp_line (start -1.5 -2.6) (end -1.5 12.5) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.5 12.5) (end 4.5 12.5) (layer F.SilkS) (width 0.12))
  (fp_line (start 4.5 12.5) (end 4.5 17.5) (layer F.SilkS) (width 0.12))
  (fp_line (start 4.5 17.5) (end 20.5 17.5) (layer F.SilkS) (width 0.12))
  (fp_line (start -1.5 -2.6) (end 4.5 -2.6) (layer F.SilkS) (width 0.12))
  (fp_line (start 4.5 -7.6) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))
  (fp_line (start 4.5 -2.6) (end 4.5 -7.6) (layer F.SilkS) (width 0.12))
  (fp_line (start 20.5 17.5) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))
  (pad 1 thru_hole rect (at 0 0) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
  (pad 2 thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
  (pad 3 thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
  (pad 4 thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
  (pad 5 thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
)`


  }
}