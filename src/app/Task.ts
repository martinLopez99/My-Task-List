export interface Task {
    id?:number; // Cuando creamos una Task podria no venir con ID
    text:string; 
    day:string;
    reminder: boolean;
}

//Con esta interfaz cree reglas que se van a implementar en donde yo lo importe
//Me aseguro de no tener errores.