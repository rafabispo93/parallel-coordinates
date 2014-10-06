var vows = require('vows'),
    assert = require('assert'),
    events = require('events'),
    load = require('./load'),
    suite = vows.describe('brushMode');

function d3Parcoords() {
  var promise = new(events.EventEmitter);
  load(function(d3) {
    var pc = d3.parcoords();

    d3.select('body').append('div').attr('id', 'test');
    pc('div#test');
    promise.emit('success', pc);
  });
  return promise;
}

suite.addBatch({
  'd3.parcoords': {
    'has by default': {
       topic: d3Parcoords(),
       'the brush mode "None"': function(pc) {
         assert.strictEqual(pc.brushMode(), "None");
       }
    },
  }
});

suite.export(module);
