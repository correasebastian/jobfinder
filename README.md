
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team


SEBASTIAN CORREA morales cano

git config credential.helper store


permission on mongod files
chmod a+x mongod


check the seedJobs

correasebastian@jobfinder:~/workspace (master) $ mongo
MongoDB shell version: 2.6.10
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
Server has startup warnings: 
2015-12-04T18:55:58.119+0000 ** WARNING: --rest is specified without --httpinterface,
2015-12-04T18:55:58.121+0000 **          enabling http interface
> show dbs
admin      (empty)
jobfinder  0.078GB
local      0.078GB
> use jobfinder
switched to db jobfinder
> show collections
jobs
system.indexes
> db.jobs.find()
{ "_id" : ObjectId("5661e79ad95361433ad2bc37"), "title" : "Programmer", "description" : "You will be mindlessly typing for hours", "__v" : 0 }
{ "_id" : ObjectId("5661e79ad95361433ad2bc36"), "title" : "Waiter", "description" : "You will be putting food on peoples tables", "__v" : 0 }
{ "_id" : ObjectId("5661e79ad95361433ad2bc35"), "title" : "Cook", "description" : "You will be making bagels", "__v" : 0 }
> 