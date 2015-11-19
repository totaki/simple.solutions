var elem = {
  tag: 'div',
  id: 'id',
  cls: 'cls1',
  childs: [
    {
      tag: 'p',
      cls: ['cls2'],
      func: function(elem) { elem.innerHTML = 'Some text.'}
    }
  ]
}

document.body.appendChild(MyElement.create(elem));