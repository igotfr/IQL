insert.database("app").collection("Users").document(
{
  _id: ID(5ds564654fd),
  nome: "Adalberto",
  idade: 48
});

insert.database("app").collection("Users").document([
{
  _id: ID(df4547454h),
  nome: "Ronaldo",
  idade: 17
},
{
  _id: ID(gf78hy498g),
  nome: "Vicente",
  idade: 32
}
]);