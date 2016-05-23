/**
 * Created by ZhangLi on 16/5/20.
 */
var LoginResourceName={
    Png:{
        LogIn_png :"res/res/loginRes.png"
    },
    Plist:{
        LogIn_plist : "res/res/loginRes.plist"
    },
};

var TestLater = cc.Layer.extend({
    _clsaaName:"TestLater",
    ctor:function(){
      var that =this ;
        that._super();

        for (var i = 0; i < LoginResourceName.Png.length; ++ i){
            cc.textureCache.addImage(LoginResourceName.Png[i]);
        }
        ///加载plist资源
        for(var i in LoginResourceName.Plist){
            cc.spriteFrameCache.addSpriteFrames(LoginResourceName.Plist[i]);
        }

        var rootNode =   sz.uiloader.widgetFromJsonFile(this, res.MainScene_json, {eventPrefix:"_on", memberPrefix:"_"} );
        rootNode.setPosition(this.width /2 , this.height /2);
        rootNode.setAnchorPoint(0.5, 0.5);
        sz.uiloader.registerTouchEvent(this, this);


        var spriteButton = new cc.Sprite("#login_account_up.png");
        spriteButton.setName("_spriteButton");
        spriteButton.x = this.width - spriteButton.width * 0.5;
        spriteButton.y = spriteButton.height * 0.5;
        this.addChild(spriteButton);
        sz.uiloader.registerTouchEvent(spriteButton, this);

    },

    _onSpriteButtonTouchBegan: function() {
        cc.log('_onSpriteButtonTouchBegan');
        return true;
    },

    _onTouchBegan: function(sender, touch) {
        cc.log("GameLayer onTouchBegan" + JSON.stringify(touch.getLocation()));
        return true;
    },

    _onTouchMoved: function(sender, touch) {
        cc.log("GameLayer onTouchMoved" + JSON.stringify(touch.getLocation()));
    },

    _onTouchEnded: function(sender, touch) {
        cc.log("GameLayer onTouchEnded" + JSON.stringify(touch.getLocation()));
    },

    _onButtonTouchBegan: function() {
        cc.log("_onButtonTouchBegan");
    },

    _onButtonTouchLong: function() {
        cc.log("_onButtonTouchLong");
    },


    _onBtn_loginEvent: function(sender, type) {
        switch (type) {
            case 0:
                cc.log("_onLoginButtonEvent: began");
                break;
            case 1:
                cc.log("_onLoginButtonEvent: move");
                break;
            case 2:
                cc.log("_onLoginButtonEvent: end");
                break;
        }
    },



});

var TestScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TestLater();
        this.addChild(layer);
    }
});