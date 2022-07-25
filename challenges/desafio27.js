db.produtos.find(
    {
      nome: { $regex: /mc/i },
    },
    { _id: false, nome: true },
  ).count();