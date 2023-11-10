/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens:{
//         'max-sm': '640px',
//         'md': '768px',
//       },
//       custom:{
//         'responsive-sm':{
//           '@screen max-sm':{
//             display :'flex',
//             flexDirection:'column',
//           },
//         },
//         'responsive-md':{
//           '@screen md':{
//             display: 'block',
//             // flexDirection: 'row',
//           },
//         },

//       },
//     },
//   },
//   plugins: [],
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': '640px',  // Small screens
        'max-xl': '768px',  // Extra-large screens
      },
      custom: {
        'responsive-sm': {
          '@screen max-sm': {
            display: 'flex',
            flexDirection: 'column',
          },
        },
        'responsive-md': {
          '@screen min-sm': {
            display: 'flex',
            flexDirection: 'row',
            border: '2px solid red',
          },
        },
      },
    },
  },
  plugins: [],
}