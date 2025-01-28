function List() {
   const fruits = [
      { id: 1, name: 'apple', calories: 95 },
      { id: 2, name: 'orange', calories: 192 },
      { id: 3, name: 'banana', calories: 342 },
      { id: 4, name: 'grapes', calories: 44 },
      { id: 5, name: 'litchi', calories: 55 }];

   const listItems = fruits.map(fruit => <li className="listitem" key={fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>);

   return (<ol>{listItems}</ol>)
}


export default List