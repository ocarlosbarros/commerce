db.produtos.find(
{
    ingredientes: { $size: 4 },
},
{ _id: false, nome: true, ingredientes: true },
).count();