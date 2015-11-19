(function(parent) {
  function funca(elem, cls) {
    switch(cls.__proto__) {
      case ''.__proto__:
        elem.classList.add(cls);
        break;
      case [].__proto__:
        cls.forEach(function(e) {
          elem.classList.add(e);
        });
        break
      default:
        break;
    }
  }
  function funcb(o) {
    var elem = document.createElement(o.tag);
    !o.id || (elem.id = o.id);
    !o.cls || funca(elem, o.cls);
    !o.func || o.func(elem);
    return elem;
  }
  function funcc(o) {
    var elem = funcb(o);
    !o.childs || o.childs.forEach(function(e) { 
      elem.appendChild(funcc(e));
    });
  return elem;
  }
  parent.MyElement = {
    create: funcc
  }
})(window);