function picker_single3() {
	var win = Ti.UI.createWindow();
	win.backgroundColor = 'black';
	
	var picker = Ti.UI.createPicker();

	if (Ti.Platform.osname === 'tizen') {
		// On Mobile Web/Tizen, by default, the picker fills the entire view it is contained,
		// unless the size is provided.
		picker.width = 100;
		picker.height = 110;
		picker.color = '#fc0';
	}

	// just add each row implicitly to one column
	picker.add(Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'}));
	picker.add(Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s'}));
	picker.add(Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'}));
	picker.add(Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'}));
	
	// turn on the selection indicator (off by default)
	picker.selectionIndicator = true;
	
	win.add(picker);
	
	var label = Ti.UI.createLabel({
		text:'Make a move',
		top:10,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'white'
	});
	win.add(label);
	
	
	picker.addEventListener('change',function(e)
	{
		Ti.API.info("You selected row: "+e.row+", column: "+e.column+", custom_item: "+e.row.custom_item);
		label.text = "row index: "+e.rowIndex+", column index: "+e.columnIndex;
	});

	return win;
}

module.exports = picker_single3;