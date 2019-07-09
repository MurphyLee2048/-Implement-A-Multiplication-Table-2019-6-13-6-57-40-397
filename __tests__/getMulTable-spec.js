const getMulTable = require('../getMulTable');

it('should return null when invoke isValid given start 3 end 1', function() {
    // given
    const start = 3;
    const end = 1;

    // when
    const result = getMulTable.isValid(start, end);

    // then
    expect(result).toBe(null);
});

it('should return 3x6 table when invoke createTable given start number 3 end number 6', function () {
    // given
    const start = 3;
    const end = 6;

    // when
    // const result = getMulTable.createTable(start, end);

    // then
    expect(getMulTable.createTable(3, 6)).toBe("\n" +
        "3*3=9\t\n" +
        "3*4=12\t4*4=16\t\n" +
        "3*5=15\t4*5=20\t5*5=25\t\n" +
        "3*6=18\t4*6=24\t5*6=30\t6*6=36\t");
});