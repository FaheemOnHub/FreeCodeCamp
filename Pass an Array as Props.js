// <ParentComponent>
//   <ChildComponent colors={["green", "blue", "red"]} />
// </ParentComponent>

The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property.

const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
This will join all colors array items into a comma separated string and produce: <p>green, blue, red</p>. Later, we will learn about other common methods to render arrays of data in React.

Code:==>
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(',')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={['walk','dog','workout']}/>
        <h2>Tomorrow</h2>
        <List tasks={['code','walk','college']}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
