const mongoose = require('mongoose');
//var mongoosePaginate = require('mongoose-paginate-v2');

/*
mongoose.connect('mongodb://localhost/management', { useNewUrlParser: true })  
.then(()=> console.log('conectado a mongodb')) 
.catch(error => {throw error});
*/
const uri = `mongodb+srv://${process.env.USERBD}:${process.env.PASSWORDBD}@cluster0.52zsh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e))



/*mongoosePaginate.paginate.options={
    //limit:4,
    pagination:"false",
    lean:false
}
mongoose.mongoosePaginate = mongoosePaginate;*/
module.exports = mongoose;  