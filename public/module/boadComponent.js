// boad component 모듈화 작업
export function boadComponent(id, firsName){
  const boad = document.getElementById('boad')
  boad.innerHTML = component2(
    'div',
    { id: id },
    [component2('p', {}, [dataCheck(firsName)])]
  )
}

