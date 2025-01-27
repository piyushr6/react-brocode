import Student from './Student.jsx';

function App() {

  return (
    <>
      <Student name="Spongebob" age={18} isStudent={true} />
      <Student name="Rick" age={20} isStudent={false} />
      <Student name="Dazel" age={22} isStudent={true} />
      <Student name="ABC" age={21} isStudent={false} />
      <Student name="XYZ" age={23} isStudent={false} />
      <Student />
    </>
  );
}

export default App



//STYLING COMPONENTS CSS IN 3 WAYS - EXTERNAL, MODULES, INLINE  
// import Button from './Button/Button.jsx';

// function App() {

//   return (
//     <Button />
//   );
// }

// export default App



// import Card from './Card.jsx'
// function App() {
//   return (
//     <>
//       <Card />
//       <Card />
//       <Card />
//       <Card />      
//     </>
//   )

// }
// export default App
