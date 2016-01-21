describe('countUp', function() {

  it("increments by 1", function() {
    expect(countUp(3, 1)).to.eql([1, 2, 3])
  });

  it("increments by 5", function() {
    expect(countUp(15, 5)).to.eql([5, 10, 15])
  });

  it("counts up to countUptoNumber", function() {
    expect(countUp(30, 10)).to.eql([10, 20, 30])
  });

});
