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
        bodyPadding : 5,
        items : [{
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
                title : '全部商务文件',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                autoHeight : true,
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
                            }
                        }
                    },
                    data : [{
                        status : '未读邮件',
                        identifier : 'MA-JA-005',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读邮件',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }, {
                        status : '未读抄送件',
                        identifier : 'MA-JA-006',
                        subject : 'Re : inclement weather',
                        sender : 'VIP Group',
                        date : '2014-01-02'
                    }]
                }
            }, {
                title : 'AAB',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                autoHeight : true,
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
	                		 html: '<span>欢迎您登录EUD门户<a href=#>[退出]</a></span>',
	                 },{
	                	 xtype:'toolbar',
	                	 border:true,
	                	 style:'background-color:Lavender',
	                	 height:150,
	                	 items:[{
	                		 xtype:'label',
	                		 text:'您有：',
	                	 },{
	                		 xtype:'panel',
	                		 style:'background-color:blue',
	                		 html: '<div> <ul >  <li> <p><span class="num">10</span><br>财富值</p></li>'+
	                		 '<li><p><span>0</span><br>公共文档</p> </li>'+
	                		 '<li> <p><span>5</span><br>文辑</p> </li>  </ul> </div>',
	                		 cls:'div{list-style:none;}',
	                	 }
	                   ],
	                 }]
            },{
                title : '我的收藏',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                height : 200
            }, {
                title : '搜索模板',
                cls : 'portlet portlet-margin',
                headerCls : 'header-bg',
                height : 104
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
    
    var picPanel = {
    	    xtype: 'box', //或者xtype: 'component',  
    	    region: 'north',
    	    width: 100, //图片宽度  
    	    height: 100, //图片高度  
    	    autoEl: {  
    	        tag: 'img',    //指定为img标签  
    	        src: 'static/images/zghpic.jpg'    //指定url路径  
    	    }  
    	};
    

    return {
        xtype : 'panel',
        border : false,
        layout : 'border',
        bodyBorder : false,
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
        items:[picPanel, homePanel],
    };

}
