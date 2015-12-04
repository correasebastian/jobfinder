var mongoose = require("mongoose")
var Promise = require("bluebird");
mongoose.Promise = require('bluebird');
var jobSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

var Job = mongoose.model('Job', jobSchema)

var jobs = [{
    title: 'Cook',
    description: 'You will be making bagels'
}, {
    title: 'Programmer',
    description: 'You will be mindlessly typing for hours'
}]

function createP(job) {
    return new Promise(function(resolve, reject) {
        Job.create(job,function(err){
            if (err) 
            reject()
            
            resolve();
            
        })
    })
}
exports.seedJobs = function() {
    //return new Promise(function(resolve, reject) {

   return Job.find({}).exec()
        .then(function(collection) {
            if (collection.length === 0) {
                // Job.create({
                //     title: 'Cook',
                //     description: 'You will be making bagels'
                // })
                // Job.create({
                //     title: 'Waiter',
                //     description: 'You will be putting food on peoples tables'
                // })
                // Job.create({
                //     title: 'Programmer',
                //     description: 'You will be mindlessly typing for hours'
                // }, resolve)

                return Promise.map(jobs, function(job) {
                    return createP(job);
                })
            }
        })

    //})
}
