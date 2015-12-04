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

function mConnect() {
    return new Promise(function(resolve, reject) {
        con.once('open', resolve)
    })
}

function getJobList() {
    //works since with active mongoose.Promise = require('bluebird');
    return mongoose.model('Job').find({}).exec();
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);
console.log(connectDB)

describe('get jobs', function() {
    it('should never be empty since jobs are seeded', function(done) {

        mConnect()
            .then(resetJob)
            .then(jobModel.seedJobs)
            .then(getJobList)
            .then(function(jobList) {
                //console.log(jobList);
                expect(jobList.length).to.be.at.least(1)
                done()
            })
 
    })
})