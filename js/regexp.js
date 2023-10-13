

const elems = [...document.querySelectorAll(`[name]`)];

const results = elems.map(x => {
  const retValue = {
    name: x.name,
    value: x.value,
    type: x.type,
  };


  if (x.type === 'checkbox') {;
    const idElem = document.querySelector(`[for="${x.id}"]`);
    const label = idElem.innerText;

    return {
      ...retValue,
      label,
    }
  } else {
    return {
      ...retValue,
      label: 'その他',
    }
  }
});

results.forEach(x => {
  if (x.value == null || x.value === '') return;

  if (x.type === 'checkbox') {
    const target = document.querySelector(`[value=${x.value}]`);
    target.value = x.label;
    return;
  }
});


