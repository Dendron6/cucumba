
//--name range 22:33 - range of execution code
// --tags @nameOfTag (tag ths to exist above test with the same name) one test can have multiple tags
// --tags "not @nameOfTag" - means that this tag will not be executed
// --order random  - to run tests in random order
// --publish-quiet to not see extra window in terminal
//npm test -- --help

module.exports = {
    default: '--publish-quiet --name range 22:33'
}