var Factory = require("./DataFactory");
var factory = new Factory();

var oldData = [
	{
		label: "Item A",
		value: 1234
	},
	{
		label: "Item C",
		value: 134
	},
	{
		label: "Item Z",
		value: 431
	},
];

var actions = [ 
  { event_name: 'ITEM_UPDATED', label: 'Item A', value: 134 },
  { event_name: 'ITEM_REMOVED', label: 'Item C' },
  { event_name: 'ITEM_ADDED', label: 'Item B', value: 134 },
  { event_name: 'ITEM_ADDED', label: 'Item D', value: 1345 } ];

var data;
console.log(oldData);
data = factory.getData(oldData, actions[0]);
console.log("");
console.log(data);
data = factory.getData(data, actions[1]);
console.log("");
console.log(data);
data = factory.getData(data, actions[2]);
console.log("");
console.log(data);
data = factory.getData(data, actions[3]);
console.log("");
console.log(data);

