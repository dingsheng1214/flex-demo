$('input:radio[name="flex-direction"]').change(function(event) {
    /* Act on the event */
    $('#direction').css('flex-direction',$(this).val())
});
$('input:radio[name="flex-wrap"]').change(function(event) {
    /* Act on the event */
    $('#wrap').css('flex-wrap',$(this).val())
});
$('input:radio[name="justify-content"]').change(function(event) {
    /* Act on the event */
    $('#justify').css('justify-content',$(this).val())
});
$('input:radio[name="align-items"]').change(function(event) {
    /* Act on the event */
    $('#align-items').css('align-items',$(this).val())
});
$('input:radio[name="align-content"]').change(function(event) {
    /* Act on the event */
    $('#align-content').css('align-content',$(this).val())
});



$('input:radio[name="align-self"]').change(function(event) {
    /* Act on the event */
    $('#align-self>.item').eq('2').css('align-self',$(this).val())
});
$('.flex-grow .number input[type="number"]').each(function(index, el) {
    el.addEventListener('input',function(){
        let item_id = '#g' + (index + 1);
        $(item_id).css('flex-grow',$(this).val())
    },true)
});
$('.flex-shrink .number input[type="number"]').each(function(index, el) {
    el.addEventListener('input',function(){
        let item_id = '#s' + (index + 1);
        $(item_id).css('flex-shrink',$(this).val())
    },true)
});
$('.flex_all>.flex_number').each(function(index, el) {
   $(el).find('input[type="number"]').each(function(num_index, num_el) {
       num_el.addEventListener('input',function(){
        let css_name = $(this).attr('name');
        let css_value = css_name === 'flex-basis'? $(this).val() + '%' : $(this).val();
        $('#flex>.item').eq(index).css(css_name, css_value);
       })
   });
});
$('.order .number input[type="number"]').each(function(index, el) {
    el.addEventListener('input',function(){
        let item_id = '#o' + (index + 1);
        $(item_id).css('order',$(this).val())
    },true)
});
