// import libraries we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var Moment = require('moment'); 

// import components
var DayItem = require('./src/day-item');


// Create a react component
var Weekdays = React.createClass({
  // getInitialState: function(){
  //   return{
  //     days: []
  //   }
  // },
  componentWillMount: function(){

  },
  render: function(){
    return(
      <View style={styles.container}>
        { this.days() }
      </View>
    )
  },
  days: function(){
    var daysItems = [];
    for(var i = 1; i < 8 ; i++){
      var day = Moment().add(i-1, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} /> 
      )
    }
    return daysItems;

    // return(
    //  this.state.days.map(function(day){
    //     return(
    //         <DayItem day={day} /> 
    //     )
    //   })
    // )
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