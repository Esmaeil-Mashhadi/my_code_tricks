// 'use client'
// import { useEffect } from 'react';
// import useGeoLocation from '@/hooks/useGeoLocation';

// const SendModule = ({ email, value, setValue, nameSpaceRef }) => {
//   const location = useGeoLocation();
//   let trimmedValue;
//   trimmedValue = value?.trim();

//   const sendHandler = () => {
//     if (!trimmedValue) {
//       return setValue("");
//     }

//     const nameSpaceSocket = nameSpaceRef.current;
//     nameSpaceSocket.emit('clientMessage', {
//       message: value,
//       email
//     });

//     setValue('');
//   };

//   const changeHandler = (e) => {
//     setValue(e.target.value);
//   };

//   const shareHandler = () => {
//     if (!("geolocation" in navigator)) {
//       alert("Geolocation not supported");
//       return;
//     }


//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         // Do something with the latitude and longitude values
//         console.log("Latitude:", latitude);
//         console.log("Longitude:", longitude);
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//       }
//     );
//   };

//   useEffect(() => {
//     function handlKeyPress(e) {
//       if (e.key === "Enter" && !e.shiftKey) {
//         e.preventDefault();
//         sendHandler();
//       }
//     }

//     window.addEventListener('keypress', handlKeyPress);

//     return () => {
//       window.removeEventListener('keypress', handlKeyPress);
//     };

//   }, [value]);

//   return (
//     <div >
//       <textarea value={value} onChange={changeHandler} />
//       <button
//         style={!trimmedValue ? { opacity: ".5", cursor: "none" } : null}
//         disabled={!trimmedValue}
//         title={!trimmedValue ? 'message is empty' : null}
//         onClick={sendHandler}
//       >
//         Send
//       </button>
//       <button onClick={shareHandler}>Share Location</button>
//     </div>
//   );
// };

// export default SendModule;