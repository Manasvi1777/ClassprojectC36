class Form
{
  constructor(){};
  display()
  {
      var title = createElement('h2');
      title.html("CAR RACING GAME");
      title.position(250,1);
      
      var input = createInput("enter_name");
      input.position(250,100);

      var button = createButton("Start");
      button.position(250,150);

      var greeting = createElement('h3');

      button.mousePressed(funtion(){
          input.hide();
          button.hide();

          var name = input.value()
          playerCount+=1
          player.update(name)
          player.updateCount(playerCount)
          greeting.html("hello "+name);
          greeting.position(100,100)
      })
      
  }
}