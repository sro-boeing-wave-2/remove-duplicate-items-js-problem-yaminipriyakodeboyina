const should = require('should');
const removeDuplicateItems = require('../');

describe('Remove duplicate items', () => {
  it('Should remove duplicate items', () => {
    const items = [
      'Bryan Clark',
      'Juan Buis',
      'Napier Lopez',
      'Bryan Clark',
      'Napier Lopez',
      'Mike',
      'Michael Jordan',
      'Juan Buis',
    ];

    const expectedItems = [
      'Bryan Clark',
      'Juan Buis',
      'Napier Lopez',
      'Mike',
      'Michael Jordan',
    ];

    const noOfItems = items.length;
    const itemsWithNoDuplicates = removeDuplicateItems(items);
    items.length.should.be.exactly(noOfItems);
    should.exist(itemsWithNoDuplicates, 'The collection returned from `removeDuplicateItems` cannot be null or undefined');
    itemsWithNoDuplicates.should.eql(expectedItems);
  });
});
