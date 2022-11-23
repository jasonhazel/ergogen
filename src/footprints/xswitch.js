module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'S'
  },
  body: p => {
    const template = `
    (module Kailh-PG1425-X-Switch (layer F.Cu) (tedit 5D103E2A)
      ${p.at /* parametric position */}
      (attr through_hole)
  (fp_text reference "${p.ref}" (at 0 10.3125) (layer "F.SilkS") hide
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 5641be26-f5e9-482f-8616-297f17f4eae2)
  )

  (fp_line (start -7.400008 7.012336) (end 7.399992 7.012336) (layer "B.SilkS") (width 0.15) (tstamp 2f5467a7-bd49-433c-92f2-60a842e66f7b))
  (fp_line (start 7.399992 -6.987664) (end -7.400008 -6.987664) (layer "B.SilkS") (width 0.15) (tstamp 5206328f-de7d-41ba-bad8-f1768b7701cb))
  (fp_line (start 7.399992 7.012336) (end 7.399992 -6.987664) (layer "B.SilkS") (width 0.15) (tstamp e7376da1-2f59-4570-81e8-46fca0289df0))
  (fp_line (start -7.400008 -6.987664) (end -7.400008 7.012336) (layer "B.SilkS") (width 0.15) (tstamp f879c0e8-5893-4eb4-8e59-2292a632100f))
  (fp_line (start 7.4 7.0125) (end -7.4 7.0125) (layer "F.SilkS") (width 0.15) (tstamp 0d095387-710d-4633-a6c3-04eab60b585a))
  (fp_line (start -7.4 7.0125) (end -7.4 -6.9875) (layer "F.SilkS") (width 0.15) (tstamp a12b751e-ae7a-468c-af3d-31ed4d501b01))
  (fp_line (start -7.4 -6.9875) (end 7.4 -6.9875) (layer "F.SilkS") (width 0.15) (tstamp ab0ea55a-63b3-4ece-836d-2844713a821f))
  (fp_line (start 7.4 -6.9875) (end 7.4 7.0125) (layer "F.SilkS") (width 0.15) (tstamp c220da05-2a98-47be-9327-0c73c5263c41))
  (fp_line (start 8.255 8.2675) (end -8.255 8.2675) (layer "F.CrtYd") (width 0.12) (tstamp 48034820-9d25-4020-8e74-d44c1441e803))
  (fp_line (start 8.255 -8.2425) (end 8.255 8.2675) (layer "F.CrtYd") (width 0.12) (tstamp 7df9ce6f-7f38-4582-a049-7f92faf1abc9))
  (fp_line (start -8.255 -8.2425) (end 8.255 -8.2425) (layer "F.CrtYd") (width 0.12) (tstamp a09cb1c4-cc63-49c7-a35f-4b80c3ba2217))
  (fp_line (start -8.255 8.2675) (end -8.255 -8.2425) (layer "F.CrtYd") (width 0.12) (tstamp e8312cc4-6502-4783-b578-55c01e0393af))
  (fp_line (start 2.549992 6.562336) (end -2.550008 6.562336) (layer "B.Fab") (width 0.15) (tstamp 29cd9e70-9b68-44f7-96b2-fe993c246832))
  (fp_line (start 2.549992 2.962336) (end 2.549992 6.562336) (layer "B.Fab") (width 0.15) (tstamp 41524d81-a7f7-45af-a8c6-15609b68d1fd))
  (fp_line (start -2.550008 2.962336) (end 2.549992 2.962336) (layer "B.Fab") (width 0.15) (tstamp a311f3c6-42e3-4584-9725-4a62ff91b6e3))
  (fp_line (start -2.550008 6.562336) (end -2.550008 2.962336) (layer "B.Fab") (width 0.15) (tstamp dd5f7736-b8aa-44f2-a044-e514d63d48f3))
  (fp_line (start -2.55 6.5625) (end 2.55 6.5625) (layer "F.Fab") (width 0.15) (tstamp 19515fa4-c166-4b6e-837d-c01a89e98000))
  (fp_line (start 2.55 6.5625) (end 2.55 2.9625) (layer "F.Fab") (width 0.15) (tstamp 4d51bc15-1f84-46be-8e16-e836b10f854e))
  (fp_line (start -2.55 2.9625) (end -2.55 6.5625) (layer "F.Fab") (width 0.15) (tstamp 6474aa6c-825c-4f0f-9938-759b68df02a5))
  (fp_line (start 2.55 2.9625) (end -2.55 2.9625) (layer "F.Fab") (width 0.15) (tstamp 9e18f8b3-9e1a-4022-9224-10c12ca8a28d))
  (pad "" np_thru_hole oval (at 2.4 0.9125 ${p.rot}) (size 0.3 4.1) (drill oval 0.3 4.1) (layers *.Cu *.Mask) (tstamp 0c9bbc06-f1c0-4359-8448-9c515b32a886))
  (pad "" np_thru_hole oval (at 0 0.9125 ${p.rot}) (size 5.1 4.1) (drill oval 5.1 4.1) (layers *.Cu *.Mask) (tstamp 0ff398d7-e6e2-4972-a7a4-438407886f34))
  (pad "" np_thru_hole oval (at -1.55 0.9125 ${p.rot}) (size 2 4.1) (drill oval 2 4.1) (layers *.Cu *.Mask) (tstamp 1527299a-08b3-47c3-929f-a75c83be365e))
  (pad "" np_thru_hole circle (at 5.499992 5.512336 ${180 - p.rot}) (size 1.3 1.3) (drill 1.3) (layers *.Cu *.Mask) (tstamp 153169ce-9fac-4868-bc4e-e1381c5bb726))
  (pad "" np_thru_hole circle (at -5.500008 -5.487664 ${180 - p.rot}) (size 1.3 1.3) (drill 1.3) (layers *.Cu *.Mask) (tstamp 2276ec6c-cdcc-4369-86b4-8267d991001e))
  (pad "" np_thru_hole oval (at 0 2.8125 ${p.rot}) (size 5.1 0.3) (drill oval 5.1 0.3) (layers *.Cu *.Mask) (tstamp 22ab392d-1989-4185-9178-8083812ea067))
  (pad "" np_thru_hole oval (at -2.4 0.9125 ${p.rot}) (size 0.3 4.1) (drill oval 0.3 4.1) (layers *.Cu *.Mask) (tstamp 2dc66f7e-d85d-4081-ae71-fd8851d6aeda))
  (pad "" np_thru_hole oval (at 1.55 0.9125 ${p.rot}) (size 2 4.1) (drill oval 2 4.1) (layers *.Cu *.Mask) (tstamp e9a9fba3-7cfa-45ca-926c-a5a8ecd7e3a4))
  (pad "" np_thru_hole oval (at 0 -0.9875 ${p.rot}) (size 5.1 0.3) (drill oval 5.1 0.3) (layers *.Cu *.Mask) (tstamp f030cfe8-f922-4a12-a58d-2ff6e60a9bb9))
  (pad "1" thru_hole circle (at -3.400008 -2.887664 ${180 - p.rot}) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.from.str} (tstamp 6ba19f6c-fa3a-4bf3-8c57-119de0f02b65))
  (pad "2" thru_hole circle (at -3.400008 2.012336 ${180 - p.rot}) (size 1.4 1.4) (drill 1.1) (layers *.Cu *.Mask) ${p.net.to.str} (tstamp db532ed2-914c-41b4-b389-de2bf235d0a7))
    )
        
    
    `

    return template
  }
}