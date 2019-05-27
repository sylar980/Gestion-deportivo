const app = require('./app');
const config = require('./config/port.config');
const moongose = require('mongoose');

moongose.connect('mongodb://localhost/bdsis', {
  useNewUrlParser: true
}).then( () => {
    app.listen(config.get('port'), () => {
      console.log('conectado a la base de datos');
      console.log(`Conexion Correcta escuchando en el puerto 3000`);
    });
});