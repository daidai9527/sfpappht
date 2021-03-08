define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
	$.fn.bootstrapTable.locales[Table.defaults.locale]['formatSearch'] = function(){return "内容";};

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'community/answer/index' + location.search,
                    add_url: 'community/answer/add',
                    edit_url: 'community/answer/edit',
                    del_url: 'community/answer/del',
                    multi_url: 'community/answer/multi',
                    table: 'answer',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'name', title: __('Name')},
                        {field: 'image', title: __('Image'), events: Table.api.events.image, formatter: Table.api.formatter.image,operate: false},
                        {field: 'text', title: __('Text')},
                        {field: 'community.title', title: __('Community.title')},
                        {field: 'community.ask_image', title: __('Community.ask_image'), events: Table.api.events.image, formatter: Table.api.formatter.image},
	                    {field: 'status', title: __('发布'),formatter: Table.api.formatter.status, searchList: {'0': __('用户'), '1': __('后台')}},
	                    {field: 'tong', title: __('审核状态'), formatter: Table.api.formatter.status, searchList: {'0': __('待审核'), '1': __('已通过'),'2':'已拒绝'}},
	                    {field: 'create_time', title: __('Create_time'), operate:'RANGE', addclass:'datetimerange'},
	                    {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
