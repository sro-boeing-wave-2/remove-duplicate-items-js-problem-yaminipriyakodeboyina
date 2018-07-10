/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
var count= new Array(items.length);

var c;
c=0;
for(var i=0;i<items.length-1;i++)
{
  count[i]=0;
}


for(var i=0;i<items.length-1;i++)
{
  for(var j=i+1;j<items.length;j++)
  {
    if(items[i]==items[j])
    {
         count[j]=1;
         c=c+1;
    }
  }
}

var items1= new Array();
var k;
k=-1;
for(var i=0;i<items.length;i++)
{
    if(count[i]==0)
    {
      k++;
      items1[k]=items[i];

    }
}
return items1;

};

module.exports = removeDuplicateItems;
