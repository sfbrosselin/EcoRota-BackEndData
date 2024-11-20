class user{
    constructor(id, email, qntPlastico, qntMetal, qntPapel, qntVidro){
        this.id = id
        this.email = email
        this.qntPlastico = qntPlastico
        this.qntMetal =  qntMetal
        this.qntPapel = qntPapel
        this.qntVidro = qntVidro
    }

    addPlastico(plastico){
        return this.qntPlastico = this.qntPlastico + plastico
    }
    addMetal(metal){
        return this.qntMetal = this.qntMetal + metal
    }
    addPapel(papel){
        return this.qntPapel = this.qntPapel + papel
    }
    addVidro(vidro){
        return this.qntVidro = this.qntVidro + vidro
    }

    displayMaterials(){
        console.log(`Voce tem ${this.qntPlastico} de plastico, ${this.qntMetal} de metal, ${this.qntPapel} de papel e ${this.qntVidro} de vidro`)
    }
}