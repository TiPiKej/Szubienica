export const Canvas = (randomNumber, {win}, mistakes) => {
	const canvas = document.querySelector(`.canvas${randomNumber}`);
	const context = canvas.getContext('2d')
				context.lineWidth = 3;

	// 450px x 300px <-- canvas
	
	if(win){
		context.clearRect(0, 0, 400, 300);
		canvas.style.background = "#ffff00";
		context.font = 'italic 40pt Calibri';
		context.fillText('Wygrałeś!', 87.5, 175); // 225px - word width, 50px - word height
	}else{
		switch(mistakes){
			case 1: // drawing first footing
				context.moveTo(130, 220);
				context.lineTo(106, 251); // -24px 31px
				context.stroke();
				break;
			case 2: // drawing second footing
				context.moveTo(130, 220);
				context.lineTo(154, 251); // 24px 31px
				context.stroke();
				break;
			case 3: // drawing vertical beam
				context.moveTo(130, 220);
				context.lineTo(130, 60); // 0px -160px
				context.stroke();
				break;
			case 4: // drawing horizontal beam
				context.moveTo(130, 62); // move down 2 pixels / was break in joining beams
				context.lineTo(253, 62); // 123px 0px
				context.stroke();
				break;
			case 5: // drawing cord
				context.moveTo(253, 60);
				context.lineTo(253, 90); // 0px 30px
				context.stroke();
				break;
			case 6: // drawing head
				context.moveTo(253, 90);
				context.arc(253, 100, 10, 0, 2 * Math.PI, false); // x - not moving, y moving down 10px, radius - 10px, starting angle - 0, ending angle - 2 TT, counterclockwise - false
				context.fill();
				context.stroke();
				break;
			case 7: // drawing body
				context.moveTo(253, 110);
				context.lineTo(253, 160); // 0px 50px
				context.stroke();
				break;
			case 8: // drawing first arm
				context.moveTo(253, 120); // 0px -40px -- to draw arms
				context.lineTo(235, 137); // -18px 17px
				context.stroke();
				break;
			case 9: // drawing second arm
				context.moveTo(253, 120); // to draw arms
				context.lineTo(269, 137); // 18px 17px
				context.stroke();
				break;
			case 10: // drawing first leg
				context.moveTo(253, 160); // to draw arms
				context.lineTo(233, 196); // -20px 36px
				context.stroke();
				break;
			case 11: // drawing second leg
				context.moveTo(253, 160); // to draw arms
				context.lineTo(273, 196); // 20px 36px
				context.stroke();
				canvas.style.background = "#e53935";
				context.font = 'italic 40pt Calibri';
				context.fillText('Przegrałeś!', 75, 290); // 250px - word width
				console.log(this.props.proverb)
				break;
			default: // cleaning canvas
				context.clearRect(0, 0, 400, 300);
				break;
		}
	}
}