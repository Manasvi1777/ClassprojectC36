class Game
{
 constructor(){};
 getState()
 {
    var gs = database.ref("gameState");
    gs.on("value",function (data){
        gameState = data.val();
    })
 }

 update(states)
 {
     database.ref("/").update({
         'gameState':states
     })
 }
 start()
 {
    if (gameState===0)
    {
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
 }
}