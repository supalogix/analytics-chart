module.exports = function() {
	return {
		getActions: getActions
	}
};

function getActions(oldData, newData) {
	return __recur([], oldData, newData);

	function __recur(actions, oldData, newData) {
		if( isEmpty(oldData) && isEmpty(newData) )
			return actions;
			
		if( isEmpty(oldData) ) {
			var head = newData[0];
			var tail = newData.slice(1);

			var evt = {
				event_name: "ITEM_ADDED",	
				label: head.label,
				value: head.value
			};

			return __recur(actions.concat(evt),
				oldData,
				tail);
		}

		if( isEmpty(newData) ) {
			var head = oldData[0];
			var tail = oldData.slice(1);

			var evt = {
				event_name: "ITEM_REMOVED",
				label: head.label
			};

			return __recur(
				actions.concat(evt),
				tail,
				newData);
		}

		var oldHead = oldData[0];
		var oldTail = oldData.slice(1);

		var newHead = newData[0];
		var newTail = newData.slice(1);

		if( oldHead.label === newHead.label ) {
			if( oldHead.value !== newHead.value ) {
				var evt = {
					event_name: "ITEM_UPDATED",
					label: oldHead.label,
					value: newHead.value
				};

				return __recur( actions.concat(evt),
					oldTail,
					newTail);
			}

			return __recur(actions,
				oldTail,
				newTail);
		}

		if( oldHead.label > newHead.label ) {
			var evt = {
				event_name: "ITEM_REMOVED",
				label: oldHead.label
			};


			return __recur( 
				actions.concat(evt),
				oldTail,
				newData);
		}

		if( oldHead.label < newHead.label ) {
			var evt = {
				event_name: "ITEM_ADDED",
				label: newHead.label,
				value: newHead.value
			};

			return __recur( 
				actions.concat(evt),
				oldData,
				newTail);
		}
	}

	function sorter(a,b) {
		return a.label > b.label;
	}

	function isEmpty(array) {
		return array.length === 0;
	}
}
