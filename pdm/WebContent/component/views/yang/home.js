function() {

    var treePanel = Ext.create('Ext.tree.Panel', {
        region : 'west',
        preventHeader : true,
        animCollapse : true,
        VISautoDestroy : true,
        width : 200,
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
            }]
        },
        rootVisible : true,
        collapsible : true,
        bodyBorder : false,
        collapseMode : 'mini',
        xtype : 'tree',
        useArrows : true
    });

    var store = new Ext.data.Store({
        fields : ['cm:name', 'cm:title', 'cm:description', 'extension'],
        pageSize : 30,
        proxy : {
            type : 'ajax',
            reader : {
                type : 'json',
                root : 'results',
                totalProperty : 'total'
            },
            url : Utils.getCDAUrl('ObjectManagement', 'getContents')
        }
    });
//TODO add columns
    var homePanel = Ext.create('Ext.panel.Panel', {
        border : false,
        layout : 'column',
        region : 'center',
        autoScroll : true,
        bodyPadding : 0,
        items : [{
        	columnWidth: 1,
        	items:[{
        		 xtype: 'component', //或者xtype: 'box',  
          	    region: 'north',
          	    width: '100%', //图片宽度  
          	    height: 100, //图片高度  
          	    autoEl: {  
          	        tag: 'img',    //指定为img标签  
          	        src: 'static/images/xdfvip.jpg'    //指定url路径  
          	    }
        	}]
    	  
    	},{
            columnWidth : .7,
            items : [{
            	xtype:'toolbar',
            	/*layout: {
            	    pack: 'center'
            	},*/
            	layout: 'hbox',
            	items:[
            	       {
            	    	  btnType : 'info',
            	    	  text: '我的待办',
            	    	  width: 100,
            	       }, '->',{
            	    	  btnType : 'success',
            	    	  text: '待办任务',
            	       },
        	       ],
        	       cls : 'portlet portlet-margin',
                   headerCls : 'header-bg',
			},{
				 	cls : 'portlet portlet-margin',
	               // headerCls : 'header-bg',
	                autoHeight : true,
//	                hideHeaders : true,
	                //closable:true,
	                //collapsible : true,
	                xtype : 'grid',
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
			},{
                title : '全部商务文件',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                autoHeight : true,
                closable:true,
                collapsible : true,
                xtype : 'grid',
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
                hideHeaders : true,
                /*
                features : [{
                    ftype : 'grouping',
                    startCollapsed : true,
                    groupHeaderTpl : '{name}<tpl if="rows[0].raw.placeholder!=null">(0)</tpl><tpl if="rows[0].raw.placeholder==null">({rows.length})</tpl>&nbsp;&nbsp;&nbsp;&nbsp;查看全部'
                }],*/
                viewConfig: {
         /*           getRowClass: function(record, rowIndex, rowParams, store){
                        return record.get('placeholder') ? 'x-hide-display' : '';
                    }*/	
                },
                store : {
                    fields : ['state', 'subject', 'sender', 'date'],
                    listeners : {
                        load : function(store) {
                      /*      if(store.groupField == 'status') {
                                var STATUSES = ['未读邮件', '未读抄送件', '未解决邮件', '逾期邮件', '待您审批的邮件'];
                                for(var i = 0; i < STATUSES.length; i++) {
                                    if(store.find('status', STATUSES[i]) == -1) {
                                        var r = store.add({
                                            placeholder : true,
                                            status : STATUSES[i]
                                        });
                                    }
                                }

                                store.sort();
                            }*/
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
            }, {
                title : 'AAB',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                autoHeight : true,
                closable:true,
                collapsible : true,
                xtype : 'grid',
                columns : [{
                    dataIndex : 'identifier',
                    flex : 1
                }, {
                    dataIndex : 'subject',
                    flex : 1
                }, {
                    dataIndex : 'sender',
                    flex : 1
                }, {
                    dataIndex : 'date',
                    width : 120
                }],
                hideHeaders : true,
                /*
                features : [{
                    ftype : 'grouping',
                    startCollapsed : true,
                    groupHeaderTpl : '{name}<tpl if="rows[0].raw.placeholder!=null">(0)</tpl><tpl if="rows[0].raw.placeholder==null">({rows.length})</tpl>&nbsp;&nbsp;&nbsp;&nbsp;查看全部'
                }],*/
                viewConfig: {
                    getRowClass: function(record, rowIndex, rowParams, store){
                        return record.get('placeholder') ? 'x-hide-display' : '';
                    }
                },
                store : {
                    groupField : 'status',
                    fields : ['identifier', 'status', 'subject', 'sender', 'date', 'placeholder'],
                    listeners : {
                        load : function(store) {
                            if(store.groupField == 'status') {
                                var STATUSES = ['未读文档传送', '未读文档抄送传送件'];
                                for(var i = 0; i < STATUSES.length; i++) {
                                    if(store.find('status', STATUSES[i]) == -1) {
                                        var r = store.add({
                                            placeholder : true,
                                            status : STATUSES[i]
                                        });
                                    }
                                }

                                store.sort();
                            }
                        }
                    },
                    data : [{
                        status : '未读文档传送',
                        identifier : 'MA-JA-005',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档传送',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档传送',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档传送',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档抄送传送件',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档抄送传送件',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }]
                }
            }, {
                title : '工程文件试验程序',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                autoHeight : true,
                closable:true,
                collapsible : true,
                xtype : 'grid',
                columns : [{
                    dataIndex : 'identifier',
                    flex : 1
                }, {
                    dataIndex : 'subject',
                    flex : 1
                }, {
                    dataIndex : 'sender',
                    flex : 1
                }, {
                    dataIndex : 'date',
                    width : 120
                }],
                hideHeaders : true,
                /*
                features : [{
                    ftype : 'grouping',
                    startCollapsed : true,
                    groupHeaderTpl : '{name}<tpl if="rows[0].raw.placeholder!=null">(0)</tpl><tpl if="rows[0].raw.placeholder==null">({rows.length})</tpl>&nbsp;&nbsp;&nbsp;&nbsp;查看全部'
                }],*/
                viewConfig: {
                    getRowClass: function(record, rowIndex, rowParams, store){
                        return record.get('placeholder') ? 'x-hide-display' : '';
                    }
                },
                store : {
                    groupField : 'status',
                    fields : ['identifier', 'status', 'subject', 'sender', 'date', 'placeholder'],
                    listeners : {
                        load : function(store) {
                            if(store.groupField == 'status') {
                                var STATUSES = ['未读文档传送', '未读文档抄送传送件'];
                                for(var i = 0; i < STATUSES.length; i++) {
                                    if(store.find('status', STATUSES[i]) == -1) {
                                        var r = store.add({
                                            placeholder : true,
                                            status : STATUSES[i]
                                        });
                                    }
                                }

                                store.sort();
                            }
                        }
                    },
                    data : [{
                        status : '未读文档传送',
                        identifier : 'MA-JA-005',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档传送',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档传送',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档传送',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档抄送传送件',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读文档抄送传送件',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }]
                },
   //             }
           }]
        },{
        	 columnWidth : .3,
        	 items:[{
	        	xtype:'toolbar',
	        	border : false,
	            layout : 'vbox',
	            cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
	            items : [
	                     {
	                    	 xtype: 'label',
	                    	 text: '您好！aa01',
	                 },{
	                		 xtype: 'label',
	                		 html: '<p>欢迎您登录EUD门户<a href=#>[退出]</a></p>',
	                		 //bodyStyle:'padding:10px',
	                 },{
	                	 xtype:'toolbar',
	                	 border:true,
	                	 style:'background-color:Lavender',
	                	 height:70,
	                	 width:'100%',
	                	 items:[{
	                		 xtype:'label',
	                		 text:'您有：',
	                	 },{
	                		 xtype:'toolbar',
	                		// cls:'zghuserpanel',
	                		 bodyStyle: 'background:GhostWhite;',
	                		 width:'85%',
	                		 height:'100%',
	                		 layout: {
	                			    pack: 'center'
	                			},
                			 html: '<style>li {list-style:none; float:left;}</style>'+
 	                		'<div><ul ><li style="margin:-15px 15px 0 20px" align="center"><p><span>10</span><br>待办</p></li>'+
 	                		 '<li style="margin:-15px 15px 0 0" align="center"><p><span>0</span><br>处理中</p> </li>'+
 	                		 '<li style="margin:-15px 15px 0 0" align="center"><p><span>5</span><br>收藏</p></li></ul></div>',
	                	 }
	                   ],
	                 }]
            },{
                title : '我的收藏',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                height : 200,
                xtype:'grid',
                autoHeight : true,
                hideHeaders : true,
                columns : [{
                    dataIndex : 'title',
                    flex : 1
                }],
                store : {
                    fields : ['title'],
                    listeners : {
                        load : function(store) {
                        }
                    },
                    data : [{
                    	title:'-AA-L-'
                    }, {
                    	title:'007-AA-L-2012-00019'
                    }, {
                    	title:'007-AA-L-2012-00020'
                    }, {
                    	title:'007-AA-L-2012-00030'
                    }, {
                    	title:'007-AA-L-2012-00033'
                    }, {
                    	title:'007-AA-L-2012-00034'
                    }]
                },
            }, {
                title : '搜索模板',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                height : 115,
                xtype:'grid',
                autoHeight : true,
                hideHeaders : true,
                columns : [{
                    dataIndex : 'title',
                    flex : 1
                }],
                store : {
                    fields : ['title'],
                    listeners : {
                        load : function(store) {
                        }
                    },
                    data : [{
                    	title:'模板'
                    }, {
                    	title:'AA-45'
                    }, {
                    	title:'AA'
                    }]
                },
            }, {
                title : '其他功能',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                //height : 100
            },{
            	xtype:'toolbar',
            	layout: {
            	    pack: 'center'
            	},
            	items:[
            	       {
            	    	  btnType : 'success',
            	    	  text: '上传我的文档',
            	    	  width: 150,
            	    	  cls:"x-btn-text-icon",
            	    	  icon: 'static/images/user_up.gif',
            	       },
            	       ],
        	       cls : 'portlet portlet-margin',
                   headerCls : 'header-bg',
			}]
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
        //html : 'html代码',
        listeners : {
            viewShown : function() {
               // store.reload();
            }
        },
        //items : [treePanel, taskBody]
        items:[homePanel],
    };

}
