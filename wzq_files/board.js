var BS = 15; //BOARD SIZE
var BT = 17;
var DS = 289; //17*17
var CENTER = 8;
var BLACK = 1;
var WHITE = 2;
var BORDER = -1;

function pos(x,y){
	return x+y*17;
}

function Board(){
	var data = new Array(DS);
	var currentPlayer = 0;
	var history = [];
	
	var trogglePlayer = function(){
		currentPlayer = 3 - currentPlayer;
	};
	
	this.init = function(){
		for(var i=0;i<DS;++i){
			data[i] = 0;
		}
	}
	
	this.reset = function(){
		this.init();
		for(var i=0;i<BS+2;++i){
			data[i] = data[DS-i] = data[i*(BS+2)] = data[(i+1)*(BS+2)-1] = BORDER;
		}
		data[pos(CENTER,CENTER)] = BLACK;
		currentPlayer = WHITE;
		history = [];
	};
	
	this.getChess = function(x,y){
		return data[pos(x,y)];
	};
	
	this.getPlayer = function(){
		return currentPlayer;
	};
	
	var check = function(x,y,dx,dy,chess){
		var result = 0;
		for(var i=0;i<4;++i){
			x += dx;
			y += dy;
			if( x<1 || x>BS || y<1 || y>BS){
				break;
			}
			if(data[pos(x,y)]==chess){
				++result;
			}
			else{
				break;
			}
		}
		return result;
	};
	
	this.isGameOver = function(){
		if(history.length>0){
			var chess = (history.length%2==1)?WHITE:BLACK;
			var laststep = history[history.length-1];
			var x = laststep[0];
			var y = laststep[1];
			if(check(x,y,1,0,chess)+check(x,y,-1,0,chess)>=4){
				return chess;
			}
			if(check(x,y,0,1,chess)+check(x,y,0,-1,chess)>=4){
				return chess;
			}
			if(check(x,y,1,1,chess)+check(x,y,-1,-1,chess)>=4){
				return chess;
			}
			if(check(x,y,1,-1,chess)+check(x,y,-1,1,chess)>=4){
				return chess;
			}
		}
		for(var i=0;i<DS;++i){
			if(data[i]==0){
				return 0;
			}
		}
		return 3;
	}
	
	this.putChess = function(x,y){
		if(data[pos(x,y)]==0){
			data[pos(x,y)] = currentPlayer;
			history.push([x,y]);
			trogglePlayer();
			return true;
		}
		return false;
	};
	
	this.getChessCount= function(){
		return history.length+1;
	}
	
	this.undo = function(){
		if(history.length>0){
			var step = history.pop();
			data[pos(step[0],step[1])] = 0;
			currentPlayer = (history.length%2==1)?BLACK:WHITE;
			return true;
		}
		return false;
	};
	
	this.getHistory = function(){
		return history.slice(0);
	}
	
	this.getData = function(){
		return data.slice(0);
	}
	
	this.init();
}
