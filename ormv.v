// connect
mut db := pg.connect(
    host: 'localhost'
		user: 'postgres'
		password: ''
		dbname: 'postgres'
) or { panic(err) }

// create
db.create('Test', [
		orm.TableField{
			name: 'id'
			typ: serial
			attrs: [
				StructAttribute{
					name: 'primary'
				},
				StructAttribute{
					name: 'sql'
					has_arg: true
					kind: .plain
					arg: 'serial'
				},
			]
		},
		orm.TableField{
			name: 'name'
			typ: string
			attrs: []
		},
		orm.TableField{
			name: 'age'
			typ: int
		},
	]) or { panic(err) }

// insert
db.insert('Test', orm.QueryData{
		fields: ['name', 'age']
    data: ['Louis', 101]
}) or { panic(err) }

// select
res := db.@select(orm.SelectConfig{
		table: 'Test'
		has_where: true
		fields: ['id', 'name', 'age']
		types: [7, 18, 8]
	}, orm.QueryData{}, orm.QueryData{
		fields: ['name']
		data: [orm.Primitive('Louis'), i64(101)]
		types: [18]
		is_and: [true]
		kinds: [.eq]
}) or { panic(err) }

	id := res[0][0]
	name := res[0][1]
	age := res[0][2]
