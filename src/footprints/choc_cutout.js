module.exports = {
    params: {
      designator: 'CHOCCUT',
    },
    body: p => {
      const standard = `
        ${'' /* Add the kicad_mod content here*/}
        (module "choc_cutout" (layer F.Cu) (tedit 644A02BD)
        ${p.at /* parametric position */}
          (layer "F.Cu")
          (attr through_hole)
          (fp_line (start -5 -7.6) (end -5 -4.2)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start -5 -4.2) (end -2.6 -4.2)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start -3 -7.6) (end -5 -7.6)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start -2.6 -4.2) (end -1.6 -3.2)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start -1.8 -8.8) (end -3 -7.6)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start -1.6 -3.2) (end 1 -3.2)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 1.6 -8.8) (end -1.8 -8.8)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 2 -2.2) (end 2 -1)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 2 -1) (end 7.4 -1)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 2.4 -8) (end 1.6 -8.8)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 2.4 -7) (end 2.4 -8)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 7.4 -6.6) (end 2.8 -6.6)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 7.4 -5.4) (end 7.4 -6.6)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 7.4 -2) (end 7.4 -1)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 7.4 -2) (end 10 -2)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 10 -5.4) (end 7.4 -5.4)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_line (start 10 -2) (end 10 -5.4)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_arc (start 1 -3.2) (end 2 -2.2) (angle -90)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (fp_arc (start 2.8 -6.6) (end 2.4 -7) (angle -90)
            (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )
          (pad "" np_thru_hole circle (at -5.5 0 195) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at -5 3.8 195) (size 2 2) (drill 2) (layers "F&B.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 0 0 195) (size 3.429 3.429) (drill 3.429) (layers "*.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 0 5.9 195) (size 2 2) (drill 2) (layers "F&B.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 5 3.8 195) (size 2 2) (drill 2) (layers "F&B.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 5.5 0 195) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") )
      `
      const optional = `
        ${'' /* Add the optional parts here */}

        `
      return `
        ${standard}
				)
      `
    }
  }

/*
          (pad "" np_thru_hole circle (at -5.5 0 ${195 + p.rot}) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at -5 3.8 ${195 + p.rot}) (size 2 2) (drill 2) (layers "F&B.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 0 0 ${195 + p.rot}) (size 3.429 3.429) (drill 3.429) (layers "*.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 0 5.9 ${195 + p.rot}) (size 2 2) (drill 2) (layers "F&B.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 5 3.8 ${195 + p.rot}) (size 2 2) (drill 2) (layers "F&B.Cu" "*.Mask") )
          (pad "" np_thru_hole circle (at 5.5 0 ${195 + p.rot}) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") )
*/