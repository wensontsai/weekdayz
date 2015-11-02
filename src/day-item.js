// module requires
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;


// create component
var DayItem = React.createClass({
	render: function(){
		return(
			<Text style={styles.day}> 
				{this.props.day}
			</Text>
		)
	}
});

// style component
var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#000FFF'
	}
});



// export component for use by App
module.exports = DayItem;