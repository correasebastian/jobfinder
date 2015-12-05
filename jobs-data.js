var mongoose = require("mongoose")
mongoose.Promise = require('bluebird');
var jobModel = require('./models/Job')// se tieene que registarr el modelo
var Promise = require("bluebird");
var Job=mongoose.model('Job')
var findJobs = function(query) {
    if (query === undefined)
        query = {}
        //works since with active mongoose.Promise = require('bluebird');
    return Job.find(query).exec();
}
exports.findJobs = findJobs

exports.resetJob = function() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject)
    })

}

exports.mConnect = function(conString) {
    return new Promise(function(resolve, reject) {
        mongoose.connect(conString)
        mongoose.connection.once('open', resolve)
    })
}



function createP(job) {
    return new Promise(function(resolve, reject) {
        Job.create(job, function(err) {
            if (err)
                reject()

            resolve();

        })
    })
}

var jobs = [{
    title: 'Cook',
    description: 'You will be making bagels'
}, {
    title: 'Waiter',
    description: 'You will be putting food on peoples tables'
}, {
    title: 'Programmer',
    description: 'You will be mindlessly typing for hours'
}, {
    title: 'Axe Maker',
    description: 'We need many axes made.. so many..'
}]
exports.seedJobs = function() {
    //return new Promise(function(resolve, reject) {

    return findJobs()
        .then(function(collection) {
            if (collection.length === 0) {

                return Promise.map(jobs, function(job) {
                    return createP(job);
                })
            }
        })

    //})
}