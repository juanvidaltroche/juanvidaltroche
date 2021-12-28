
	new Ext.grid.RowSelectionModel({
			singleSelect: true,
			listeners: {
				rowselect: function(sm, row, rec) {
					console.log(rec);	
					console.log(row);						
					Ext.getCmp("idcitte").setValue(rec.data.docreg_cite);
					Ext.getCmp("idref").setValue(rec.data.docreg_referencia);				
					
					}
			}
		})
	

var smGridq = new Ext.grid.CellSelectionModel({
		singleSelect: true,
		listeners: {
			cellselect: function(sm, row, col) {
				console.log(sm.selection.record.data);
				Ext.getCmp("idcitte").setValue(sm.selection.record.data.docreg_cite);
				Ext.getCmp("idref").setValue(sm.selection.record.data.docreg_referencia);
				
				console.log(row);
				console.log(col);
			}
		}
	});
