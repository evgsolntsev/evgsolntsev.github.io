var delay = 50;
var flag = 1;
var i = 0;
var encoder = GIFEncoder();
encoder.setRepeat(0);
encoder.setDelay(delay);
encoder.start();
function update()
{
	cv = document.getElementById('bitmap');
	if (!cv) {
		return 0;
	}
	ctx = cv.getContext('2d');
	inp = document.getElementById('mess');
//	ctx.strokeStyle = "#F00";
	ctx.fillStyle = "#FFFFFF";
//	ctx.font = "italic 30pt Arial";
	ctx.fillRect(0, 0, cv.width, cv.height);
	ctx.fillStyle = "#000000";
	ctx.fillText(inp.value, 20, 50);
	encoder.addFrame(ctx);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, cv.width, cv.height);
}
var timer; // = setInterval(update, 1000);
function start()
{
	if (flag)
	{
		timer = setInterval(update, delay);
		flag = 0;
	}
}
function finish()
{
	encoder.finish();
	var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
	var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
	i = document.getElementById("image");
	i.src = data_url;
	document.getElementById('body').removeChild(document.getElementById('d'));
	document.getElementById('body').removeChild(document.getElementById('mess'));
	document.getElementById('body').removeChild(document.getElementById('button'));
}
