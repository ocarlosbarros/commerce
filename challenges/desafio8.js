db.produtos.deleteMany({ 
    curtidas: { $lt: 50 },
  },
  { _id: false, nome: true, curtidas: true });

db.produtos.find(
  {},
  { _id: false, nome: true },
);