(function() {

  if (typeof module !== 'undefined' && module.exports) {
    require('./spec_helper');
    require('../src/fill');
  }

  describe("Fill", function() {
    return it("cache templates", function() {
      var data, doc, expected;
      doc = jQuery('<div>\
        <div class="container">\
          <div>\
            <span class="hello"></span>\
            <span class="world"></span>\
          </div>\
        </div>\
      </div>');
      data = [
        {
          hello: "Hello",
          world: "World!"
        }, {
          hello: "Goodbye",
          world: "Canada!"
        }
      ];
      expected = jQuery('<div>\
        <div class="container">\
          <div>\
            <span class="hello">Hello</span>\
            <span class="world">World!</span>\
          </div>\
          <div>\
            <span class="hello">Goodbye</span>\
            <span class="world">Canada!</span>\
          </div>\
        </div>\
      </div>');
      doc.find('.container').render(data);
      doc.find('.container').render(data);
      return expect(doc.html()).htmlToBeEqual(expected.html());
    });
  });

}).call(this);
