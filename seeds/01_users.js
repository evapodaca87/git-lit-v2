
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            "id": 1,
            "first": "Evan",
            "last": "Apodaca",
            "email": "evapodaca87@gmail.com",
            "username": "evapodaca87",
            "password": "evan",
            "active": false
        },
        {
            "id": 2,
            "first": "Bill",
            "last": "Bain",
            "email": "bill@mail.com",
            "username": "billbain",
            "password": "bain",
            "active": false
        },
        {
            "id": 3,
            "first": "Jody",
            "last": "Isaguirre",
            "email": "jody@mail.com",
            "username": "jodyisaquirre",
            "password": "irre",
            "active": false
        },
        {
            "id": 4,
            "first": "Jonathan",
            "last": "Hovland",
            "email": "jonathan@mail.com",
            "username": "jonathanhovland",
            "password": "land",
            "active": false
        },
        {
            "id": 5,
            "first": "Rob",
            "last": "Hill",
            "email": "robhill@mail.com",
            "username": "robhill",
            "password": "hill",
            "active": false
        }
    ]);
  });
};
