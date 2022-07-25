db.produtos.updateMany(
{
    valoresNutricionais: { 
        $elemMatch: { tipo: "sódio", percentual: { $gt: 20, $lt: 40 } },
    },
},
{
    $push: {
    tags: {
        $each: [
        "contém sódio",
        ],
        $sort: 1,
    },
    },
},
);

db.produtos.find(
{},
{ _id: false, nome: true, tags: true },
);