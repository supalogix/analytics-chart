var Factory = require("./ActionsFactory");

var oldData = [
	{
		label: "Item A",
		value: 1234
	},
	{
		label: "Item C",
		value: 134
	},
];

var newData = [
	{
		label: "Item A",
		value: 134
	},
	{
		label: "Item B",
		value: 134
	},
	{
		label: "Item D",
		value: 1345
	},
];

var factory = new Factory();

var actions = factory.getActions( oldData, newData );

console.log(actions);


// Bug in Removing Item from Old Data (infinite recurrsion);
