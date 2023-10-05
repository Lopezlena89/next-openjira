interface SeedData{
    entries:SeedEntry[];
}


interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}

export const seedData:SeedData ={
    entries:[
        {
            description:'Pendiente: No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.',
            status:'pending',
            createdAt:Date.now(),
       },
       {
            description:'In - Progress: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
            status:'in-progress',
            createdAt:Date.now() - 1000000,
       },
       {
            description:'Terminadas: Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. ',
            status:'finished',
            createdAt:Date.now() - 100000
       },
    ]
}