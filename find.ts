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
