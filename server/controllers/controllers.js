const INICIAL = (req, res) => {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
	{id: 4 , name: 'Angela'}
  ];
  res.json(data);
};


const NUEVOS =  (req, res) => {
  const name = [
    { id: 1, name: 'Pepa' },
    { id: 2, name: 'Pepo' },
    { id: 3, name: 'Pepita' },
  ];
  res.json(name);
};


const OTROS = (req, res) => {
  const otros = [
    { id: 1, name: 'Otro' },
    { id: 2, name: 'Otra' },
    { id: 3, name: 'Otre' },
  ];
  res.json(otros);
}

const PERSONAS = (req, res) => {
  const personas = [
    { id: 1, name: 'Ana' , status: 'single' },
    { id: 2, name: 'Laura' ,  status: 'divorced' },
    { id: 3, name: 'Anabel' ,  status: 'married' },
  ];
  res.json(personas);
};

const PERROS = (req, res) => {
  const perros = [
    { id: 1, name: 'Perro1' , juegoPreferido: 'pelota' },
    { id: 2, name: 'Perro2' ,  juegoPreferido: 'su dueno' },
    { id: 3, name: 'Perro3' ,  juegoPreferido: 'los muebles' },
  ];
  res.json(perros);
};

module.exports = {INICIAL , NUEVOS, OTROS, PERSONAS, PERROS};