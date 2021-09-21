import { createDataId } from '../../helpers/uuid-generator'
const imageUrl = 'https://source.unsplash.com/random'
const note = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga enim officia obcaecati, unde voluptas debitis, non ex asperiores facere, iste deserunt quidem optio nobis numquam maiores repellendus? Nihil, dicta.
Perferendis quasi repudiandae amet nostrum, doloremque beatae. Nisi consectetur quo, iusto eius accusantium ab repellat aliquam quos deleniti maiores doloribus quae at porro. Veniam in ut, laboriosam ea suscipit amet.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga enim officia obcaecati, unde voluptas debitis, non ex asperiores facere, iste deserunt quidem optio nobis numquam maiores repellendus? Nihil, dicta.
Perferendis quasi repudiandae amet nostrum, doloremque beatae. Nisi consectetur quo, iusto eius accusantium ab repellat aliquam quos deleniti maiores doloribus quae at porro. Veniam in ut, laboriosam ea suscipit amet
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fuga enim officia obcaecati, unde voluptas debitis, non ex asperiores facere, iste deserunt quidem optio nobis numquam maiores repellendus? Nihil, dicta.
Perferendis quasi repudiandae amet nostrum, doloremque beatae. Nisi consectetur quo, iusto eius accusantium ab repellat aliquam quos deleniti maiores doloribus quae at porro. Veniam in ut, laboriosam ea suscipit amet
`

const categoriesItems = [
  {
    id: createDataId(),
    title: 'Beverages',
    items: [
      {
        label: 'Coke zero',
        note,
        imageUrl,
        id: createDataId(),
      },
      { label: 'Lamate 60 cl', note, imageUrl, id: createDataId() },
      { label: ' Heineken 33cl', note, imageUrl, id: createDataId() },
      { label: 'Orange juice 1l', note, imageUrl, id: createDataId() },
      { label: 'Limonade 1l', note, imageUrl, id: createDataId() },
      { label: 'Ice tee 1l', note, imageUrl, id: createDataId() },
      { label: 'Tonic 1l', note, imageUrl, id: createDataId() },
      { label: 'Sangria 1l', note, imageUrl, id: createDataId() },
    ],
  },
  {
    id: createDataId(),
    title: 'Fruit and vegetables',
    items: [
      { label: 'avocado', note, imageUrl, id: createDataId() },
      { label: ' banana', note, imageUrl, id: createDataId() },
      { label: 'Bunch of carrots 5pcs', note, imageUrl, id: createDataId() },
      { label: 'Potatoes 1kg', note, imageUrl, id: createDataId() },
      { label: ' precooked corn 450g', note, imageUrl, id: createDataId() },
      { label: 'Mandarin Nadorcott', note, imageUrl, id: createDataId() },
      { label: 'Piele De Sapo Melon', note, imageUrl, id: createDataId() },
      { label: 'Watermelon', note, imageUrl, id: createDataId() },
    ],
  },

  {
    id: createDataId(),
    title: 'Meat and Fish',
    items: [
      { label: 'Chicken leg box', note, imageUrl, id: createDataId() },
      { label: ' Chicken 1kg', note, imageUrl, id: createDataId() },
      { label: ' Pork fillets 450g', note, imageUrl, id: createDataId() },
      { label: ' Salmon 1kg', note, imageUrl, id: createDataId() },
    ],
  },
]

export const initialState = {
  categoriesItems: categoriesItems.map((category) => {
    return {
      ...category,
      items: category.items.map((item) => {
        const keyWords = item.label.split(' ').join(',')
        return {
          ...item,
          imageUrl: `https://source.unsplash.com/featured/?${keyWords}/300x300`,
        }
      }),
    }
  }),
}

/*
TODO: normalize data

interface CatItem<K extends {}, T extends {}> {
  id: keyof K
  items: {
    id: keyof T
  }[]
}
 const normalizeData = <K, T>(list: CatItem<K, T>[]) => {
//   return list.reduce((acc, curr) => {
//     const items = curr.items.reduce(
//       (accItem, currItem) => ({ ...accItem, [currItem.id]: currItem }),
//       {}
//     )
//     return { ...acc, [curr.id]: curr, items }
//   }, {})
// }

*/
