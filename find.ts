database("app").collection("Users").findDocument(user -> user.nome == "Ronaldo" && user.idade > 8)

database("app").collection("Users").findDocument({nome, idade} -> nome == "Ronaldo" && idade > 8)
