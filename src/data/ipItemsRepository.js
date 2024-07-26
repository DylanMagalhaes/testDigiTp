const ipItems = [
  {
    code: '1121',
    description: 'Ouvrage de technicité moyenne à haute ou ouvrage groupés',
    quantity: null,
  },
  {
    code: '1131',
    description:
      "Ouvrage de technicité Courante: Autres ouvrages courants de béton armé ou mixts acier-béton (à l'exclusion des ouvrages nautique)",
    quantity: null,
  },
  {
    code: '1141',
    description: 'Ouvrage de technicité moyenne à haute ou ouvrage groupés',
    quantity: null,
  },
  {
    code: '1161',
    description: 'Ouvrage ',
    quantity: null,
  },
];

export const getIpItemByCode = code => {
  return ipItems.filter(item => item.code === code);
};

export const getAllIpItems = () => {
  return ipItems;
};
