// import React from "react";

// const Cards = () => {
//   return <div>

//   </div>;
// };

// export default Cards;

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import MonacoEditor from "../ui/monaco";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

function Cards() {
  const initialSelectedCard = {
    id: 1,
    title: "",
    content: "",
    img: "/assets/Event/HackNSolve.webp",
  };
  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const cards = [
    {
      id: 1,
      title: "Blockchain",
      content: "",
    },
    {
      id: 2,
      title: "AR/VR",
      content: "",
    },
    {
      id: 3,
      title: "Machine Learning",
      content: "",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      content: "",
    },
    {
      id: 5,
      title: "Development",
      content: "",
    },
  ];
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <div id="event" className="page-layout ">
        <div className="card-layout">
          <div className="selected-card-content">
            {selectedCard && (
              <div className="scard">
                <Card className="selected-card-details bg-center bg-cover">
                  <Card.Body>
                    <Card.Title className="text-7xl font-semibold text-red-950 uppercase text-black">
                      {/* editor here */}
                    <MonacoEditor language="javascript" />
                    </Card.Title>
                    <Card.Text>{selectedCard.content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>

          <div
            className={`card-sidebar ${selectedCard ? "selected-sidebar" : ""}`}
          >
            <div className="card-container">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="individual-card-container"
                  style={{
                    backgroundColor:
                      selectedCard.id === card.id ? "yellow" : "black",
                  }}
                >
                  <Card
                    style={{ backgroundImage: `url(${card.img})` }}
                    className={`cursor-pointer bg-center individual-cards bg-cover  ${
                      selectedCard.id === card.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <Card.Body>
                      <Card.Title className="text-red-950 font-semibold text-black">
                      {card.title}
                      </Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

// import React, { useState } from "react";
// import { Button, Card } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Cards.css";
// import "../../WinJs.js";

// (function (global, undefined) {
//   "use strict";
//   undefinedVariable = {};
//   undefinedVariable.prop = 5;

//   function initializeProperties(target, members) {
//     var keys = Object.keys(members);
//     var properties;
//     var i, len;
//     for (i = 0, len = keys.length; i < len; i++) {
//       var key = keys[i];
//       var enumerable = key.charCodeAt(0) !== /*_*/ 95;
//       var member = members[key];
//       if (member && typeof member === "object") {
//         if (
//           member.value !== undefined ||
//           typeof member.get === "function" ||
//           typeof member.set === "function"
//         ) {
//           if (member.enumerable === undefined) {
//             member.enumerable = enumerable;
//           }
//           properties = properties || {};
//           properties[key] = member;
//           continue;
//         }
//       }
//       if (!enumerable) {
//         properties = properties || {};
//         properties[key] = {
//           value: member,
//           enumerable: enumerable,
//           configurable: true,
//           writable: true,
//         };
//         continue;
//       }
//       target[key] = member;
//     }
//     if (properties) {
//       Object.defineProperties(target, properties);
//     }
//   }

//   (function (rootNamespace) {
//     // Create the rootNamespace in the global namespace
//     if (!global[rootNamespace]) {
//       global[rootNamespace] = Object.create(Object.prototype);
//     }

//     // Cache the rootNamespace we just created in a local variable
//     var _rootNamespace = global[rootNamespace];
//     if (!_rootNamespace.Namespace) {
//       _rootNamespace.Namespace = Object.create(Object.prototype);
//     }

//     function defineWithParent(parentNamespace, name, members) {
//       /// <summary locid="1">
//       /// Defines a new namespace with the specified name, under the specified parent namespace.
//       /// </summary>
//       /// <param name="parentNamespace" type="Object" locid="2">
//       /// The parent namespace which will contain the new namespace.
//       /// </param>
//       /// <param name="name" type="String" locid="3">
//       /// Name of the new namespace.
//       /// </param>
//       /// <param name="members" type="Object" locid="4">
//       /// Members in the new namespace.
//       /// </param>
//       /// <returns locid="5">
//       /// The newly defined namespace.
//       /// </returns>
//       var currentNamespace = parentNamespace,
//         namespaceFragments = name.split(".");

//       for (var i = 0, len = namespaceFragments.length; i < len; i++) {
//         var namespaceName = namespaceFragments[i];
//         if (!currentNamespace[namespaceName]) {
//           Object.defineProperty(currentNamespace, namespaceName, {
//             value: {},
//             writable: false,
//             enumerable: true,
//             configurable: true,
//           });
//         }
//         currentNamespace = currentNamespace[namespaceName];
//       }

//       if (members) {
//         initializeProperties(currentNamespace, members);
//       }

//       return currentNamespace;
//     }

//     function define(name, members) {
//       /// <summary locid="6">
//       /// Defines a new namespace with the specified name.
//       /// </summary>
//       /// <param name="name" type="String" locid="7">
//       /// Name of the namespace.  This could be a dot-separated nested name.
//       /// </param>
//       /// <param name="members" type="Object" locid="4">
//       /// Members in the new namespace.
//       /// </param>
//       /// <returns locid="5">
//       /// The newly defined namespace.
//       /// </returns>
//       return defineWithParent(global, name, members);
//     }

//     // Establish members of the "WinJS.Namespace" namespace
//     Object.defineProperties(_rootNamespace.Namespace, {
//       defineWithParent: {
//         value: defineWithParent,
//         writable: true,
//         enumerable: true,
//       },

//       define: { value: define, writable: true, enumerable: true },
//     });
//   })("WinJS");

//   (function (WinJS) {
//     function define(constructor, instanceMembers, staticMembers) {
//       /// <summary locid="8">
//       /// Defines a class using the given constructor and with the specified instance members.
//       /// </summary>
//       /// <param name="constructor" type="Function" locid="9">
//       /// A constructor function that will be used to instantiate this class.
//       /// </param>
//       /// <param name="instanceMembers" type="Object" locid="10">
//       /// The set of instance fields, properties and methods to be made available on the class.
//       /// </param>
//       /// <param name="staticMembers" type="Object" locid="11">
//       /// The set of static fields, properties and methods to be made available on the class.
//       /// </param>
//       /// <returns type="Function" locid="12">
//       /// The newly defined class.
//       /// </returns>
//       constructor = constructor || function () {};
//       if (instanceMembers) {
//         initializeProperties(constructor.prototype, instanceMembers);
//       }
//       if (staticMembers) {
//         initializeProperties(constructor, staticMembers);
//       }
//       return constructor;
//     }

//     function derive(baseClass, constructor, instanceMembers, staticMembers) {
//       /// <summary locid="13">
//       /// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
//       /// </summary>
//       /// <param name="baseClass" type="Function" locid="14">
//       /// The class to inherit from.
//       /// </param>
//       /// <param name="constructor" type="Function" locid="9">
//       /// A constructor function that will be used to instantiate this class.
//       /// </param>
//       /// <param name="instanceMembers" type="Object" locid="10">
//       /// The set of instance fields, properties and methods to be made available on the class.
//       /// </param>
//       /// <param name="staticMembers" type="Object" locid="11">
//       /// The set of static fields, properties and methods to be made available on the class.
//       /// </param>
//       /// <returns type="Function" locid="12">
//       /// The newly defined class.
//       /// </returns>
//       if (baseClass) {
//         constructor = constructor || function () {};
//         var basePrototype = baseClass.prototype;
//         constructor.prototype = Object.create(basePrototype);
//         Object.defineProperty(constructor.prototype, "_super", {
//           value: basePrototype,
//         });
//         Object.defineProperty(constructor.prototype, "constructor", {
//           value: constructor,
//         });
//         if (instanceMembers) {
//           initializeProperties(constructor.prototype, instanceMembers);
//         }
//         if (staticMembers) {
//           initializeProperties(constructor, staticMembers);
//         }
//         return constructor;
//       } else {
//         return define(constructor, instanceMembers, staticMembers);
//       }
//     }

//     function mix(constructor) {
//       /// <summary locid="15">
//       /// Defines a class using the given constructor and the union of the set of instance members
//       /// specified by all the mixin objects.  The mixin parameter list can be of variable length.
//       /// </summary>
//       /// <param name="constructor" locid="9">
//       /// A constructor function that will be used to instantiate this class.
//       /// </param>
//       /// <returns locid="12">
//       /// The newly defined class.
//       /// </returns>
//       constructor = constructor || function () {};
//       var i, len;
//       for (i = 0, len = arguments.length; i < len; i++) {
//         initializeProperties(constructor.prototype, arguments[i]);
//       }
//       return constructor;
//     }

//     // Establish members of "WinJS.Class" namespace
//     WinJS.Namespace.define("WinJS.Class", {
//       define: define,
//       derive: derive,
//       mix: mix,
//     });
//   })(WinJS);
// })(this);

// function Cards() {
//   const initialSelectedCard = {
//     id: 1,
//     title: "",
//     content: "",
//     img: "/assets/Event/HackNSolve.webp",
//   };
//   const [selectedCard, setSelectedCard] = useState(initialSelectedCard);
//   const [userData, setUserData] = useState("");
//   const [data, setData] = useState("");

//   const cards = [
//     {
//       id: 1,
//       title: "Blockchain",
//       content: "",
//       img: "/assets/Event/HackNSolve.webp",
//     },
//     {
//       id: 2,
//       title: "AR/VR",
//       content: "",
//       img: "/assets/Event/Bid-O-Mania.webp",
//     },
//     {
//       id: 3,
//       title: "Machine Learning",
//       content: "",
//       img: "/assets/Event/RoboWar.webp",
//     },
//     {
//       id: 4,
//       title: "Artificial Intelligence",
//       content: "",
//       img: "/assets/Event/GamingArena.webp",
//     },
//     {
//       id: 5,
//       title: "Development",
//       content: "",
//       img: "/assets/Event/GuestSpeakerSession.webp",
//     },
//   ];

//   const handleClick = () => {
//     // WinJS logic to update data based on user input (userData state)
//     // For example, you can update the 'data' state with the WinJS operation result
//     console.log("WinJS:", window.WinJS);
//     const newData = "Result from WinJS operation"; // Replace this with actual WinJS logic
//     setData(newData);
//   };

//   const handleInputChange = (event) => {
//     setUserData(event.target.value);
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//   };

//   return (
//     <>
//       <div id="event" className="page-layout ">
//         <div className="card-layout">
//           <div className="selected-card-content">
//             {selectedCard && (
//               <div className="scard">
//                 <Card
//                   className="selected-card-details bg-center bg-cover"
//                   style={{ backgroundImage: `url(${selectedCard.img})` }}
//                 >
//                   <Card.Body>
//                     <Card.Title className="text-7xl font-semibold text-red-950 uppercase text-black">
//                       {selectedCard.title}
//                     </Card.Title>
//                     <Card.Text>{selectedCard.content}</Card.Text>
//                   </Card.Body>
//                   <div>
//                     <input
//                       type="text"
//                       value={userData}
//                       onChange={handleInputChange}
//                       placeholder="Enter your data"
//                     />
//                     <button onClick={handleClick}>Click Me</button>
//                     {data && <p>Data updated successfully: {data}</p>}
//                   </div>
//                 </Card>
//               </div>
//             )}
//           </div>

//           <div
//             className={`card-sidebar ${selectedCard ? "selected-sidebar" : ""}`}
//           >
//             <div className="card-container">
//               {cards.map((card) => (
//                 <div
//                   key={card.id}
//                   className="individual-card-container"
//                   style={{
//                     backgroundColor:
//                       selectedCard.id === card.id ? "yellow" : "black",
//                   }}
//                 >
//                   <Card
//                     style={{ backgroundImage: `url(${card.img})` }}
//                     className={`cursor-pointer bg-center individual-cards bg-cover  ${
//                       selectedCard.id === card.id ? "border-primary" : ""
//                     }`}
//                     onClick={() => handleCardClick(card)}
//                   >
//                     <Card.Body>
//                       <Card.Title className="text-red-950 font-semibold text-black">
//                         {card.title}
//                       </Card.Title>
//                       <Card.Text>{card.content}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
