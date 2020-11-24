class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //static functions are called by classes and not called by objects.
//static function are not attached to each of the objects and does not involve any particular objects.
static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    //=> finds the function to the original object which calls it
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val();
    }) 
  }
}