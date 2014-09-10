function() {

//TODO add columns
    var zghsearchPanel = Ext.create('Ext.panel.Panel', {
        border : true,
        layout : 'column',
        region : 'center',
        //autoScroll : true,
        bodyPadding : 0,
        items : [{
        	columnWidth : .2,
        	xtype:'panel',
        	//region:'west',
        	items:[
        	       {
        	    	 buttons :  
        	       },
    	           {  
    	               //title: 'General Info',  
    	               xtype: 'form', 
    	               //align : 'center',
    	               defaults : {
    	            	 padding : '1, 20, 5, 20',  
    	            	 width : 200,
    	            	 //bodyStyle : {align:'center',},
    	               },
    	               items: [
	                       {
	                    	 xtype : 'label',
	                    	 text : '项目代码',
	                       },
    	                   {  
    	                       xtype: 'textfield',  
    	                       //fieldLabel: '项目代码',  
    	                       //value: 'Vitaliy',  
    	                       //allowBlank: false  
    	                   },
    	                   {
  	                    	 xtype : 'label',
  	                    	 text : '文件源码',
  	                       },
    	                   {  
    	                       xtype: 'textfield',  
    	                       //fieldLabel: '文件源码',  
    	                       //value: 'Khmurach',  
    	                       //allowBlank: false  
    	                   },
    	                   {
    	                    	 xtype : 'label',
    	                    	 text : '文档名称',
    	                   },
    	                   {  
    	                       xtype: 'textfield',  
    	                       //fieldLabel: '文档名称',  
    	                       //value: 'Khmurach',  
    	                       //allowBlank: false  
    	                   },
    	                   {
  	                    	 xtype : 'label',
  	                    	 text : '中文标题',
    	                   },
    	                   {  
    	                       xtype: 'textfield',  
    	                       //fieldLabel: '中文标题',  
    	                       //value: 'Khmurach',  
    	                       //allowBlank: false  
    	                   }, 
    	                   {
    	                    	 xtype : 'label',
    	                    	 text : '英文标题',
      	                   },
    	                   {  
    	                       xtype: 'textfield',  
    	                       //fieldLabel: '英文标题',  
    	                       //value: 'Khmurach',  
    	                       //allowBlank: false  
    	                   }, 
    	                   {
  	                    	 xtype : 'label',
  	                    	 text : '部分通用',
    	                   },
    	                   {  
    	                       xtype: 'textfield',  
    	                       //fieldLabel: '部分通用',  
    	                       //value: 'Khmurach',  
    	                       //allowBlank: false  
    	                   }, 
    	                   {
    	                    	 xtype : 'label',
    	                    	 text : '要根据属',
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
    	               title: 'Additional Info',  
    	               xtype: 'form',  
    	               items: [  
    	                   {  
    	                       xtype: 'textfield',  
    	                       fieldLabel: 'Country',  
    	                       value: 'Ukraine',  
    	                       allowBlank: false  
    	                   },  
    	                   {  
    	                       xtype: 'textfield',  
    	                       fieldLabel: 'City',  
    	                       value: 'Kiev',  
    	                       allowBlank: false  
    	                   }  
    	               ],  
    	               buttons: [{  
    	                   text: 'Save',  
    	                   action: 'save',  
    	                   disabled: true  
    	               }]  
    	           }]  
        	},{
        	columnWidth : .8,
        	//region:'center',
        	items:[{
			 	cls : 'portlet portlet-margin',
               // headerCls : 'header-bg',
                autoHeight : true,
//                hideHeaders : true,
                //closable:true,
                //collapsible : true,
                xtype : 'grid',
                height:'100%',
                columnLines:false,
                columns : [{
                	header:'主题',
                	align:'center',
                    dataIndex : 'subject',
                    flex : 1
                }, {
                	header:'发送人',
                	align:'center',
                    dataIndex : 'sender',
                    flex : 1
                }, {
                	header:'接收日期',
                	align:'center',
                    dataIndex : 'date',
                    flex : 1
                }, {
                	header:'状态',
                	align:'center',
                    dataIndex : 'state',
                    width : 120
                }],
                viewConfig: {
                },
                store : {
                    fields : ['state', 'subject', 'sender', 'date'],
                    listeners : {
                        load : function(store) {
                        }
                    },
                    data : [{
                        state : '休眠',
                        subject : '文档生效流程 2012-07-10',
                        sender : 'Tian Chao',
                        date : '2014-01-02'
                    }, {
                        state : '暂停',
                        subject : '内部设计审查流程',
                        sender : 'aa01',
                        date : '2014-01-02'
                    }, {
                        state : '暂停',
                        subject : '流程初始化 2013-01-18',
                        sender : 'aa01',
                        date : '2014-01-02'
                    }]
                }
		
        	       }],
        }],
    });

    return {
        xtype : 'panel',
        border : false,
        layout : 'border',
        bodyBorder : false,
       // autoScroll:true,
        bodyStyle : {
            background : 'transparent'
        },
       // html : 'html代aaa码',
        listeners : {
            viewShown : function() {
               // store.reload();
            }
        },
        //items : [treePanel, taskBody]
       items:[zghsearchPanel],
    };

}
