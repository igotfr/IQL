database("app").collection("Users").deleteDocument(user -> user.nome == "Ronaldo" && user.idade > 8, [_id, nome]); // the second parameter is optional and works like in GraphQL)

database("app").collection("Users").deleteDocument(({ nome, idade }) -> nome == "Ronaldo" && idade > 8, [_id, nome]); // the second parameter is optional and works like in GraphQL)

___________________________________________________________________________________________________________________________________________________

database("app").collection("Users").deleteDocument([
  [ user -> user.nome == "Ronaldo" && user.idade > 8, [_id, nome] ],
  [ user -> user.idade > 8, [nome, idade] ],
  user -> user.nome == "Meterssaker"
], [_id, nome]); // for not specified, in this case: "Meterssaker"

database("app").collection("Users").deleteDocument([
  [ ({ nome, idade }) -> nome == "Ronaldo" && idade > 8, [_id, nome] ],
  [ ({ idade }) -> idade > 8, [nome, idade] ],
  ({ nome }) -> nome == "Meterssaker"
], [_id, nome]); // for not specified, in this case: "Meterssaker"
