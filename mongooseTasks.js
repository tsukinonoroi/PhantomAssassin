 var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.kill = function(){
    console.log(this.get("name") + " done 'Manifold Paradox' ")
}

var pa = mongoose.model('pa', schema)

var paarc = new pa({ name: 'ПАшка' })
paarc.save(function (err) {
    paarc.kill()
})



