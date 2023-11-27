var Amar ={
    name: "Amar",
    Place: "Goa",
    Skill: "Singer"
}

var Akbar ={
    name: "Akbar",
    Place: "Mumbai",
    Skill: "Chef"
}

var Anthony ={
    name: "Anthony",
    Place: "Kashmir",
    Skill: "Magician"
}

function useSkills()
{
    console.log(`I have the skills of ${this.name}, So now I can work as a ${this.Skill}`);
}

useSkills.call(Akbar);
