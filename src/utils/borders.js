const borders = [
  {
    name: 'Border Width',
    property: 'border-width',
    usage: {
      syntax: 'border-{number}',
      nameClass: 'borders-width',
      properties: ['border-1', 'border-3', 'border-4', 'border-6'],
    },
    values: [
      {
        utility: 'border-0',
        value: '0px',
      },
      {
        utility: 'border-1',
        value: '1px',
      },
      {
        utility: 'border-2',
        value: '2px',
      },
      {
        utility: 'border-3',
        value: '3px',
      },
      {
        utility: 'border-4',
        value: '4px',
      },
      {
        utility: 'border-6',
        value: '6px',
      },
      {
        utility: 'border-8',
        value: '8px',
      },
      {
        utility: 'border-10',
        value: '10px',
      },
    ],
  },
  {
    name: 'Border Style',
    property: 'border-style',
    usage: {
      syntax: 'border-{value}',
      nameClass: 'borders-style',
      properties: [
        'border-solid',
        'border-dotted',
        'border-dashed',
        'border-hidden',
      ],
    },
    values: [
      {
        utility: 'border-none',
        value: 'none',
      },
      {
        utility: 'border-solid',
        value: 'solid',
      },
      {
        utility: 'border-dashed',
        value: '2px',
      },
      {
        utility: 'border-dotted',
        value: '3px',
      },
      {
        utility: 'border-hidden',
        value: 'hidden',
      },
    ],
  },
  {
    name: 'Border Color',
    property: 'border-color',
    usage: {
      syntax: 'border-color-{number}0',
      nameClass: 'borders-color',
      properties: [
        'border-blue-30',
        'border-red-30',
        'border-green-30',
        'border-orange-30',
      ],
    },
    values: [
      {
        utility: 'border-blue-*0',
        value: '-10 to -80',
      },
      {
        utility: 'border-red-*0',
        value: '-10 to -80',
      },
      {
        utility: 'border-green-*0',
        value: '-10 to -80',
      },
      {
        utility: 'border-yellow-*0',
        value: '-10 to -80',
      },
      {
        utility: 'border-purple-*0',
        value: '-10 to -80',
      },
      {
        utility: 'border-orange-*0',
        value: '-10 to -80',
      },
      {
        utility: 'border-gray-*0',
        value: '-10 to -80',
      },
    ],
  },
];
export default borders;
