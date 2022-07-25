db.produtos.updateMany(
{
    $or: [
    { nome: "Big Mac" },
    { nome: "Quarteirão com Queijo" }, 
],
},
{ 
    $push:
    {
    ingredientes: "bacon",
    }, 
},
);
  
db.produtos.find(
{},
{ _id: false, nome: true, ingredientes: true },
);