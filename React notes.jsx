/* React Mooc Notes:

(Objects cant be rendered) 
Cant render literal objects in react only primitive values such as strings and numbers.

(Use concat(yes) instead of array.push(X) arrays should be immutable to prevent bugs)
When using React, techniques from functional programming are often used. One characteristic of the functional 
programming paradigm is the use of immutable data structures. In React code, it is preferable to use the method concat,
 which creates a new array with the added item. This ensures the original array remains unchanged. */

const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed


/*
(React batching ) 
React state batching prevents multiple state updates to occurr in sequence as only the last state will set the state result, instead if we want to do sequence multiple state 
updates of the same state we need to set it like so */

setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);

// prints 3

 setNumber(number + 1);
 setNumber(number + 1);
 setNumber(number + 1);

// prints 1

/*
(Rules of Hooks) 
The useState function (as well as the useEffect function introduced later on in the course) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component
ex: */

const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}

/*
(Rules of Components) 

Never define components inside other components */

// This is the right place to define a component
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }
// Dont define button inside app
// Dont define Display inside app
  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}