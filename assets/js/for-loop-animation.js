(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.TerminalTopHalfai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Terminal_Top_Half_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50C828").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape.setTransform(61,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC828").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(38.5,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF5555").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(16,12.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B4B4B").s().p("Egx/AB9IAAjHQAAgVAPgPQAOgOAVAAMBibAAAQAVAAAOAOQAPAPAAAVIAADHg");
	this.shape_3.setTransform(319.975,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("Egx/APoIAA+dQAAgVAOgPQAPgOAVAAMBibAAAQAUAAAPAOQAPAPAAAVIAAedg");
	this.shape_4.setTransform(320,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,200);


(lib.RightArrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("ADBUVQgjgQAAhBIAAnqQgBhBgtgvQgvguhBAAI87ADQhBAAgvgvQgtgugBhBIAAs7QABhBAtguQAvguBAgBIAAgBIc8gBQBBAAAugvQAvguAAhBIAAnrQAAhBAjgQQAjgQAxAqIaTSVQAyAqAAA7QAAA8gyArI6TSVQgjAegcAAQgLAAgKgFg");
	this.shape.setTransform(0.0338,-0.0055,0.1243,0.1244);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-16.2,49.9,32.5);


(lib.ForArrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RightArrow("synched",0);
	this.instance.setTransform(0,0,0.6161,0.6149,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-15.3,20,30.8);


// stage content:
(lib.ForLoopAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Message
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633CC").s().p("AgHASIgFgEQgDgDgCgDQgBgDgBgEQABgEABgDQACgEADgDQACgDADgBQAEgCADAAQAEAAADACQAEABADADIAEAHQABADAAAEQAAAEgBADIgEAGIgHAEQgDABgEABQgDgBgEgBg");
	this.shape.setTransform(394.9,29.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633CC").s().p("AgGASIgHgEQgDgDgBgDQgCgDAAgEQAAgEACgDQABgEADgDQADgDAEgBQADgCADAAQAEAAADACQAEABADADIAEAHQABADABAEQgBAEgBADIgEAGIgHAEQgDABgEABQgDgBgDgBg");
	this.shape_1.setTransform(381.7,29.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633CC").s().p("AgHASIgGgEQgCgDgCgDQgCgDABgEQgBgEACgDQACgEACgDQADgDADgBQAEgCADAAQAEAAAEACQADABADADIAEAHQACADgBAEQABAEgCADIgEAGIgGAEQgEABgEABQgDgBgEgBg");
	this.shape_2.setTransform(368.5,29.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHg0IgFgDIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFADIgFACIgHgCg");
	this.shape_3.setTransform(513.925,22.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6633CC").s().p("AgUA5QgKgEgHgIQgHgIgEgLQgDgLAAgOQAAgMAEgLQADgLAHgIQAHgJAKgFQAKgFALAAQANAAAJAEQAKAEAGAHQAHAHADAKQADAKAAANIAAAGIAAAFIhSAAQAAATAKAJQAKAKASAAIALAAIAKgCIAJgBIAIgCIAAARIgTADQgKACgLAAQgPAAgLgEgAgLgpQgFADgEAFQgEAEgDAHQgCAGgBAIIA9AAQABgIgCgGQgCgHgEgEQgEgFgGgDQgGgCgIAAQgFAAgGACg");
	this.shape_4.setTransform(487.375,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6633CC").s().p("AguA7IAAgPIBBhVIg/AAIAAgRIBYAAIAAAQIhABUIBDAAIAAARg");
	this.shape_5.setTransform(474.25,25.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6633CC").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHg0IgFgDIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFADIgFACIgHgCg");
	this.shape_6.setTransform(461.125,22.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6633CC").s().p("AguBTIAAgRIAnAAIAAiDIgjAAIAAgRIA2AAIAACUIAjAAIAAARg");
	this.shape_7.setTransform(447.925,22.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6633CC").s().p("AgbA6QgHgCgEgFQgFgEgCgGQgDgHABgGQAAgSANgKQANgJAZAAIAYAAIAAgLQAAgKgGgGQgHgHgOABQgJAAgKACQgJACgKAEIAAgSIAIgDIAKgCIALgCIAKgBQALAAAJADQAJACAFAFQAHAEACAIQADAHABAKIAABQIgSAAIgBgQQgKAJgKAFQgJAEgKAAQgKAAgIgDgAgKAHQgFACgEADQgEACgBAEQgCAEAAAFIABAGIAEAGQACADADAAQAEACAGAAQAGAAAJgEQAJgEAKgKIAAgVIgaAAQgHABgFABg");
	this.shape_8.setTransform(434.4,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6633CC").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHg0IgFgDIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFADIgFACIgHgCg");
	this.shape_9.setTransform(421.525,22.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6633CC").s().p("AgIBEQgLgJAAgVIAAg8IghAAIAAgRIAhAAIAAghIATgFIAAAmIA1AAIAAARIg1AAIAAA6QAAANAHAGQAHAHANgBIAMgBIAOgCIAAASIgOACIgPAAQgXABgJgLg");
	this.shape_10.setTransform(407.65,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6633CC").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHg0IgFgDIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFADIgFACIgHgCg");
	this.shape_11.setTransform(395.125,22.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6633CC").s().p("AAbA8IAAhKQAAgOgFgHQgGgGgKAAIgGABQgEABgEADIgIAHIgKAMIAABNIgUAAIAAh0IASAAIAAASIAKgKIAKgHQAFgCADAAIAKgCQASAAAKALQAJAKAAAWIAABMg");
	this.shape_12.setTransform(381.825,25.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6633CC").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHg0IgFgDIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFADIgFACIgHgCg");
	this.shape_13.setTransform(368.725,22.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9900").s().p("AgyBOIAAgTIApgnIAOgRQAGgGADgFQAEgGABgFQABgFAAgGQAAgGgBgFQgCgFgDgEQgDgEgFgCQgFgCgGAAQgKAAgIAEQgIAEgHAHIgLgNQAJgKALgFQALgGAPAAQAKAAAIAEQAIADAHAFQAFAGAEAIQADAJAAAKQAAAJgCAHQgDAIgEAHIgMAPIgRARIgbAbIBJAAIAAAUg");
	this.shape_14.setTransform(566.75,23.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6633CC").s().p("AgaA6QgIgCgFgFQgEgEgCgGQgDgHAAgGQAAgSAOgKQANgJAYAAIAZAAIAAgLQAAgKgHgGQgGgHgOABQgJAAgJACQgLACgJAEIAAgSIAIgDIAKgCIALgCIAKgBQALAAAJADQAIACAHAFQAFAEAEAIQACAHAAAKIAABQIgSAAIAAgQQgJAJgLAFQgKAEgJAAQgLAAgGgDgAgKAHQgGACgDADQgDACgCAEQgCAEAAAFIABAGIADAGQADADADAAQAEACAGAAQAGAAAJgEQAJgEAKgKIAAgVIgaAAQgHABgFABg");
	this.shape_15.setTransform(526.8,25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6633CC").s().p("AAbBTIAAhLQAAgNgFgHQgGgGgJAAIgHABQgDABgEADIgJAHIgKALIAABOIgUAAIAAilIAUAAIAAAwIgBATQAFgGAFgEIAJgGIAIgEIAKgBQASAAAJALQAKAKAAAVIAABNg");
	this.shape_16.setTransform(513.825,22.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6633CC").s().p("AgIBEQgLgJAAgVIAAg8IghAAIAAgRIAhAAIAAghIATgFIAAAmIA1AAIAAARIg1AAIAAA6QAAANAHAGQAGAHAOgBIAMgBIAOgCIAAASIgOACIgPAAQgXABgJgLg");
	this.shape_17.setTransform(500.05,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6633CC").s().p("AgZA8QgKgBgJgCIAAgTQAKADAKABIAUACQAOAAAHgEQAHgEAAgHIgBgGIgEgFIgJgFIgQgGIgPgEQgGgDgFgEQgFgEgDgFQgDgGAAgIQAAgFACgFQADgGAFgFQAGgFAJgEQAJgDAOAAIAPABIARACIAAATIgSgDIgPgCQgGAAgGACQgFABgDABQgDACgCAEQgBACAAADQAAAEABACQABADAEACIAJAFIAPAFQAKADAHADQAHADAFAEQAEAEACAFQACAGAAAGQAAAGgCAFIgGAJIgIAGIgKAFIgMACIgKABIgWgBg");
	this.shape_18.setTransform(474.275,25.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6633CC").s().p("AgZA8QgKgBgJgCIAAgTQAKADAKABIAUACQAOAAAHgEQAHgEAAgHIgBgGIgEgFIgJgFIgQgGIgPgEQgGgDgFgEQgFgEgDgFQgDgGAAgIQAAgFACgFQADgGAFgFQAGgFAJgEQAJgDAOAAIAPABIARACIAAATIgSgDIgPgCQgGAAgGACQgFABgDABQgDACgCAEQgBACAAADQAAAEABACQABADAEACIAJAFIAPAFQAKADAHADQAHADAFAEQAEAEACAFQACAGAAAGQAAAGgCAFIgGAJIgIAGIgKAFIgMACIgKABIgWgBg");
	this.shape_19.setTransform(461.075,25.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6633CC").s().p("AgZA8QgKgBgJgCIAAgTQAKADAKABIAUACQAOAAAHgEQAHgEAAgHIgBgGIgEgFIgJgFIgQgGIgPgEQgGgDgFgEQgFgEgDgFQgDgGAAgIQAAgFACgFQADgGAFgFQAGgFAJgEQAJgDAOAAIAPABIARACIAAATIgSgDIgPgCQgGAAgGACQgFABgDABQgDACgCAEQgBACAAADQAAAEABACQABADAEACIAJAFIAPAFQAKADAHADQAHADAFAEQAEAEACAFQACAGAAAGQAAAGgCAFIgGAJIgIAGIgKAFIgMACIgKABIgWgBg");
	this.shape_20.setTransform(408.275,25.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6633CC").s().p("AgJBEQgKgJAAgVIAAg8IghAAIAAgRIAhAAIAAghIATgFIAAAmIA1AAIAAARIg1AAIAAA6QAAANAHAGQAGAHAOgBIAMgBIAOgCIAAASIgOACIgPAAQgWABgLgLg");
	this.shape_21.setTransform(473.65,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6633CC").s().p("AAkA8IAAhTIAAgJIgBgGIgCgDIgDgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgEAEIgFAIIgHAOIAABKIgSAAIAAhRIAAgKIgBgHIgCgDIgEgBIgEACIgEADIgFAJIgHAOIAABKIgTAAIAAh0IAQAAIABAVIAGgLQADgEADgDQADgDADgBQAEgCAEAAQAJAAAFAGQAEAHAAANIAGgLQADgFADgDQADgDADgCQAEgCAFAAQAXAAAAAjIAABUg");
	this.shape_22.setTransform(434.6,25.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6633CC").s().p("AgUA5QgKgEgHgIQgHgIgEgLQgDgLAAgOQAAgMAEgLQADgLAHgIQAHgJAKgFQAKgFALAAQANAAAJAEQAKAEAGAHQAHAHADAKQADAKAAANIAAAGIAAAFIhSAAQAAATAKAJQAKAKASAAIALAAIAKgCIAJgBIAIgCIAAARIgTADQgKACgLAAQgPAAgLgEgAgLgpQgFADgEAFQgEAEgDAHQgCAGgBAIIA9AAQABgIgCgGQgCgHgEgEQgEgFgGgDQgGgCgIAAQgFAAgGACg");
	this.shape_23.setTransform(421.375,25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6633CC").s().p("AgvA8IAAh0IASAAIABAVQAKgNALgFQAJgGAKAAQASAAAKAMQAJAMgBAXIgUAAQAAgPgFgHQgFgHgJAAIgIACQgDABgFADIgJAIIgLANIAABKg");
	this.shape_24.setTransform(408.7798,25.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6633CC").s().p("AgeAuQgPgQAAgcQAAgNAFgMQAEgMAIgHQAIgJALgEQAJgFAOABQAJgBAIACIAPAEIAAAUQgIgEgIgCQgIgCgIAAQgIAAgGADQgHADgFAFQgFAGgDAJQgDAHAAAKQAAAVAKAKQAKALASAAQAIAAAIgCQAIgBAHgFIAAAUIgQAEQgJACgJgBQgbABgPgPg");
	this.shape_25.setTransform(394.825,25.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6633CC").s().p("AAbA8IAAhKQAAgOgFgHQgGgGgKAAIgGABQgEABgEADIgIAHIgKAMIAABNIgUAAIAAh0IASAAIAAASIAKgKIAKgHQAFgCADAAIAKgCQASAAAKALQAJAKAAAWIAABMg");
	this.shape_26.setTransform(381.825,25.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC9900").s().p("AgxBOIAAgTIAngnIAPgRQAHgGADgFQADgGABgFQACgFAAgGQAAgGgCgFQgBgFgEgEQgDgEgFgCQgFgCgGAAQgKAAgIAEQgIAEgHAHIgKgNQAIgKALgFQAMgGAPAAQAJAAAIAEQAIADAHAFQAFAGAEAIQADAJAAAKQABAJgDAHQgDAIgEAHIgMAPIgRARIgbAbIBJAAIAAAUg");
	this.shape_27.setTransform(619.55,23.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6633CC").s().p("AgbA6QgHgCgFgFQgEgEgCgGQgCgHgBgGQAAgSAOgKQANgJAZAAIAYAAIAAgLQAAgKgGgGQgHgHgOABQgJAAgKACQgJACgLAEIAAgSIAJgDIAKgCIALgCIALgBQALAAAIADQAIACAHAFQAFAEAEAIQADAHAAAKIAABQIgSAAIgBgQQgKAJgJAFQgLAEgKAAQgJAAgIgDgAgKAHQgGACgDADQgEACgBAEQgCAEAAAFIABAGIADAGQADADAEAAQAEACAFAAQAGAAAJgEQAJgEAKgKIAAgVIgaAAQgGABgGABg");
	this.shape_28.setTransform(579.6,25.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgIBEQgLgJAAgVIAAg8IghAAIAAgRIAhAAIAAghIATgFIAAAmIA1AAIAAARIg1AAIAAA6QAAANAHAGQAGAHAOgBIAMgBIAOgCIAAASIgOACIgPAAQgXABgJgLg");
	this.shape_29.setTransform(460.45,23.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgXA5QgKgEgHgHQgHgIgEgLQgDgMAAgOQAAgNADgLQAFgMAHgHQAHgJALgEQAKgFAMAAQANAAAKAEQAKAEAHAHQAHAIAEAMQADAKAAAPQAAANgDALQgFAMgHAIQgHAIgKAFQgLAEgMAAQgNAAgKgEgAgPgnQgGAEgFAFQgDAHgDAIQgCAHAAAIQABALACAJQACAHAFAGQAEAFAGADQAHADAHAAQAJAAAHgEQAGgDAEgGQAEgGADgIQACgIAAgJQgBgJgCgJQgCgIgFgFQgFgGgFgDQgHgCgIAAQgIgBgHAEg");
	this.shape_30.setTransform(447.8,25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAbA8IAAhKQAAgOgFgHQgGgGgKAAIgGABQgEABgEADIgIAHIgKAMIAABNIgUAAIAAh0IASAAIAAASIAKgKIAKgHQAFgCADAAIAKgCQASAAAKALQAJAKAAAWIAABMg");
	this.shape_31.setTransform(434.625,25.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6633CC").s().p("AgxBUIAAikIASAAIABATQAJgMAKgFQAKgFAKAAQAKAAAIAEQAIAFAFAIQAFAHACALQADALAAANQAAAQgEAKQgFAMgHAIQgIAHgLAFQgKADgMAAIgLAAIgLgCIAAAxgAgCg/QgEAAgEADIgJAIQgFAEgFAIIAAA4IAMADIAMACQAPAAAKgLQAJgKAAgXQAAgJgBgIQgCgIgCgFQgDgGgFgDQgFgDgGAAIgHACg");
	this.shape_32.setTransform(540.525,27.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6633CC").s().p("AgXA5QgKgEgHgHQgHgIgEgLQgDgMAAgOQAAgNADgLQAFgMAHgHQAHgJALgEQAKgFAMAAQANAAAKAEQAKAEAHAHQAHAIAEAMQADAKAAAPQAAANgDALQgFAMgHAIQgHAIgKAFQgLAEgMAAQgNAAgKgEgAgPgnQgGAEgFAFQgDAHgDAIQgCAHAAAIQABALACAJQACAHAFAGQAEAFAGADQAHADAHAAQAJAAAHgEQAGgDAEgGQAEgGADgIQACgIAAgJQgBgJgCgJQgCgIgFgFQgFgGgFgDQgHgCgIAAQgIgBgHAEg");
	this.shape_33.setTransform(527,25.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6633CC").s().p("AgXA5QgKgEgHgHQgHgIgDgLQgEgMAAgOQAAgNAEgLQAEgMAHgHQAHgJALgEQAKgFAMAAQANAAAKAEQAKAEAHAHQAHAIADAMQAEAKAAAPQAAANgEALQgDAMgIAIQgHAIgKAFQgLAEgMAAQgNAAgKgEgAgOgnQgHAEgFAFQgDAHgCAIQgCAHAAAIQAAALACAJQADAHAEAGQAEAFAHADQAGADAHAAQAJAAAGgEQAHgDAEgGQAFgGABgIQACgIAAgJQABgJgDgJQgDgIgEgFQgFgGgFgDQgHgCgIAAQgIgBgGAEg");
	this.shape_34.setTransform(513.8,25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6633CC").s().p("AgaA6QgIgCgFgFQgEgEgCgGQgDgHAAgGQAAgSAOgKQANgJAYAAIAZAAIAAgLQAAgKgHgGQgGgHgOABQgJAAgJACQgLACgJAEIAAgSIAIgDIAKgCIALgCIAKgBQALAAAJADQAIACAHAFQAFAEAEAIQACAHAAAKIAABQIgSAAIAAgQQgJAJgLAFQgKAEgJAAQgLAAgGgDgAgKAHQgFACgEADQgDACgCAEQgCAEAAAFIABAGIADAGQADADADAAQAEACAGAAQAGAAAJgEQAJgEAKgKIAAgVIgaAAQgGABgGABg");
	this.shape_35.setTransform(447.6,25.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6633CC").s().p("AAkA8IAAhTIAAgJIgBgGIgCgDIgEgBQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABIgEAEIgFAIIgHAOIAABKIgRAAIAAhRIAAgKIgCgHIgCgDIgEgBIgEACIgEADIgFAJIgHAOIAABKIgSAAIAAh0IAPAAIABAVIAGgLQADgEADgDQADgDAEgBQADgCAEAAQAKAAADAGQAGAHAAANIAFgLQACgFAEgDQADgDAEgCQADgCAGAAQAVAAAAAjIAABUg");
	this.shape_36.setTransform(408.2,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:368.5}},{t:this.shape_1,p:{x:381.7}},{t:this.shape,p:{x:394.9}}]}).to({state:[{t:this.shape_13},{t:this.shape_12,p:{x:381.825}},{t:this.shape_11},{t:this.shape_10,p:{x:407.65}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:447.925}},{t:this.shape_6,p:{x:461.125}},{t:this.shape_5},{t:this.shape_4,p:{x:487.375}},{t:this.shape_3,p:{x:513.925}}]},48).to({state:[{t:this.shape_3,p:{x:368.725}},{t:this.shape_6,p:{x:395.125}},{t:this.shape_20},{t:this.shape_7,p:{x:434.725}},{t:this.shape_4,p:{x:447.775}},{t:this.shape_19,p:{x:461.075}},{t:this.shape_18,p:{x:474.275}},{t:this.shape_17,p:{x:500.05}},{t:this.shape_16,p:{x:513.825}},{t:this.shape_15},{t:this.shape_12,p:{x:540.225}},{t:this.shape_14}]},48).to({state:[{t:this.shape_2,p:{x:368.5}},{t:this.shape_1,p:{x:381.7}},{t:this.shape,p:{x:394.9}}]},24).to({state:[{t:this.shape_6,p:{x:368.725}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:408.7798}},{t:this.shape_23,p:{x:421.375}},{t:this.shape_22},{t:this.shape_4,p:{x:447.775}},{t:this.shape_12,p:{x:461.025}},{t:this.shape_21,p:{x:473.65}},{t:this.shape_3,p:{x:500.725}}]},72).to({state:[{t:this.shape_2,p:{x:368.5}},{t:this.shape_1,p:{x:381.7}},{t:this.shape,p:{x:394.9}}]},24).to({state:[{t:this.shape_3,p:{x:368.725}},{t:this.shape_6,p:{x:395.125}},{t:this.shape_20},{t:this.shape_7,p:{x:434.725}},{t:this.shape_4,p:{x:447.775}},{t:this.shape_19,p:{x:461.075}},{t:this.shape_18,p:{x:474.275}},{t:this.shape_17,p:{x:500.05}},{t:this.shape_16,p:{x:513.825}},{t:this.shape_15},{t:this.shape_12,p:{x:540.225}},{t:this.shape_14}]},24).to({state:[{t:this.shape_2,p:{x:368.5}},{t:this.shape_1,p:{x:381.7}},{t:this.shape,p:{x:394.9}}]},24).to({state:[{t:this.shape_6,p:{x:368.725}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:408.7798}},{t:this.shape_23,p:{x:421.375}},{t:this.shape_22},{t:this.shape_4,p:{x:447.775}},{t:this.shape_12,p:{x:461.025}},{t:this.shape_21,p:{x:473.65}},{t:this.shape_3,p:{x:500.725}}]},72).to({state:[{t:this.shape_2,p:{x:368.5}},{t:this.shape_1,p:{x:381.7}},{t:this.shape,p:{x:394.9}}]},24).to({state:[{t:this.shape_3,p:{x:368.725}},{t:this.shape_6,p:{x:395.125}},{t:this.shape_20},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_7,p:{x:487.525}},{t:this.shape_4,p:{x:500.575}},{t:this.shape_19,p:{x:513.875}},{t:this.shape_18,p:{x:527.075}},{t:this.shape_21,p:{x:552.85}},{t:this.shape_16,p:{x:566.625}},{t:this.shape_28},{t:this.shape_12,p:{x:593.025}},{t:this.shape_27}]},24).to({state:[{t:this.shape_10,p:{x:368.05}},{t:this.shape_23,p:{x:381.775}},{t:this.shape_24,p:{x:395.5798}},{t:this.shape_36},{t:this.shape_6,p:{x:421.525}},{t:this.shape_12,p:{x:434.625}},{t:this.shape_35},{t:this.shape_17,p:{x:460.45}},{t:this.shape_4,p:{x:474.175}},{t:this.shape_7,p:{x:500.725}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape,p:{x:553.3}},{t:this.shape_2,p:{x:566.5}},{t:this.shape_1,p:{x:579.7}}]},24).wait(48));

	// For_Instruction_Arrow
	this.instance = new lib.ForArrow("synched",0);
	this.instance.setTransform(300,71);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(24).to({startPosition:0},0).to({x:420},24).to({_off:true},24).wait(72).to({_off:false,x:499,y:72.05},0).to({_off:true},24).wait(24).to({_off:false,x:420,y:71},0).to({_off:true},24).wait(72).to({_off:false,x:498.25,y:75.95},0).to({_off:true},24).wait(24).to({_off:false,x:420,y:71},0).to({_off:true},24).wait(48));

	// Instruction_Arrow
	this.instance_1 = new lib.RightArrow("synched",0);
	this.instance_1.setTransform(140,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({startPosition:0},0).to({y:103},24).wait(72).to({startPosition:0},0).to({y:130},24).wait(24).to({startPosition:0},0).to({y:163},24).wait(24).to({startPosition:0},0).to({y:103},24,cjs.Ease.quadOut).wait(24).to({startPosition:0},0).to({y:130},24).wait(24).to({startPosition:0},0).to({y:163},24).wait(24).to({startPosition:0},0).to({y:103},24,cjs.Ease.quadOut).wait(24).to({startPosition:0},0).to({rotation:-360,y:200},24,cjs.Ease.quadOut).wait(24));

	// Variable
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGA8QgDgCgDgCIgEgGQgBgDAAgEQAAgEABgDIAEgGIAGgDQADgCADAAIAHACIAFADIAFAGQABADAAAEQAAAEgBADIgFAGQgCACgDACIgHABQgDAAgDgBgAgGgZIgGgEIgEgFIgBgIQAAgDABgEIAEgFQADgDADgBQADgCADAAQAEAAADACQADABACADIAFAFQABAEAAADIgBAIIgFAFIgFAEIgHABIgGgBg");
	this.shape_37.setTransform(31.8,25.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AguBTIAAgRIAnAAIAAhSIgjAAIAAgRIA2AAIAABjIAjAAIAAARgAgHgzIgFgEIgDgFIgBgHIABgFIADgGIAFgDQADgCAEAAQACAAADACIAFADIAEAGIABAFIgBAHIgEAFIgFAEIgFAAIgHAAg");
	this.shape_38.setTransform(18.725,22.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9900").s().p("AgWBKQgLgEgHgKQgHgKgEgOQgEgPAAgVQAAgQAEgPQADgOAIgLQAGgKAMgGQAKgGANAAQAMAAAKAFQALAFAHAJQAHAKAEAPQAEAPAAATQAAASgEAOQgDAPgIAKQgHAKgKAGQgLAGgNAAQgMAAgKgFgAgeAiIAFALIAGAJQAEADAFACQAFACAFAAQAIAAAGgDQAHgEAEgIQAFgIACgLQADgLAAgPIAAgHIgBgIgAgNg4QgHAEgEAHQgFAIgCALQgDAMAAAOIAAAHIABAHIA/gvIgEgLIgGgIQgEgEgFgCQgFgCgGAAQgHAAgGAEg");
	this.shape_39.setTransform(45,23.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC9900").s().p("AgtBNIAAgTIAnAAIAAhvIgkAUIgIgRIAxgaIARAAIAACGIAjAAIAAATg");
	this.shape_40.setTransform(45.05,23.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC9900").s().p("AgxBOIAAgTIAngnIAPgRQAHgGADgFQADgGABgFQABgFAAgGQAAgGgBgFQgCgFgDgEQgDgEgFgCQgFgCgGAAQgKAAgIAEQgIAEgGAHIgLgNQAIgKAMgFQALgGAPAAQAJAAAIAEQAJADAFAFQAHAGADAIQADAJABAKQgBAJgCAHQgCAIgFAHIgMAPIgRARIgbAbIBKAAIAAAUg");
	this.shape_41.setTransform(45.15,23.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_39}]},48).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_40}]},144).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_41}]},144).wait(120));

	// Code
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgqBtIAAgRIAHAAQAbAAAAgaIAAgpQAAgbAXgEQgYgCAAgeIAAgbQAAgbgaAAIgHAAIAAgQIAJAAQAWAAALALQAKAKAAAWIAAAbQAAAGACAEQAAAFAEADQADADAFACQAGABAIAAIAFAAIAAAPIgFAAQgJAAgFACQgGABgDADQgCADgBAEQgCAFAAAGIAAApQAAAKgCAIQgDAIgFAFQgEAGgIADQgJADgMAAg");
	this.shape_42.setTransform(179,164.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AggBkQAXgXAKgYQALgZAAgbQAAg3gsgsIAMgNQA1AyAAA9QAAAMgDAOQgCANgGAPQgHAOgKAPQgKAOgPAPg");
	this.shape_43.setTransform(376.375,134.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AguBTIAAgRIAnAAIAAhSIgjAAIAAgRIA2AAIAABjIAjAAIAAARgAgHg0IgFgDIgDgFIgBgHIABgFIADgGIAFgDQADgBAEAAQACAAADABIAFADIAEAGIABAFIgBAHIgEAFIgFADIgFABIgHgBg");
	this.shape_44.setTransform(363.525,132.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AggABQAAgNADgOQADgOAGgOQAGgOALgPQAJgOAPgOIAMAMQgsAtAAA2QAAAbALAZQALAZAWAWIgMANQg1gyAAg9g");
	this.shape_45.setTransform(350.425,134.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgaBSQgKgCgGgEQgHgEgDgFQgDgGAAgHQAAgIAEgGQAEgHAJgGIgGgDIgDgGIgCgEIgBgGQAAgIADgFQAEgGAFgGIgEgFIgDgGIgCgHIAAgHQAAgJADgIQADgIAGgFQAGgGAJgCQAIgEALABIAHABIAHABIArAAIAAARIgTAAQADADACAGQACAFAAAHQAAAJgEAHQgDAIgGAGQgGAFgJADQgIADgJAAQgIAAgGgBIgKgFIgEAHQgCACAAADQAAAEAFADQAEAEAHAAIAeABQAJAAAHACQAHACAGAEQAFAEADAFQADAGAAAHQAAAHgDAIQgEAGgHAGQgHAFgLADQgLADgOABQgOgBgKgCgAgaAlQgDADgBADIgCAEIgBAFQAAAJAJADQAIAFAQAAQAIAAAHgCQAHgCAEgDQAEgDACgEQABgDAAgEQAAgHgGgEQgFgDgMAAIgegBIgGAEgAgMhCIgIAGQgDADgCAFQgCAEAAAFQAAAGACAEQACAGADACQAEAEAEACQAFABAGAAQAFAAAEgBQAFgCADgEQAEgDABgFQACgFAAgFQAAgFgCgFQgCgFgDgDQgEgDgEgCQgFgCgEAAQgHAAgEACg");
	this.shape_46.setTransform(337.075,137.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgXA5QgKgDgHgJQgHgHgDgLQgEgLAAgPQAAgNAEgLQAEgLAHgJQAHgHALgFQAKgFAMAAQANAAAKAEQAKAEAHAHQAHAIADALQAEALAAAPQAAANgEAMQgDALgIAIQgHAIgKAEQgLAFgMAAQgNAAgKgEgAgOgnQgHADgFAHQgDAGgCAHQgDAJAAAHQAAALADAIQADAJAEAFQAEAGAHACQAGADAHAAQAJAAAHgDQAGgFAEgFQAFgGACgIQABgIAAgJQAAgJgCgJQgDgIgEgGQgFgFgFgCQgHgEgIAAQgIABgGADg");
	this.shape_47.setTransform(323.8,135.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AguBTIAAgRIAnAAIAAiDIgjAAIAAgRIA2AAIAACUIAjAAIAAARg");
	this.shape_48.setTransform(310.725,132.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgHASIgGgEQgDgCgBgEQgBgDAAgFQAAgDABgEQABgDADgCQADgEADgBQAEgBADAAQAEAAAEABQADABADAEIAEAFQABAEAAADQAAAFgBADIgEAGIgGAEQgEABgEAAQgDAAgEgBg");
	this.shape_49.setTransform(297.3,139.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgUA5QgKgEgHgIQgHgIgEgLQgDgLAAgPQAAgLAEgLQADgLAHgJQAHgIAKgFQAKgFALAAQANAAAJAEQAKAEAGAHQAHAHADALQADAKAAAMIAAAGIAAAGIhSAAQAAASAKAKQAKAJASAAIALAAIAKgBIAJgCIAIgCIAAARIgTAEQgKABgLAAQgPAAgLgEgAgLgpQgFADgEAEQgEAFgDAGQgCAHgBAIIA9AAQABgIgCgHQgCgGgEgFQgEgEgGgDQgGgCgIgBQgFABgGACg");
	this.shape_50.setTransform(284.175,135.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AguBTIAAgRIAnAAIAAiDIgjAAIAAgRIA2AAIAACUIAjAAIAAARg");
	this.shape_51.setTransform(271.125,132.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgXA5QgKgDgHgJQgHgHgEgLQgDgLAAgPQAAgNADgLQAFgLAHgJQAHgHAKgFQALgFAMAAQANAAAKAEQAKAEAHAHQAHAIAEALQADALAAAPQAAANgDAMQgFALgHAIQgHAIgLAEQgKAFgMAAQgNAAgKgEgAgPgnQgGADgFAHQgEAGgCAHQgCAJAAAHQABALACAIQACAJAFAFQAFAGAFACQAHADAHAAQAJAAAHgDQAGgFAFgFQADgGADgIQACgIAAgJQgBgJgCgJQgCgIgFgGQgEgFgGgCQgHgEgIAAQgIABgHADg");
	this.shape_52.setTransform(257.8,135.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgZA8QgKgBgJgDIAAgSQAKADAKACIAUABQAOAAAHgEQAHgEAAgIIgBgFIgEgFIgJgEIgQgGIgPgGQgGgCgFgDQgFgFgDgGQgDgFAAgHQAAgFACgGQADgGAFgFQAGgFAJgDQAJgEAOAAIAPABIARADIAAASIgSgEIgPgBQgGAAgGABQgFACgDACQgDACgCACQgBADAAAEQAAADABACQABACAEADIAJAFIAPAFQAKADAHAEQAHACAFAEQAEAEACAFQACAGAAAGQAAAGgCAFIgGAJIgIAGIgKAEIgMAEIgKAAIgWgBg");
	this.shape_53.setTransform(244.675,135.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAbA8IAAhKQAAgOgFgHQgGgGgKAAIgGABQgEABgEADIgIAHIgKAMIAABNIgUAAIAAh0IASAAIAAATIAKgKIAKgHQAFgDADgBIAKgBQASAAAKALQAJALAAAVIAABMg");
	this.shape_54.setTransform(231.425,134.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgXA5QgKgDgHgJQgHgHgEgLQgDgLAAgPQAAgNADgLQAFgLAHgJQAHgHAKgFQALgFAMAAQANAAAKAEQAKAEAHAHQAHAIAEALQADALAAAPQAAANgDAMQgFALgHAIQgHAIgLAEQgKAFgMAAQgNAAgKgEgAgPgnQgGADgEAHQgFAGgCAHQgCAJAAAHQABALACAIQACAJAFAFQAFAGAFACQAHADAHAAQAJAAAHgDQAGgFAFgFQADgGADgIQACgIAAgJQgBgJgCgJQgCgIgFgGQgEgFgGgCQgHgEgIAAQgIABgHADg");
	this.shape_55.setTransform(218.2,135.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgeAtQgPgPAAgdQAAgMAFgMQAEgLAIgJQAIgHALgFQAJgFAOAAQAJAAAIACIAPAEIAAATQgIgDgIgCQgIgCgIAAQgIAAgGADQgHADgFAGQgFAGgDAHQgDAJAAAIQAAAWAKALQAKAKASAAQAIAAAIgBQAIgCAHgFIAAATIgQAFQgJABgJABQgbgBgPgPg");
	this.shape_56.setTransform(204.825,135.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAjBtQgXAAgLgLQgKgKAAgWIAAgoQAAgGgBgEQgCgFgDgDQgDgDgGgCQgFgCgIAAIgFAAIAAgPIAFAAQAJAAAFgBQAFgCADgCQAEgDABgFQABgEAAgGIAAgcQAAgKACgIQACgIAFgFQAFgGAJgDQAIgDANAAIAIAAIAAAQIgHAAQgbAAAAAbIAAAbQAAAdgYADQAYADAAAcIAAApQABAaAaAAIAHAAIAAARg");
	this.shape_57.setTransform(547.8,104.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AggBkQAXgXAKgYQALgZAAgbQAAg3gsgsIAMgNQA1AyAAA9QAAAMgDAOQgCANgGAPQgHAOgKAPQgKAOgPAPg");
	this.shape_58.setTransform(521.575,104.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgJA5IAAgwIguAAIAAgRIAuAAIAAgwIATAAIAAAwIAuAAIAAARIguAAIAAAwg");
	this.shape_59.setTransform(508.6,104.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgJA5IAAgwIguAAIAAgRIAuAAIAAgwIATAAIAAAwIAuAAIAAARIguAAIAAAwg");
	this.shape_60.setTransform(495.4,104.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHgzIgFgEIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFAEIgFABIgHgBg");
	this.shape_61.setTransform(482.325,102.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgbBAQAGAAAFgBIAKgEQAEgDACgDQACgEAAgEQAAgGgBgCIgDgHIgEgFQgCgCAAgFIABgGIADgEIAEgFIAHgBIAIACQAEACADADQADADACAGQABAFAAAHQAAAKgDAJQgEAJgHAHQgHAHgKAEQgKAEgOAAgAABgsIgEgEIgEgFIgCgHQAAgEACgEIAEgGQACgCACgBQADgCAEAAQAEAAADACQADABADACIAEAGQABAEAAAEIgBAHIgEAFIgGAEIgHABIgHgBg");
	this.shape_62.setTransform(454.975,106.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC9900").s().p("AgyBOIAAgTIApgnIAOgRQAGgGAEgFQADgGABgFQACgFgBgGQABgGgCgFQgCgFgDgEQgDgEgFgCQgFgCgGAAQgKAAgIAEQgIAEgGAHIgMgNQAJgKAMgFQAKgGAQAAQAJAAAIAEQAJADAFAFQAGAGAEAIQAEAJAAAKQAAAJgDAHQgDAIgEAHIgMAPIgRARIgbAbIBKAAIAAAUg");
	this.shape_63.setTransform(442.75,103.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgtAAIBOhBIANANIg/A0IA/A1IgNANg");
	this.shape_64.setTransform(415.775,104.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHgzIgFgEIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFAEIgFABIgHgBg");
	this.shape_65.setTransform(389.925,102.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgbBAQAGAAAFgBIAKgEQAEgDACgDQACgEAAgEQAAgGgBgCIgDgHIgEgFQgCgCAAgFIABgGIADgEIAEgFIAHgBIAIACQAEACADADQADADACAGQABAFAAAHQAAAKgDAJQgEAJgHAHQgHAHgKAEQgKAEgOAAgAABgsIgEgEIgEgFIgCgHQAAgEACgEIAEgGQACgCACgBQADgCAEAAQAEAAADACQADABADACIAEAGQABAEAAAEIgBAHIgEAFIgGAEIgHABIgHgBg");
	this.shape_66.setTransform(362.575,106.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC9900").s().p("AgWBKQgLgEgHgKQgHgKgEgOQgEgPAAgVQAAgQAEgPQAEgOAGgLQAIgKALgGQAKgGANAAQAMAAAKAFQAKAFAIAJQAHAKAEAPQADAPABATQgBASgDAOQgDAPgIAKQgGAKgLAGQgLAGgNAAQgMAAgKgFgAgeAiIAFALIAGAJQAEADAFACQAFACAFAAQAIAAAGgDQAHgEAEgIQAFgIACgLQADgLAAgPIAAgHIgBgIgAgNg4QgHAEgEAHQgFAIgDALQgCAMAAAOIAAAHIABAHIA/gvIgEgLIgGgIQgFgEgEgCQgFgCgGAAQgHAAgGAEg");
	this.shape_67.setTransform(350.2,103.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgxAdIAAgRIBkAAIAAARgAgxgKIAAgSIBkAAIAAASg");
	this.shape_68.setTransform(323.8,104.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AguBUIAAgRIAnAAIAAhUIgjAAIAAgQIA2AAIAABkIAjAAIAAARgAgHgzIgFgEIgDgFIgBgGIABgHIADgFIAFgDQADgBAEgBQACABADABIAFADIAEAFIABAHIgBAGIgEAFIgFAEIgFABIgHgBg");
	this.shape_69.setTransform(297.525,102.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0000FF").s().p("AgvA8IAAh1IASAAIABAWQAKgNALgFQAJgGAKAAQASAAAKAMQAJAMgBAXIgUAAQAAgPgFgHQgFgHgJAAIgIABQgDACgFADIgJAIIgLANIAABKg");
	this.shape_70.setTransform(271.5798,104.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AgaA6QgIgCgFgFQgEgEgCgGQgDgHAAgGQAAgSAOgKQANgJAYAAIAZAAIAAgLQAAgKgHgGQgGgGgOAAQgJgBgJADQgLACgKAEIAAgSIAJgDIAKgDIALgBIALgBQALAAAIACQAIADAHAFQAGAEADAIQACAHAAAKIAABQIgSAAIAAgQQgJAKgKAEQgLAEgJAAQgLAAgGgDgAgKAHQgFACgEADQgDACgCAEQgCAEAAAFIABAGIADAGQADADAEAAQADACAGAAQAGAAAJgEQAJgFAKgIIAAgWIgaAAQgHABgFABg");
	this.shape_71.setTransform(257.6,104.95);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AgLA7Iguh1IAYAAIAcBNIAGATIAGgUIAdhMIAWAAIgvB1g");
	this.shape_72.setTransform(244.55,104.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AggABQAAgNADgOQADgOAGgOQAGgOALgPQAJgOAPgOIAMAMQgsAtAAA2QAAAbALAZQALAZAWAWIgMANQg1gyAAg9g");
	this.shape_73.setTransform(231.625,104.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AgvA8IAAh1IASAAIABAWQAKgNALgFQAJgGAKAAQASAAAKAMQAJAMgBAXIgUAAQAAgPgFgHQgFgHgJAAIgIABQgDACgFADIgJAIIgLANIAABKg");
	this.shape_74.setTransform(205.5798,104.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AgXA5QgKgEgHgHQgHgIgDgLQgEgMAAgOQAAgNAEgLQADgLAIgIQAHgJAKgEQALgFAMAAQANAAAKAEQAKAEAHAIQAHAHADAMQAEAKAAAPQAAANgEALQgEAMgHAIQgHAIgLAFQgKAEgMAAQgNAAgKgEgAgOgnQgHAEgEAFQgFAHgBAIQgCAHAAAIQgBALADAJQADAHAEAGQAFAFAFADQAHADAHAAQAJAAAGgEQAHgDAFgGQADgGACgIQACgIAAgJQAAgJgCgJQgDgIgEgGQgEgFgHgDQgGgCgIAAQgIgBgGAEg");
	this.shape_75.setTransform(191.8,104.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AgSBUIAAhUIgmAAIAAgQIAmAAIAAgUQAAguAwgBQAMAAAPADIAAASQgQgDgMgBQgbAAAAAdIAAAVIAzAAIAAAQIgzAAIAABUg");
	this.shape_76.setTransform(178.625,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).wait(456));

	// Terminal
	this.instance_2 = new lib.TerminalTopHalfai("synched",0);
	this.instance_2.setTransform(320,379.9,1,1,0,0,0,320,100);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgXBKQgKgEgHgKQgHgKgEgOQgDgPAAgVQAAgQADgPQAEgOAGgLQAIgKAKgGQALgGANAAQANAAAJAFQAKAFAIAJQAHAKAEAPQADAPABATQgBASgDAOQgDAPgIAKQgGAKgLAGQgLAGgNAAQgMAAgLgFgAgeAiIAFALIAHAJQADADAFACQAFACAFAAQAIAAAGgDQAHgEAFgIQAEgIACgLQADgLAAgPIAAgHIgBgIgAgOg4QgGAEgEAHQgFAIgDALQgCAMAAAOIAAAHIABAHIA/gvIgEgLIgGgIQgEgEgFgCQgFgCgGAAQgHAAgHAEg");
	this.shape_77.setTransform(14.6,320.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgtBNIAAgTIAoAAIAAhvIglAUIgHgRIAwgaIARAAIAACGIAjAAIAAATg");
	this.shape_78.setTransform(14.65,350.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2},{t:this.shape_77}]},144).to({state:[{t:this.instance_2},{t:this.shape_77},{t:this.shape_78}]},144).wait(168));

	// Border
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(3,1,1).p("EAx+gdrIAFAAEAx+gdrMAAABDLMhkAAAAMAAAhK/MBkAAAAgAEq9rIAAnvAEq9rMAtUAAAEgx9gdrMA2nAAA");
	this.shape_79.setTransform(320.25,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(456));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(318.5,238.5,323.5,243);
// library properties:
lib.properties = {
	id: 'C756B9C09D06134D9B51CB30F8548AFC',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C756B9C09D06134D9B51CB30F8548AFC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;