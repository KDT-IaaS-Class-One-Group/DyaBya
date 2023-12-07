export function boadComponent(id, firsName){
  const boad = document.getElementById('boad')
  boad.innerHTML = component2(
    'div',
    {id:id},
    [component2('p', {}, [dataCheck(firsName)])]
  )
}