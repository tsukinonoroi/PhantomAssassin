var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var pa = mongoose.model('pa', { name: String })

var paarc = new pa({ name: 'Аркана' })
paarc.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Я довольна.')
    }
})
