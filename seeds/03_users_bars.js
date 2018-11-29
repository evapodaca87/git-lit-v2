
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users_bars"; ALTER SEQUENCE users_bars_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('users_bars').insert([
        {
          id: 1,
          user_id: 1,
          bar_id: 1,
          stars: 2
        },
        {
          id: 2,
          user_id: 2,
          bar_id: 2,
          stars: 5
        },
        {
          id: 3,
          user_id: 3,
          bar_id: 2,
          stars: 1
        }
      ]);
    });
};
