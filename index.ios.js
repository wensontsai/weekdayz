// import libraries we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

// import components
var DayItem = require('./src/day-item');


// Create a react component
var Weekdays = React.createClass({
  getInitialState: function(){
    return{
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
  },
  componentWillMount: function(){

  },
  render: function(){
    return(
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        { this.days() }
      </View>
    )
  },
  days: function(){
    return(
     this.state.days.map(function(day){
        return(
            <DayItem day={day} /> 
        )
      })
    )
  }
});

// Style React Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {

  }
});

// Show component on the screen (or export code)
// only called once - all other components are children
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});