var database = require("./database");

//INSERT INTO
// var dados = {
//   nome: "The Sims",
//   preco: 50.65,
// };

// database.insert(dados).into("games").then(data=>{
//     console.log(data)
// }).catch(err =>{
//     console.log(err)
// })

// var num = 100;
// var precoCerto = Math.random() * (1000 - 300) + 300;
// var dados = {
//   nome: "The Sims" + precoCerto,
//   preco: precoCerto,
// };

// for (var i = 0; i < num; i++) {
//   database
//     .insert(dados)
//     .table("games")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   i++;
// }

//SELECT
// database
//   .select("*")
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//INSERINDO E CONSULTANDO AO MESMO TEMPO
// database
//   .insert({ nome: "Free Fire", preco: 0 })
//   .into("games")
//   .then(() => {
//     database
//       .select("*")
//       .table("games")
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//WHERE
// database
//   .select(["id", "preco"])
//   .where({ nome: "GTA" })
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//DELETE
// database
//   .where({ id: 1 })
//   .delete()
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//UPDATE
// database
// //   .where({ id: 3 })
//   .update({ preco: 0 })
//   .table("games")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//ORDER BY
// database
//   .select("*")
//   .table("games")
//   .orderBy("preco", "asc")
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// INSERT ASSOCIADO

// database
//   .insert({
//     nome: "Blizzard",
//     game_id: 254,
//   })
//   .table("estudios")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//INNER JOIN
// database
//   .select(["games.id", "games.nome", "games.preco", "estudios.nome as est_id"])
//   .table("games")
//   .innerJoin("estudios", "estudios.game_id", "games.id")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
database
  .select(["games.*", "estudios.nome as etd_nome"])
  .table("games")
  .innerJoin("estudios", "estudios.game_id", "games.id")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
