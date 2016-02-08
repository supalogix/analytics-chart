
class Command {
	execute() {
		throw new Error("override me");
	}
}

export default class TransitionYAxis extends Command {
	constructor(chart) {
		this.chart = chart;
	}

	execute() {
		this.chart1.transtion("yaxis");
		this.chart2.transtion("yaxis");
		this.chart3.transtion("yaxis");
		this.chart4.transtion("yaxis");
	}
}

export default class TransitionXAxis extends Command {
	constructor(chart) {
		this.chart = chart;
	}

	execute() {
		this.chart.transtion("xaxis");
		this.chart2.transtion("yaxis");
		this.chart3.transtion("yaxis");
		this.chart4.transtion("yaxis");
		this.chart1.transtion("yaxis");
	}
}

export default class TransitionY2Axis extends Command {
	constructor(chart) {
		this.chart = chart;
	}

	execute() {
		this.chart.transtion("y2axis");
	}
}

export default class TransitionY3Axis extends Command {
	constructor(chart) {
		this.chart = chart;
	}

	execute() {
		this.chart.transtion("y3axis");
	}
}


class Button extends React.Component {
	constructor(prop) {
		super(prop);

		this.title = prop.title;
		this.command = prop.comand;
	}

	onClick() {
		this.command.execute();
	}

	render() {
		return (
			<div onClick={this.onClick.bind(this)}>{this.title}</div>
		);
	}
}

class ListBox extends React.Component {
	constructor(props) {
		super(props);

		this.yTransition = new TransitionYAxis();
		this.xTransition = new TransitionXAxis();
		this.y2Transition = new TransitionY2Axis();
		this.y3Transition = new TransitionY3Axis();

	}
	render() {
		return (
			<Button ref="yTransition"  title="Y Trasition" command={this.yTransition} />
			<Button ref="xTransition"  title="X Transition " command={this.xTransition} />
			<Button ref="y2Transition" title="Y2 Transition"  command={this.y2Transition} />
			<Button ref="y3Transition" title="Y3 Transition"  command={this.y3Transition} />
		);
	}
}

class Chart extends React.Component {
	render() {

		return ( <svg id="chart"></svg> );
	
	}
}

class Main extends React.Component {
	render() {
		return (
			<Chart />
			<ListBox />
		);
	}
}


ReactDOM.render( 
	<Main />,
	document.getElementById("container")
)

