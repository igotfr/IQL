//db.insert('Users')
database("app").collection("Users").insertDocument({
    _id: ID(5ds564654fd),
    nome: "Adalberto",
    idade: 48
}, [_id, nome]); // the second parameter is optional and works like in GraphQL)

// db.insert('Users')
database("app").collection("Users").insertDocument([{
    _id: ID(df4547454h),
    nome: "Ronaldo",
    idade: 17
},
{
    _id: ID(gf78hy498g),
    nome: "Vicente",
    idade: 32
}], [_id, nome]); // the second parameter is optional and works like in GraphQL)

// db.insert('Users')
database("app").collection("Users").insertDocument([
[
  {
    _id: ID(df4547454h),
    nome: "Ronaldo",
    idade: 17
  }, [_id, nome]
],
[
  {
    _id: ID(gf78hy498g),
    nome: "Vicente",
    idade: 32
  }, [nome, idade]
],
{
  _id: ID(nd876dff),
  nome: "Meterssaker",
  idade: 29
}
], [_id, nome]); // for not specifieds, in this case, "Meterssaker"
