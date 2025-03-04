let map=
"  9  92    7   9   94   6   8    3   5    9   2    7   9   946  6   8    45  5  \n"+
" 9    4   6    93  35   89  92    7  79  9     6  68    4   5    9   3   4    9 \n"+
"  3   58   9   2    7   9    4   6    2   3     9  9   3    79  99   56  68  894\n"+
"  57  79   34  46  689   3        9        7   9    5   6   8    4   5    9   3 \n"+
"  6    9   3    8   9    67  7        56       24       89  93   47   9  99    6\n"+
"  89  9     7  79    5   6    2   4                 7   9    5   6    24  4     \n"+
"   3   5    92  2        89                          2   4        9   3    7   9\n"+
"   4    8   9    6   7    3                              67  7   9    56  68   2\n"+
"6  67  7    35  56   92  2                                    2   4    8   9   3\n"+
"   69   2   4    8                                       89   3   68  89  925   \n"+
"8  89    6  67    3                                           5   7    2   4    \n"+
"    3   5    9   2                                             9   9  93    8   \n"+
"2  247   8   9    6                                           8    35  5   792  \n"+
"46  6   793  35                                                2   4    9   9   \n"+
"5    9   2    7                                                 6  68  89   35  \n"+
"79  99   46  6                                                      9   2   4   \n"+
" 9   3    8   9                                                    99    6   8  \n"+
"92    7   9                                                         4   5    93 \n"+
" 4   6    93                                                         7   9   9  \n"+
"  8   9                                                                  24  45 \n"+
" 7    34  4                                                          9   3    7 \n"+
"  9   3                                                                   6  68 \n"+
" 2 5  57                                                                  89  9 \n"+
" 3     9                                                                  9    5\n"+
" 57  7                                                                    24  45\n"+
" 6    9 5                                                                      8\n"+
" 89    5                                                                  57  7 \n"+
"  2   4                                                                    9   9\n"+
"  3    8                                                                   9    \n"+
"  57                                                                       24  4\n"+
"  69                                                                        6   \n"+
"  89                                                                       57   \n"+
"   3                                                                        9   \n"+
"    6                                                                        4  \n"+
"5  5                                                                        3   \n"+
"    9                                                                        6  \n"+
"8    4                                                                       89 \n"+
"9   3                                                                        9  \n"+
"9    6                                                                        4 \n"+
"4                                                                              7\n"+
" 8   9                                                                        6 \n"+
"7    2                                                                        89\n"+
" 9                                                                              \n"+
"9 5                                                                        2  24\n"+
" 4    9                                                                        6\n"+
"  8                                                                        5   7\n"+
" 792  2                                                                    79  9\n"+
"  9                                                                        8    \n"+
"  35  5                                                                    92  2\n"+
"  4    9                                                                        \n"+
"   8                                                                        5  5\n"+
"   93  3                                                                    79  \n"+
"   9    6                                                               6   8   \n"+
"4  45                                                                    9  93  \n"+
"    7   9                                                                    5  \n"+
"6  68    4                                                             92  2 5  \n"+
"89  9                                                                   4   6   \n"+
"9   25   7                                                                   9  \n"+
"24  46   99                                                             7   8   \n"+
"3    8                                                              6        3  \n"+
"57  782   4                                                         8   9   257 \n"+
" 9   9    68                                                             4   6  \n"+
" 9    5   7                                                         93  3    89 \n"+
" 24  4    99  9                                                      5   7   9  \n"+
" 36   8   93   5                                                34  46  689  93 \n"+
" 57    3  34    9                                                    8   9    5 \n"+
"  9   9    6   8                                                 7  793   4   6 \n"+
" 894   5   7    3                                                92  2   368  89\n"+
"  3   479  99   56  68                                       8   9    6   7    3\n"+
"   6   8    4   5    9                                   7   93  35  56   92  24\n"+
"  589  93  34    9  9                                    9   2    7   8    4   6\n"+
"   9    5   6   8 4  4                               8        6  67    3   5    \n"+
"    4  45    9   3    8   9                          9   3    89  9   2    78  8\n"+
"   3    8   9    57  78   24                     9        7   8    4   6   7    \n"+
"5   7    2   4   6    9   3    8   9    5   7     4  4   6    93  35   89  92   \n"+
"    99  93   68  89  925   7        4        9   3    8   9   2    7   8    4   \n"+
"8   9    5   7    2   4    99  9        89  9    57  78   24  46  689   3  35   \n"+
" 2  24  46    9  93    8   9    5   7    2   4        9   3    8   9    57  7   \n"+
"9   36   8   935  5   7    24  46   99  93  358  89  925   7  79    4   6   89  \n"+
" 5   7    2   4    9   9   36   8   9    5   7    3   4   699  9   3    89  92  ";

