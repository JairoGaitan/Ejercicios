alert("Porfavor responder con: (si) o (no) en sus respectivas preguntas")
let curso = parseFloat(prompt("Ingrese el numero para el curso que desea inscribirse: 1- ADSO , 2 - Seguridad digital , 3- Analitica de datos"))
let afirmacion = "si"
let negacion = "no"


 switch (curso){
    case 1 :
        alert("El requisito para este curso es ser bachiller")
let requisito = prompt("¿Cumple usted con este requisito?")
 requisito == afirmacion ? "Puede continuar" : alert("Debe cumplir con los requisitos para seguir")
 if(requisito == negacion){
    throw new Error("No puede continuar");
 }
let cedula = prompt("¿Cuenta usted con cedula de ciudadania?")
 
 cedula == afirmacion ? "Puede continuar" : alert("Necesita tener cedula para continuar")
 if(cedula == negacion){
    throw new Error("No puede continuar");
 }
let reglamento = prompt("¿Esta de acuerdo con el reglamento del aprendiz?")
 
 reglamento == afirmacion ? alert("Bienvenido, puede seguir con la inscripcion") : alert("Necesita estar de acuerdo con el reglamento")
 if(reglamento == negacion){
    throw new Error("Necesita estar de acuerdo con el reglamento")
}
break 

   case 2 :
     alert("El requisito para este curso es haber cursado y aprobado Noveno grado")
let requisito2 = prompt("¿Cumple usted con este requisito?")
 requisito2 == afirmacion ? "Puede continuar" : alert("Debe cumplir con los requisitos para seguir")
 if(requisito2 == negacion){
    throw new Error("No puede continuar");
 }
let cedula2 = prompt("¿Cuenta usted con cedula de ciudadania?")
 
 cedula2 == afirmacion ? "Puede continuar" : alert("Necesita tener cedula para continuar")
 if(cedula2 == negacion){
    throw new Error("No puede continuar");
 }
let reglamento2 = prompt("¿Esta de acuerdo con el reglamento del aprendiz?")
 
 reglamento2 == afirmacion ? alert("Bienvenido, puede seguir con la inscripcion") : alert("Necesita estar de acuerdo con el reglamento")
 if(reglamento2 == negacion){
    throw new Error("Necesita estar de acuerdo con el reglamento");
}
break 

   case 3 :
    alert("El requisito para este curso es haber cursado y aprobado Noveno grado")
    let requisito3 = prompt("¿Cumple usted con este requisito?")
     requisito3 == afirmacion ? "Puede continuar" : alert("Debe cumplir con los requisitos para seguir")
     if(requisito3 == negacion){
        throw new Error("No puede continuar");
     }
    let cedula3 = prompt("¿Cuenta usted con cedula de ciudadania?")
     
     cedula3 == afirmacion ? "Puede continuar" : alert("Necesita tener cedula para continuar")
     if(cedula3 == negacion){
        throw new Error("No puede continuar");
     }
    let reglamento3 = prompt("¿Esta de acuerdo con el reglamento del aprendiz?")
     
     reglamento3 == afirmacion ? alert("Bienvenido, puede seguir con la inscripcion") : alert("Necesita estar de acuerdo con el reglamento")
     if(reglamento3 == negacion){
        throw new Error("Necesita estar de acuerdo con el reglamento");
    }
    break
default : 
alert("Ingrese un curso valido")
throw new Error("No puede continuar");
  }
