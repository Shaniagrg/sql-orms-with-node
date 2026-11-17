const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
  });

// Movie model
class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING
}, { sequelize }); // same as { sequelize: sequelize }

(async () => {
    /*
        sync() creates tables if it's missing
        { force: true } delete the table first then rebuild it fresh 
            (avoid using this in real app cuz it wipes the data)
            it's only good for learning purpose
    */
    await sequelize.sync({ force: true });
try {

    /*
        await Movie.create({title: 'Toy Story'}) adds new row of this title
        console.log(movie.toJSON()); prints the output
    */
    const movie = await Movie.create({
        title: 'Toy Story',
      });
      console.log(movie.toJSON());
} catch (error) {
    console.error('Error connecting to the database: ', error);
}
})();