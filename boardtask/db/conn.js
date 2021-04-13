const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:rootadmin@cluster0.e7snn.mongodb.net/todoTasks', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Established");
}).catch((e) => {
    console.log("Error Occured");
})