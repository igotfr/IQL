Users = [
  id: ID(5ds564654fd),
  nome: "Adalberto",
  idade: 48
}, { _id, nome }); // the second parameter is optional and works like in GraphQL

database("app").collection("Users").insertDocument([
{
  _id: ID(df4547454h),
  nome: "Ronaldo",
  idade: 17
},
{
  _id: ID(gf78hy498g),
  nome: "Vicente",
  idade: 32
];

database("app").collection("Users").findDocument(user -> user.nome == "Ronaldo" && user.idade > 8, { _id, nome }); // the second parameter is optional and works like in GraphQL)

database("app").collection("Users").findDocument(({ nome, idade }) -> nome == "Ronaldo" && idade > 8, { _id, nome }); // the second parameter is optional and works like in GraphQL)

___

database("app").collection("Users").findDocument([
  { user -> user.nome == "Ronaldo" && user.idade > 8, { _id, nome } },
  { user -> user.idade > 8, { nome, idade } }
]);

database("app").collection("Users").findDocument([
  { ({ nome, idade }) -> nome == "Ronaldo" && idade > 8, { _id, nome } },
  { ({ idade }) -> idade > 8, { nome, idade } }
]);
