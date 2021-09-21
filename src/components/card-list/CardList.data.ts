export const cardListData: {
  empty: { label: string }
  currentList: {
    heading: string
    categories: {
      id: string
      title: string
      items: { id: string; label: string; quantity: number; checked: boolean }[]
    }[]
  }
} = {
  empty: {
    label: 'No items',
  },

  currentList: {
    heading: 'Shopping list',
    categories: [],
  },
}

// categories:[
//       {
//         title: 'Fruit and vegetables',
//         items: [
//           { label: 'Avocado', quantity: 3, checked: false },
//           { label: 'Pre-cooked corn 450g', quantity: 1, checked: false },
//         ],
//       },
//       {
//         title: 'Meet and Fish',
//         items: [
//           { label: 'Chicken 1k4', quantity: 3, checked: false },
//           { label: 'Pork fillets 450g', quantity: 1, checked: true },
//           { label: 'Salmon 1kg', quantity: 1, checked: false },
//           { label: 'Beef fillets 500g', quantity: 1, checked: false },
//           { label: 'Thuner 1kg', quantity: 1, checked: false },
//           {
//             label: 'Wild Pork fillets 500g',
//             quantity: 1,
//             checked: false,
//           },
//         ],
//       },
//     ],
