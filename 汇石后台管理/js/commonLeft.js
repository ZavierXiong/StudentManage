/**
 * Created by Administrator on 2017/6/6.
 */
var vm = new Vue({
    el : '#menu',
    data:function(){
        return{
            isSelect:false
        }
    },
    methods : {
        drop_menu : function(event){
            this.isSelect = !this.isSelect;
        }
    }
});
vm.drop_menu();