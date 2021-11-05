const app = require('./app');
require('dotenv').config(); // Va a cargar todas las variables de entorno definidas en el archivo .env

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});
