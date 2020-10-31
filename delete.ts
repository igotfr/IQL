database("app").collection("Users").deleteDocument(user -> user.nome == "Ronaldo" && user.idade > 8);

database("app").collection("Users").deleteDocument(({ nome, idade }) -> nome == "Ronaldo" && idade > 8);
