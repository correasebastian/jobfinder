var expect = require("chai").expect
var mongoose = require("mongoose")
var jobModel = require('../models/Job');
var Promise = require("bluebird");
mongoose.Promise = require('bluebird');
var conString = 'mongodb://devky:devky@ds061954.mongolab.com:61954/jobfinder';
mongoose.connect(conString)
var con = mongoose.connection;

function resetJob() {
    return new Promise(function(resolve, reject) {
        con.collections['jobs'].drop(resolve, reject)
    })

}

var connectDB = Promise.promisify(mongoose.connect, mongoose);
console.log(connectDB)

describe('get jobs', function() {
    it('should never be empty since jobs are seeded', function(done) {

        con.once('open',
            function() {
                console.log('connected to mongo successfully')

                resetJob()
                    .then(jobModel.seedJobs)
                    .then(function() {
                        mongoose.model('Job').find({}).exec(function(error, jobList) {
                                expect(jobList.length).to.be.at.least(1)
                                done()
                            }) // body...
                    })




            })




    })
})