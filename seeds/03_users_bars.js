
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_bars').del()
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
          stars: 4
        },
        {
          id: 3,
          user_id: 3,
          bar_id: 3,
          stars: 3
        }
      ]);
    });
};
