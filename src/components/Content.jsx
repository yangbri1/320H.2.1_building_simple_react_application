// import {groups} from "../data/kpop.mjs";
import Header from "./Header.jsx";

// // create React functional component -- destructure "group" straight from "props" -- simplify
// function Group({ group }){
//     /* JavaScript .map() method creates a new array by applying a function/condition to each element in the original array -- DN change original array */
//     // take array of "details" in the kpop dataset
//     let list_of_details = group.details.map((elem) => {
//         // return a component for each individual details
//         return (<Header info={elem} />)
//     });

//     return (
//         // use React fragments to group & return multiple components -- otw fail if separate (similar to div tag in HTML-XML)
//         <>
//             <h1>{group.name}</h1>
//             <ol>{list_of_details}</ol>

//         </>
//     )
// }

function Content(props) {
    return (<h3 style={{color: props.color}}>{props.text}</h3>);
}

export default Content;