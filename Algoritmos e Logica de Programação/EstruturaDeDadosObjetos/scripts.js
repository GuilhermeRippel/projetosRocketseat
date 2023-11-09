const patients = [
    {
        name: 'Gui',
        age: 20,
        weight: 80,
        height: 175,
    },
    {
        name: 'Duda',
        age: 20,
        weight: 60,
        height: 160,
    },
    {
        name: 'João',
        age: 23,
        weight: 84,
        height: 170,
    },
]

function printPatientIMC(patient){
    alert(`Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2).toFixed(2))}`)
}

for(let patients of patient){
    printPatientIMC(patient)
}




