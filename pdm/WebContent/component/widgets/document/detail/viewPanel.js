Ext.define('component.document.detail.viewPanel', {
	extend : 'Ext.panel.Panel',
	bodyPadding : 10,
	record : null,
	actionProvider : null,
	actionExecutor : null,
	hideActions : false,
	getPreviewPanel : function(rec, detailPanel) {
		return {
			bodyPadding : 10,
			html : 'no preview func is configured.'
		};
	},
	initComponent : function() {
		var me = this;
		
		this.autoHeight = true;
		this.layout = 'column';
		this.autoScroll = true;
		var rec = this.record;
		
		this.actionPanel = Ext.create('Ext.panel.Panel', {
			title : 'Actions',
			hidden : this.hideActions
		});
		
		this.titlePanel = Ext.create('Ext.panel.Panel', {
			columnWidth : 1,
			autoHeight : true,
			style : 'margin-bottom:5px;'
		});
		
		this.items = [this.titlePanel, {
			columnWidth : .75,
			items : [{
				style : 'border:1px #C0C0C0 solid;'
			},]
		}, {
			columnWidth : .25,
			style : 'padding-left:5px;',
			defaults : {
				style : 'border-top:1px #C0C0C0 solid;',
				collapsible : true,
				bodyPadding : 15,
				bodyCls : 'form-body'
			},
			items : [{
				xtype : 'button',
				btnType : 'info',
				text : '全屏显示',
				width : '80%',
				height : 30,
				margin : '0 0 2 25',
			},this.actionPanel]
		}];
		
		this.callParent();
	},
	renderData : function(rec) {
		var me = this;
		//render title.
		this.titlePanel.setHTML('<table cellspacing=0 cellpadding=0 style="width:100%;"><tr><td rowspan=2 class="icon64"><img class="icon64" onerror="this.src=\'static/images/thumbnail/_default.png\'" src="static/images/thumbnail/' + rec.raw.EXTENSION + '.png" /></td>' + 
				'<td><span style="font-size:24px;">' + rec.raw['cm:name'] + '</span>' +
				(rec.raw['cm:versionLabel'] ? '<span style="float:left;margin-right:5px;" class="fe-version-block">' + rec.raw['cm:versionLabel'] + '</span>' : '') + '</td></tr></table>');
		
		//render actions.
		var actionProvider = this.actionProvider;
		var actionExecutor = this.actionExecutor;
		
		if (actionProvider && actionExecutor) {
			var actionlist = actionProvider.getValidActions(rec);
			
			var actionInner = $(this.actionPanel.getInnerEl().dom);
			Ext.each(actionlist, function(action) {
				actionInner.append($('<div class="fe-row-action-link fe-action-icon" style="overflow:hidden;background-image:url(' + action.icon + ')' + '" title="' + actionProvider.i18nFunc(action.nlsid) + '">' + actionProvider.i18nFunc(action.nlsid) + '</div>').click(function() {
					var r = rec;
					if(action.multisupport) {
						r = [rec];
					}
					actionExecutor.execute(action, r);
				}));

			});
			
		}
		
		Ext.each(rec.raw.EXTRA, function(pack) {
			
			var key = pack.key;
			
			var html = '';
			var p = {
				title : key == '_BASIC' ? 'Basic Properties' : key,
				style : 'border-top:1px #C0C0C0 solid;',
				collapsible : true,
				bodyPadding : 15,
				bodyCls : 'form-body'
			};
			
			Ext.each(pack.attrs, function(attr) {
				
				var value = rec.raw[attr.name];
				if (value == null) {
					value = '(NONE)';
				}
				
				html += '<div class="fe-common-display-line" style="overflow:hidden;" title="' + value +'" >' + 
					attr.label + ':&nbsp;&nbsp;&nbsp;' +
					value +
				 	'</div>';
				
			});
			p.html = html;
			
			me.actionPanel.ownerCt.add(p);
			//me.actionPanel.ownerCt
			
		});
		var bs = {
//				style : 'border-top:1px #C0C0C0 solid;',
				collapsible : false,
				bodyPadding : 15,
				bodyCls : 'form-body',
				layout: {
			        type: 'vbox',
			        align: 'center'
			    },
				defaults : {
					margin : '1 0 5 0',
					width : '70%',
					height : 30,
				},
				items : [{
					xtype : 'button',
					btnType : 'success',
					text : '下载文档',
				},{
					xtype : 'button',
					btnType : 'success',
					text : '查看文档属性',
				},{
					xtype : 'button',
					btnType : 'success',
					text : '收藏',
				},]
		};
		this.actionPanel.ownerCt.add(bs);
		this.actionPanel.ownerCt.doLayout();
		
		//add preview panel
		this.titlePanel.nextSibling().getComponent(0).add(this.getPreviewPanel(rec, this));
		
	},
	afterRender : function() {
		
		var me = this;
		new Ext.util.DelayedTask(function(){
			me.doLayout();
		}).delay(100);
		
		this.callParent();

		this.renderData(this.record);
	}
});