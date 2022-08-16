class LINK{
    constructor(bodya,bodyb){
        var lastlink=bodya.body.bodies.length-2
        this.link=Constraint.create(
            {
                bodya:bodya.body.bodies[lastlink],
                bodyb:bodyb,
                length:-10,
                stiffness:0.01
            }
        )
        World.add(world,this.link)
    }
}