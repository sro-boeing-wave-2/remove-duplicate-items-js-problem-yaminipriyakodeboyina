/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const count = new Array(items.length);
  let c;
  c = 0;

  for (let i = 0; i < items.length - 1; i += 1) {
    count[i] = 0;
  }


  for (let i = 0; i < items.length - 1; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i] === items[j]) {
        count[j] = 1;
        c += 1;
      }
    }
  }
  const y = items.length - c;
  const items1 = new Array(y);
  let k;
  k = -1;
  for (let i = 0; i < items.length; i += 1) {
    if (count[i] === 0) {
      k += 1;
      items1[k] = items[i];
    }
  }
  return items1;
};

module.exports = removeDuplicateItems;