this.options = {
  root_mode: "team",
  soundtrack: "argon.mp3",
  map_size: 80,
  custom_map: map,
  max_players: 100,
  lives: 5,
  maxlevel: 7,
  maxlevellives: 0,
  friendly_colors: 2,
  asteroids_strength: 1,
  crystal_value: 1,
  speed_mod: 1.2,
  mines_self_destroy: true,
  healing_ratio: 0.25,
  station_size: 2,
  station_crystal_capacity: 0.5,
  starting_ship: 101,
  all_ships_can_dock: true,
  all_ships_can_respawn: true,
  map_name: "Team Invasion"
};

let alienArray= new Array(44).fill(0);
let alienScore= [10,20,50,1000,30,60,120,0,1200,2500,0,0,50,0,0,0,80,80,80,0,1500,2500,0,0,40,75,120,1750,80,100,150,0,100,200,300,0,1000,2500,4000,0,5000,10000,0,0];
let teamScores= [0,0];
let alienRemain = new Array(44).fill(0);
let alienCount=0;
let alienLeft=434;

var sendUI = function(ship, UI) {
  if (ship !== null && typeof ship.setUIComponent == "function") {
    if (UI.visible || UI.visible === null) ship.setUIComponent(UI);
    else ship.setUIComponent({id: UI.id, position: [0,0,0,0], visible: false});
  }
};

gameOver = function() {
  for (var ship in game.ships) {
    if (ship.team===teamScores.indexOf(Math.max(...teamScores))) {
      ship.gameover();
    }
  }
};

this.tick = function(game) {
  if (game.step>=3600 && game.step<14400 && game.step % 1200===0) {
    game.addAlien({x:0,y:0,code:10,level:0});
    alienCount=alienCount+1;
  }
  if (game.step>=14400 && game.step<21600 && game.step%1200===0) {
    game.addAlien({x:0,y:0,code:11,level:0});
    alienCount=alienCount+1;
  }
  if (game.step>=21600 && game.step<28800 && game.step%1200===0) {
    game.addAlien({x:0,y:0,code:10,level:1});
    alienCount=alienCount+1;
  }
  if (game.step>=28800 && game.step<36000 && game.step%1200===0) {
    game.addAlien({x:0,y:0,code:17,level:1});
    alienCount=alienCount+1;
  }
  if (game.step==36000) {
    game.addAlien({x:0,y:0,code:19,level:0});
    alienCount=alienCount+1;
  }
  if (game.step>=36000 && game.step<43200 && game.step%1200===0) {
    game.addAlien({x:0,y:0,code:16,level:1});
    alienCount=alienCount+1;
  }
  if (game.step>=43200 && game.step<50400 && game.step%1200===0) {
    game.addAlien({x:0,y:0,code:18,level:1});
    alienCount=alienCount+1;
  }
  if (game.step>=50400 && game.step<61200 && game.step%1200===0) {
    game.addAlien({x:0,y:0,code:10,level:2});
    alienCount=alienCount+1;
  }
  if (game.step>=61200 && game.step<72000 && game.step%600===0) {
    game.addAlien({x:0,y:0,code:11,level:2});
    alienCount=alienCount+1;
  }
  if (game.step==72000) {
    game.addAlien({x:0,y:0,code:15,level:1});
    game.addAlien({x:0,y:0,code:15,level:1});
    alienCount=alienCount+2;
  }
  if (game.step==90000) {
    game.addAlien({x:0,y:0,code:20,level:0});
    alienCount=alienCount+1;
  }
  if (game.step>=90060 && game.aliens.length===0) {
    gameOver();
  }
  if (game.step==108000) {
    gameOver();
  }
};

this.event = function(event,game) {
let alien=event.alien;
let ship=event.ship;
switch (event.name)
  {
  case "alien_destroyed":
    alienArray[alien.level+4*(alien.code-10)]=alienArray[alien.level+4*(alien.code-10)]+1;
    teamScores[ship.team]=teamScores[ship.team]+alienScores[alien.level+4*(alien.code-10)];
    if (alien.code==10 && alien.level==2){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:10,level:1}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==10 && alien.level==1){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:10,level:0}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==11 && alien.level==2){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:11,level:1}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==11 && alien.level==1){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:11,level:0}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==17 && alien.level==1){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:17,level:0});
      }
      alienCount=alienCount+2;
    }
    if (alien.code==16 && alien.level==1){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:16,level:0}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==15 && alien.level==1){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:15,level:0}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==15 && alien.level===0){  
      for (let i = 0; i < 6; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:11,level:1}); 
      }
      alienCount=alienCount+6;
    }
    if (alien.code==19 && alien.level===0){  
      for (let i = 0; i < 8; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:11,level:1}); 
      }
      alienCount=alienCount+8;
    }
    if (alien.code==19 && alien.level==1){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:19,level:0}); 
      }
      alienCount=alienCount+2;
    }
    if (alien.code==20 && alien.level===0){  
      for (let i = 0; i < 2; i++) {
        game.addAlien({x:alien.x,y:alien.y,code:19,level:1}); 
      }
      alienCount=alienCount+2;
    }
  }
};
