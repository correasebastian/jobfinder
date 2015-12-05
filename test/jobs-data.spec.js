var expect = require("chai").expect
//var jobModel = require('../models/Job'); // este se tiene que ejecutar para que se registre el modelo ya sea aca o en ../jobs-data
var jobsData = require("../jobs-data")
var conString = 'mongodb://devky:devky@ds061954.mongolab.com:61954/jobfinder';


describe('get jobs', function() {
    var jobs;
    before(function(done) {
        jobsData.mConnect(conString)
            .then(jobsData.resetJob)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(jobList) {
                jobs = jobList;
                done()
            })
    })
    it('should never be empty since jobs are seeded', function() {
        expect(jobs.length).to.be.at.least(1)

    })

    it("should have a job with a title", function() {
        expect(jobs[0].title).to.not.be.empty;
    });

    it("should have a job with a description", function() {
        expect(jobs[0].description).to.not.be.empty;
    });
})