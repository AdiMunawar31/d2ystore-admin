// "use client"

// import React, { useEffect, useState } from "react"

// const ClientBackButton = () => {
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   if (isClient && window.history.length > 2) {
//     return (
//       <a
//         href="/"
//         onClick={(e) => {
//           e.preventDefault()
//           window.history.back()
//         }}
//         style={{
//           padding: 10,
//           marginTop: "20px",
//           fontSize: "18px",
//           color: "#27AAE1",
//           borderWidth: 1,
//           borderColor: "#27AAE1",
//           borderRadius: 10,
//         }}
//       >
//         Back to Previous Page
//       </a>
//     )
//   }
//   return null
// }

// export default ClientBackButton
