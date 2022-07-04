Ext.onReady(function(){
    var bd = Ext.getBody();

    var simple = new Ext.Panel({
        labelWidth: 75, // label settings here cascade unless overridden
        frame:true,
        title: 'Hello World',
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        items: [
            //Add children items here
        ],
    });

    simple.render(document.body);
});