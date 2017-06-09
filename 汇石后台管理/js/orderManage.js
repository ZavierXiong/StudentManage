/**
 * Created by Administrator on 2017/6/8.
 */
var myOrder = new Vue({
    el : '#myOrder',
    data : {
        isDetail : false,
        sections:[
            {
                selected:'1',
                options:[
                    {text:'工商银行',value:'1'},
                    {text:'招商银行',value:'2'},
                    {text:'光大银行',value:'3'},
                    {text:'中信证券',value:'4'},
                    {text:'广发基金',value:'5'}
                ]
            },
            {
                selected:'1',
                options:[
                    {text:'资金转入',value:'1'},
                    {text:'资金转出',value:'2'}
                ]
            },
            {
                selected:'1',
                options:[
                    {text:'银行理财产品',value:'1'},
                    {text:'券商理财产品',value:'2'},
                    {text:'公募基金',value:'3'},
                    {text:'国债',value:'4'}
                ]
            },
            {
                selected:'1',
                options:[
                    {text:'申购',value:'1'},
                    {text:'赎回',value:'2'},
                    {text:'持有',value:'3'}
                ]
            }
        ],
        tables:[
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
            {
                tdinfo:[
                    {text:'264165612345'},
                    {text:'2015/12/16-19:01:41'},
                    {text:'工行：天添金A'},
                    {text:'申购'},
                    {text:'12,000.00'},
                    {text:'CNY 10,000.00'},
                    {text:'确认订单中'},
                ]
            },
        ],
        businessinfos:[
            {text:'工行天添利A'},
            {text:'申购'},
            {text:'确认订单'},
            {text:'人民币'},
            {text:'壹佰万整'},
            {text:'10,000,000,000.00'},
        ]
    },
    methods :{
        moredetail :function(){
            this.isDetail = true;
        },
        backlist : function(){
            this.isDetail = false;
        }
    }
});
myOrder.moredetail();
myOrder.backlist();