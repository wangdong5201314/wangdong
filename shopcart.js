// **
// *购物车JS文件
// 
$(function () {
    // 1.全选
    /*1.获取全选表头全选框的状态
      2.表单中的单选框状态要一致
      3.结算的全选状态要一致
    */
    //    定义三个变量
    var $theadInput = $('table thead input[type=checkbox]');
    var $tbodyInput = $('table tbody input[type=checkbox]');
    var $allPriceInput = $('.totalPrice input[type=checkbox]');
    $theadInput.change(function () {
        // 获取选中状态
        var state = $(this).prop('checked');

        // 表格中保持一致,结算中的保持一致
        $tbodyInput.prop('checked', state)
        $allPriceInput.prop('checked', state)
    })

    // 结算的选中框，也有效果
    $allPriceInput.change(function () {
        // 获取选中状态
        var state = $(this).prop('checked');

        // 上面的全选，表格的也要保持一致
        $tbodyInput.prop('checked', state)
        $theadInput.prop('checked', state)
    })
    // 影响全选
    $tbodyInput.change(function () {
        // 顶一个标杆
        var flag = true;
        // 总价
        var totalPrice = 0;

        // 循环表格中的所有选择框的选中状态
        $tbodyInput.each(function (i, input) {

            // 只要有一个没选中，则状态为false
            if (!$(input).prop('checked')) {
                flag = false;
            } else {
                totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
            }
        })

        // 把状态用来改变全选框
        $allPriceInput.prop('checked', flag)
        $theadInput.prop('checked', flag)

        // 渲染到总价的位置
        $('.total').text(totalPrice.toFixed(2))
    })

    // 数量的加减功能
    $('.add').on('click', function () {
        // 下一个input节点
        var $nextInput = $(this).next();

        // 获取值
        var oldVal = parseInt($nextInput.val());

        // 自增
        oldVal++;

        // 重新赋值给输入框
        $nextInput.val(oldVal);

        // 小计
        subTotalPrice(oldVal, $(this));
    })
    // 减少
    $('.reduce').on('click', function () {
        // 上一个input节点
        var $prevInput = $(this).prev();

        // 获取值
        var oldVal = parseInt($prevInput.val());

        // 自增
        oldVal--;
        // 如果小于1则=1，不然=自己
        oldVal = oldVal < 1 ? 0 : oldVal;

        // 重新赋值给输入框
        $prevInput.val(oldVal);
        // 小计
        subTotalPrice(oldVal, $(this));
    })

    // 抽取一个小计的函数
    function subTotalPrice(val, dom) {
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
        // 把小计放入到dom的相应位置
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }

    // 删除
    $('.del').click(function () {
        // 删除整行
        $(this).closest('tr').remove();
    })


})
