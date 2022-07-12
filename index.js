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

// database
//   .select(["games.*", "estudios.nome as etd_nome"])
//   .table("games")
//   .innerJoin("estudios", "estudios.game_id", "games.id").where('games.id', 254)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//UM PARA MUITOS
// database
//   .select(["games.id", "games.nome", "games.preco", "estudios.nome as est_nome"])
//   .table("games")
//   .innerJoin("estudios", "estudios.game_id", "games.id")
//   .then((data) => {
//     var estudioGameArray = data;
//     var game = {
//       id: 0,
//       nome: "",
//       estudios: [],
//     };

//     (game.id = data[0].id),
//       (game.nome = data[0].nome),
//       data.forEach((estudio) => {
//         game.estudios.push({ nome: estudio.est_nome });
//       });

//     console.log(game);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//MUITO PARA MUITOS
// database
//   .select(["estudios.nome as estudio_nome", "games.nome as game_nome", "games.preco"])
//   .table("games_estudios")
//   .innerJoin("games", "games.id", "games_estudios.game_id")
//   .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
//   .where("games.id", 254)
//   .then((data) => {
//     var game = {
//       nome: "",
//       preco: "",
//       estudios: [],
//     };

//     game.nome = data[0].game_nome;
//     game.preco = data[0].preco

//     data.forEach((estudio) => {
//       game.estudios.push({
//         nome: estudio.estudio_nome,
//       });
//     });
//     console.log(game);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//TRANSACAO
async function transacao() {
  try {
    await database.transaction(async (trans) => {
      await database.insert({ nome: "Mojang" }).table("estudios");
    });
  } catch (error) {
    console.log(error);
  }
}

transacao();
