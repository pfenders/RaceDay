let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistered = true;

const runnerAge = 18;

if (earlyRegistered && runnerAge > 18 ) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && earlyRegistered){
  console.log('Your race time is at 9:30.' + 'Your race number is ' + raceNumber );
} else if( runnerAge > 18 && !earlyRegistered){
  console.log('Your race time is at 11:00.' + 'Your race number is ' + raceNumber );
} else if( runnerAge < 18 ){
  console.log('Your race time is at 12:30.' + 'Your race number is ' + raceNumber );
} else {
  console.log('Please see registration desk');
}