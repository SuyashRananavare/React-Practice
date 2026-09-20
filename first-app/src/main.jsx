// import { createRoot } from 'react-dom/client'

// let element = <h2>Hello World !!</h2>

// createRoot(document.getElementById('root')).render(element);

// let r = createRoot(document.getElementById('root2'));
// r.render(<h3>Something</h3>)


// function NewComponent() {
//     return (
//         <div>
//             <h1>Heading</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut repellat delectus modi minima expedita commodi, perspiciatis nemo fuga aliquid quas! Incidunt architecto, voluptates officiis dignissimos fugiat praesentium quos expedita sit?
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam harum obcaecati fugiat dolorum necessitatibus, possimus reiciendis vero quasi eaque velit tenetur ipsa, praesentium minus rem mollitia corporis ipsam quidem itaque!</p>
            
//             <h1>Heading</h1>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur minima inventore? Blanditiis sit fuga aut, mollitia obcaecati ut eos ullam qui ipsum reprehenderit illo? Accusamus magni iusto qui harum?</p>

//             <h1>Heading</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, perferendis voluptates. Veritatis voluptatem in debitis quia accusantium possimus doloribus, nam sed. Tempora adipisci quos sequi unde eaque nihil optio vero.</p>
//         </div>
//     );
// }

// function AnotherComp() {
//     return (
//         <div>
//             <h2>Card</h2>
//             <ul>
//                 <li>BMW</li>
//                 <li>Audii</li>
//                 <li>Ferrari</li>
//             </ul>
//         </div>
//     );
// }

// createRoot(document.getElementById('root2')).render(
//     <>
//     <NewComponent />
//     <AnotherComp />
//     </>
// );

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById('root')).render(<App />)

