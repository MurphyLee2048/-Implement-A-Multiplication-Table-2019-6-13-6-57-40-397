const getMulTable = require('./getMulTable');

it('should return null given start 3 end 1', function() => {
    // given
    const start = 3;
    const end = 1;

    // when
    const result = getMulTable.isValid(start, end);

    // then
    expect(result).toBe(null);
});