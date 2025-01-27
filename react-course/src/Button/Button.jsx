import styles from './Button.module.css'

function Button() {

   const styles = {
      backgroundColor: "rgb(8, 0, 255)",
      color: "white",
      padding: "15px 30px",
      borderRadius: "5px",
      fontSize: "30px",
      cursor: "pointer"
   }

   return (
      <button style={styles}> Click me </button>
   );
}

export default Button