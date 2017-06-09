/**
 * Created by Administrator on 2017/6/7.
 */
var price = new Vue({
    el : '#myprice',
    data : {
        sections:[
            {
                selected:'1',
                options:[
                    {text:'结算币种(全部)',value:'1'},
                    {text:'人民币',value:'2'},
                    {text:'美元',value:'3'},
                ]
            },
            {
                selected:'1',
                options:[
                    {text:'托管平台(全部)',value:'1'},
                    {text:'中国工商银行',value:'2'},
                    {text:'中国平安银行',value:'3'},
                ]
            },
            {
                selected:'1',
                options:[
                    {text:'状态(全部)',value:'1'},
                    {text:'交易期',value:'2'},
                    {text:'发行',value:'3'},
                    {text:'发行成功',value:'4'},
                    {text:'发行失败',value:'5'},
                    {text:'产品停止交易',value:'6'},
                    {text:'停止申购',value:'7'},
                    {text:'停止赎回',value:'8'},
                    {text:'权益登记',value:'9'},
                    {text:'红利发放',value:'10'},
                    {text:'产品封闭',value:'11'},
                    {text:'产品终止',value:'12'},
                    {text:'停止开户',value:'13'}
                ]
            }
        ],
        tables:[
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'-5.21%'},
                    {text:'-5.21%'},
                    {text:'-5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            },
            {
                tdinfo:[
                    {text:'1'},
                    {text:'54801'},
                    {text:'汇石中而型II'},
                    {text:'中国工商银行'},
                    {text:'开放式T+1'},
                    {text:'CNY 10,000.00'},
                    {text:'1,3422'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'+5.21%'},
                    {text:'回信 96'},
                    {text:'交易期'},
                ]
            }
        ],
        priceTables:[
            {
                tdinfo:[
                    {text:'2014年3月24日'},
                    {text:'2.1334'},
                    {text:'13%'},
                    {text:'2,000.00'},
                ]
            },
            {
                tdinfo:[
                    {text:'2014年3月24日'},
                    {text:'2.1334'},
                    {text:'13%'},
                    {text:'2,000.00'},
                ]
            },
            {
                tdinfo:[
                    {text:'2014年3月24日'},
                    {text:'2.1334'},
                    {text:'13%'},
                    {text:'2,000.00'},
                ]
            },
            {
                tdinfo:[
                    {text:'2014年3月24日'},
                    {text:'2.1334'},
                    {text:'13%'},
                    {text:'2,000.00'},
                ]
            },                                    
        ]
    }
});
