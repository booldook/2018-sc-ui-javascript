var data = [{
	datasets: [{
			data: [z],
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)'
			],
			hoverBackgroundColor:[
				'rgba(255, 0, 0, 1)'
			]
	}]
},{
	labels: ["Red", "Blue", "Yellow"],
	datasets: [{
			data: [12, 19, 3],
			backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)'
			],
			borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)'
			],
			borderWidth: 1
	}]
},{
	labels: ["Red", "Blue", "Yellow"],
	datasets: [{
			data: [12, 19, 3],
			backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)'
			],
			borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)'
			],
			borderWidth: 1
	}]
}];
var option = [{
	tooltips : {
		enabled: false
	},
	cutoutPercentage: 30,
	rotation: -0.5 * Math.PI,
	circumference: 1.4 * Math.PI,
	animation: {
		animateRotate: true,
		animateScale: true
	}
},{
	legend: {
		display: false
	}
},{
	title: {
		display: true,
		text: 'Custom Chart Title',
		fontSize: 24,
		fontColor: "#f00"
	}
}];
var chart = [];

var ctx = $(".chart");
ctx.each(function(i){
	chart[i] = new Chart($(this), {
		type: 'doughnut',
		data: data[i],
		options: option[i]
	});
});


