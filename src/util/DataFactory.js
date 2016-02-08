module.exports = function() {
	return {
		getData: getData
	};
};

function getData(oldData, action) {
	if( action.event_name === "ITEM_ADDED" ) {
		return oldData.concat({
			label: action.label,
			value: action.value
		}).sort(function(a,b) {
			return a.label > b.label
		});
	}

	if( action.event_name === "ITEM_REMOVED" ) {
		return oldData.filter( function(item) {
			return item.label !== action.label;
		});
	}

	if( action.event_name === "ITEM_UPDATED" ) {
		return oldData.map( function(item) {
			if( item.label === action.label )
				return {
					label: action.label,
					value: action.value
				};

			return item;
		});
	}
}
