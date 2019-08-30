
function sample(collection) {
  let index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

function talkRubbish(options) {
  // 如果使用者未選擇，即 options.job 為空值
  if (!options.job) {
    return '請選擇一個 job ！'
  }

  const task = {
    developer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let sentence = `身為一個${options.job}，${sample(task[options.job])}，${sample(phrase)} !`

  console.log(sentence)

  // return talkRubbishSentence
  return sentence
}

module.exports = talkRubbish