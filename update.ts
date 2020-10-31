database("app").collection("Users").updateDocument(
  user -> user.nome == "Ronaldo" && user.idade > 8,
  user: {
    idade: 47
  }
);

database("app").collection("Users").updateDocument(
  ({ nome, idade }) -> nome == "Ronaldo" && idade > 8,
  user: {
    idade: 47
  }
);
