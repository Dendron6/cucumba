const Person = require('../../src/shouty.js')
const {Given, When, Then} = require('@cucumber/cucumber')
const {assertThat, is} = require("hamjest");

Given('{person} is located {int} meter(s) from {person}', function (Lucy, distance, Sean){
    // this.lucy = new Person
    // this.sean = new Person
    // this.lucy.moveTo(distance)
    console.log(`Lucy is ${distance * 100} centimetres from sean`)
});

When('Sean shouts {string}', function (message) {
    // this.sean.shout(message)
    // this.message = message
});

Then('Lucy hears Sean\'s message', function () {
    // assertThat(this.lucy.messageHeard(this.message), is([this.message]))
});