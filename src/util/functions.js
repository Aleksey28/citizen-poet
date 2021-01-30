//To use in any component you need do like this
//
//import poems from '../../data/all_django.json';
//
// const [query, setQuery] = useState('');
// const [poemsText, setPoemsText] = useState('');
// const [result, setResult] = useState('');
//
// useEffect(() => {
//   new Promise((resolve, reject) => {
//     resolve(poems.reduce((res, item) => res + item.fields.text.split(/[.!?]/).join('\n'), ''));
//   }).then(text => {
//     setPoemsText(text);
//   })
// }, [])
//
// const handleClickButton = () => {
//   setResult(translateToPoem(query, poemsText));
// }

function translateToPoem(str, poems) {

  const maxCountWords = 8;
  const fullStrArray = str.split(/[^а-яa-z]/gim);
  const countSets = Math.ceil(fullStrArray.length / maxCountWords);

  let returnValue = '';

  for (let i = 0; i < countSets; i++) {

    const mapWeights = new Map();
    const mapValues = new Map();
    const indexFirstItem = i * maxCountWords;
    const strArray = fullStrArray.slice(indexFirstItem, Math.min((indexFirstItem + maxCountWords), fullStrArray.length));

    strArray.forEach(item => {

      if (item.length > 3) {
        const endingLength = Math.ceil(Math.floor(item.length / 2) / 2);

        const reg = new RegExp(`.*${item.slice(0, item.length - endingLength)}.*`, 'gim')

        let result;
        while ((result = reg.exec(poems))) {
          if (mapWeights.has(result.index)) {
            mapWeights.set(result.index, mapWeights.get(result.index) + 1);
          } else {
            mapWeights.set(result.index, 1);
            mapValues.set(result.index, result[0]);
          }
        }
      }
    })

    const sortedMapWeights = new Map([...mapWeights.entries()].sort((a, b) => b[1] - a[1]));

    let topKey = 0;
    for (let key of sortedMapWeights.keys()) {
      topKey = key;
      break;
    }

    if (mapValues.size > 0) {
      returnValue += mapValues.get(topKey) + (i !== countSets - 1 ? '\n' : '');
    }
  }


  return returnValue.length > 0 ? returnValue : 'Стих не найден =(';
}


export {translateToPoem};
