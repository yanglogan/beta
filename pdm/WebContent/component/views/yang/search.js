function() {
	
	
	if (typeof FileExplorer == 'undefined') {
        Utils.importCSS(['static/ext/fileexplorer/theme.css']);
        Utils.importJS(['static/ext/fileexplorer/fileexplorer.js', 'static/ext/fileexplorer/i18n/lang-' + localeString + '.js']);
    }

    FileExplorer.currentUserName = userLoginId;
    FileExplorer.thumbnailRootPath = 'static/images/thumbnail/';
    FileExplorer.iconRootPath = 'static/images/filetypes/';

//TODO add columns
    var zghsearchPanel = Ext.create('Ext.panel.Panel', {
        border : false,
        //layout : 'border',
        region : 'west',
        //autoScroll : true,
        bodyPadding : 0,
//        margin : '0 10 0 0',
//        	columnWidth : .2,
    	width : '20%',
    	items:[
    	       {
    	    	   xtype : 'toolbar',
    	    	   defaults : {
    	    		 padding : 0,
    	    		 margin : 0,
    	    		 height : 25,
    	    	   },
    	    	   items : [
    	    	            {
    	    	            	//xtype : 'button',
    	    	            	btnType : 'info',
    	    	            	text : '关键字搜索',
    	    	            	width : '50%',
    	    	            },
    	    	            {
    	    	            	//xtype : 'button',
    	    	            	btnType : 'deepblue',
    	    	            	text : '属性搜索',
    	    	            	width : '49%',
    	    	            }
    	    	            ],
    	    	 //buttons :  
    	       },
	           {  
	               //title: 'General Info',  
	               xtype: 'form', 
	               //align : 'center',
	               defaults : {
	            	 padding : '0, 20, 0, 20',  
	            	 width : '80%',
	            	 //bodyStyle : {align:'center',},
	               },
	               items: [
                       {
                    	 xtype : 'label',
                    	 text : '项目代码：',
                       },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '项目代码',  
	                       //value: 'Vitaliy',  
	                       //allowBlank: false  
	                   },
	                   {
                    	 xtype : 'label',
                    	 text : '文件源码：',
                       },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '文件源码',  
	                       //value: 'Khmurach',  
	                       //allowBlank: false  
	                   },
	                   {
	                    	 xtype : 'label',
	                    	 text : '文档名称：',
	                   },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '文档名称',  
	                       //value: 'Khmurach',  
	                       //allowBlank: false  
	                   },
	                   {
                    	 xtype : 'label',
                    	 text : '中文标题：',
	                   },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '中文标题',  
	                       //value: 'Khmurach',  
	                       //allowBlank: false  
	                   }, 
	                   {
	                    	 xtype : 'label',
	                    	 text : '英文标题：',
  	                   },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '英文标题',  
	                       //value: 'Khmurach',  
	                       //allowBlank: false  
	                   }, 
	                   {
                    	 xtype : 'label',
                    	 text : '部分通用：',
	                   },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '部分通用',  
	                       //value: 'Khmurach',  
	                       //allowBlank: false  
	                   }, 
	                   {
	                    	 xtype : 'label',
	                    	 text : '要根据属：',
  	                   },
	                   {  
	                       xtype: 'textfield',  
	                       //fieldLabel: '要根据属',  
	                       //value: 'Khmurach',  
	                       //allowBlank: false  
	                   }
	               ],  
	               buttons: [{
	            	   btnType : 'info',
	                   text : '搜索',
	                   width : '100%',
	                   //action: 'save',  
	                   //disabled: true  
	               }]  
	           },  
	           {  
	               xtype: 'form',  
	               defaults : {
  	            	 padding : '0 20 0 20', 
  	            	 margin : '0 0 5 0',
  	            	 width : '100%',
  	            	 //bodyStyle : {align:'center',},
  	               },
	               items: [  
	                       {
	                    	 xtype : 'label',
	                    	 text : '搜索选项：',
	                       },
	                   {  
	                       xtype: 'combo',  
	                       width : 197,
	                       emptyText : '---请选择---',
	                   },{
	                	   xtype : 'toolbar',
	                	   items : [{
	                		   btnType : 'info',
	                		   text : '保存',
	                	   },{
	                		   btnType : 'info',
	                		   text : '取消',
	                	   }],
	                   } 
	               ],  
	           },{
	        	   xtype : 'toolbar',
	        	   defaults : {
	        		 align : 'center',
	        		 margin : '0 0 0 10',
	        	   },
	        	   style : {
	        		 margin : '0 10 30 0',  
	        	   },
	        	   items : [{
	        		   btnType : 'success',
    	        	   text : '导出搜索结果',
    	        	   width : '90%',
	        	   }],
        	}],
    });
    
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
    
    var objList1 = Ext.create('FileExplorer.TableViewPanel', {
    	region : 'center',
    });
   
    
    var objList = Ext.create('FileExplorer.ObjList', {
        region : 'center',
//        i18nFunc : msg,
//        actionProvider : actionProvider,
//        actionExecutor : actionExecutor,
        listeners : {
            selectionchange : function(recs) {
                //console.log(recs);
            }
        },
        viewConfigs : {
           /* detailed : {
                columns : [{
                    xtype : 'fethumbnailcolumn'
                }, {
                    xtype : 'fedetailcolumn',
                    flex : 1
                }],
            },*/
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
                }, /*{
                    xtype : 'feactioncolumn',
                    i18nkey : 'operation'
                }*/]
            }
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
            background : 'transparent'
        },
        listeners : {/*
            viewShown : function(signal) {
                if (!inited) {
                    inited = true;
                    return;
                }

                if (signal.reloadTree) {
                    var node = tree.getCurrentNode();
                    tree.store.reload({
                        node : node,
                        callback : function() {
                            node.expand();
                        }
                    });
                }
                if (signal.reloadGrid) {
                    objectList.getDockedItems()[2].moveFirst();
                }
            }
        */
        	viewShown : function() {
                 store.reload();
             }
        },
       items:[zghsearchPanel, objList],
    };

}
