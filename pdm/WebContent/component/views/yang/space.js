function() {
	
	
	if (typeof FileExplorer == 'undefined') {
        Utils.importCSS(['static/ext/fileexplorer/theme.css']);
        Utils.importJS(['static/ext/fileexplorer/fileexplorer.js', 'static/ext/fileexplorer/i18n/lang-' + localeString + '.js']);
    }

    FileExplorer.currentUserName = userLoginId;
    FileExplorer.thumbnailRootPath = 'static/images/thumbnail/';
    FileExplorer.iconRootPath = 'static/images/filetypes/';
    
    var westPanel = Ext.create('Ext.panel.Panel', {
        region : 'west',
        layout : 'column',
        width : '20%',
        height : '100%',
        padding : '0 10 0 10',
        items : [{
        	columnWidth: 1,
        	xtype : 'panel',
        	title: '我的文档',
        	collapsible : true,
            collapseDirection : 'top',
            height : '50%',
        	items : [{
	        	xtype : 'treepanel',
	            region : 'center',
	            preventHeader : true,
	            animCollapse : true,
	            VISautoDestroy : true,
	            width : '100%',
	            minWidth : 100,
	            split : true,
	            root : {
	                text : '所有项目',
	                expanded : true,
	                children : [{
	                    text : '基本工程项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, { text: "homework", expanded: true, children: [
	                              { text: "book report", leaf: true },
	                              { text: "algebra", leaf: true}
	                              ]
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }]
	            },
	            rootVisible : true,
	            collapsible : true,
	            bodyBorder : false,
	            collapseMode : 'mini',
	            useArrows : true,
        	}],
        },{
        	columnWidth: 1,
        	xtype : 'panel',
        	title: '我的收藏',
        	collapsible : true,
            collapseDirection : 'top',
            height : '50%',
        	items : [{
	        	xtype : 'treepanel',
	            region : 'center',
	            preventHeader : true,
	            animCollapse : true,
	            VISautoDestroy : true,
	            width : '100%',
	            minWidth : 100,
	            split : true,
	            root : {
	                text : '所有项目',
	                expanded : true,
	                children : [{
	                    text : '基本工程项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }, {
	                    text : '绿城房地产项目',
	                    leaf : true
	                }]
	            },
	            rootVisible : true,
	            collapsible : true,
	            bodyBorder : false,
	            collapseMode : 'mini',
	            useArrows : true,
        	}],
        }],
    });
    
    
// TODO add columns
    
    var store = Ext.create('Ext.data.Store', {
        model : 'OBJECT',
        remoteSort : true,
        proxy : {
            type : 'ajax',
            reader : {
                type : 'json',
                root : 'results',
                totalProperty : 'total'
            },
            url : Utils.getCDAUrl('DocumentLibrary', 'getContents')
        },
        sorters : [{
            property : 'cm:name',
            direction : 'ASC'
        }]
    });
    
    var objList = Ext.create('FileExplorer.ObjList', {
        region : 'center',
        listeners : {
            selectionchange : function(recs) {
                // console.log(recs);
            }
        },
        viewConfigs : {
			 detailed : { 
				 columns : [{ 
					 xtype : 'fethumbnailcolumn' 
				 },
                 { 
					 xtype : 'fedetailcolumn', flex : 1 
				 }],
             },
			 
            table : {
                columns : [{
                    xtype : 'feiconcolumn'
                }, {
                    width : 200,
                    xtype : 'fenamecolumn',
                    dataIndex : 'cm:name',
                    i18nkey : 'name'
                }, {
                    width : 200,
                    xtype : 'fedisplaycolumn',
                    dataIndex : 'cm:title',
                    i18nkey : 'title'
                }, {
                    width : 100,
                    xtype : 'feusercolumn',
                    dataIndex : 'cm:creator',
                    i18nkey : 'createdby'
                }, {
                    width : 155,
                    xtype : 'fedatetimecolumn',
                    dataIndex : 'cm:modified',
                    i18nkey : 'datemodified'
                }, {
                    width : 80,
                    xtype : 'fecolumn',
                    dataIndex : 'edm:state',
                    i18nkey : 'status'
                }, {
                    width : 80,
                    xtype : 'fesizecolumn',
                    i18nkey : 'size'	
                }, /*
					 * { xtype : 'feactioncolumn', i18nkey : 'operation' }
					 */]
            },
        },
        store : store,
    });

    var inited = false;
    return {
        xtype : 'panel',
        border : false,
        layout : 'border',
        bodyBorder : false,
       // autoScroll:true,
        bodyStyle : {
            background : 'transparent',
// margin : '0 5 0 5',
        },
        listeners : {
        	viewShown : function() {
                 store.reload();
             }
        },
       items:[westPanel, objList],
    };

}
