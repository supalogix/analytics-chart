"use strict";

var create = require("./src/create");
var update = require("./src/update");
var resize = require("./src/resize");
var remove = require("./src/remove");

var DataFactory = require("./src/util/DataFactory");
var ActionsFactory = require("./src/util/ActionsFactory");

module.exports = function() {
	return {
		create: create,
		update: update,
		resize: resize,
		remove: remove,
		dataFactory: new DataFactory(),
		actionsFactory: new ActionsFactory()
	};
}
