const position = [
  {
    name: 'Position',
    property: 'position',
    usage: {
      syntax: 'pos-{value}',
      nameClass: 'position',
      properties: ['pos-absolute'],
    },
    values: [
      {
        utility: 'pos-relative',
        value: 'relative',
      },
      {
        utility: 'pos-absolute',
        value: 'absolute',
      },
      {
        utility: 'pos-fixed',
        value: 'fixed',
      },
      {
        utility: 'pos-static',
        value: 'static',
      },
      {
        utility: 'pos-sticky',
        value: 'sticky',
      },
    ],
  },
  {
    name: 'Top',
    property: 'top',
    usage: {
      syntax: 'top-{number}',
      nameClass: 'top',
      properties: ['top-0', 'top-1', 'top-1r'],
    },
    values: [
      {
        utility: 'top-0',
        value: '0px',
      },

      {
        utility: 'top-1',
        value: '4px',
      },
      {
        utility: 'top-1-5',
        value: '8px',
      },
      {
        utility: 'top-1r',
        value: '1rem',
      },
      {
        utility: 'top-2',
        value: '20px',
      },
      {
        utility: 'top-2-5',
        value: '28px',
      },
      {
        utility: 'top-2r',
        value: '2rem',
      },
      {
        utility: 'top-3',
        value: '36px',
      },
      {
        utility: 'top-3-5',
        value: '40px',
      },
      {
        utility: 'top-3r',
        value: '3rem',
      },
      {
        utility: 'top-4',
        value: '52px',
      },
      {
        utility: 'top-4-5',
        value: '60px',
      },
      {
        utility: 'top-4r',
        value: '4rem',
      },
      {
        utility: 'top-5',
        value: '70px',
      },
      {
        utility: 'top-5-5',
        value: '76px',
      },
      {
        utility: 'top-5r',
        value: '5rem',
      },
    ],
  },
  {
    name: 'Left',
    property: 'left',
    usage: {
      syntax: 'left-{number}',
      nameClass: 'left',
      properties: ['left-0', 'left-1', 'left-1r'],
    },
    values: [
      {
        utility: 'left-0',
        value: '0px',
      },

      {
        utility: 'left-1',
        value: '4px',
      },
      {
        utility: 'left-1-5',
        value: '8px',
      },
      {
        utility: 'left-1r',
        value: '1rem',
      },
      {
        utility: 'left-2',
        value: '20px',
      },
      {
        utility: 'left-2-5',
        value: '28px',
      },
      {
        utility: 'left-2r',
        value: '2rem',
      },
      {
        utility: 'left-3',
        value: '36px',
      },
      {
        utility: 'left-3-5',
        value: '40px',
      },
      {
        utility: 'left-3r',
        value: '3rem',
      },
      {
        utility: 'left-4',
        value: '52px',
      },
      {
        utility: 'left-4-5',
        value: '60px',
      },
      {
        utility: 'left-4r',
        value: '4rem',
      },
      {
        utility: 'left-5',
        value: '70px',
      },
      {
        utility: 'left-5-5',
        value: '76px',
      },
      {
        utility: 'left-5r',
        value: '5rem',
      },
    ],
  },
  {
    name: 'Right',
    property: 'right',
    usage: {
      syntax: 'right-{number}',
      nameClass: 'right',
      properties: ['right-0', 'right-1', 'right-1r'],
    },
    values: [
      {
        utility: 'right-0',
        value: '0px',
      },

      {
        utility: 'right-1',
        value: '4px',
      },
      {
        utility: 'right-1-5',
        value: '8px',
      },
      {
        utility: 'right-1r',
        value: '1rem',
      },
      {
        utility: 'right-2',
        value: '20px',
      },
      {
        utility: 'right-2-5',
        value: '28px',
      },
      {
        utility: 'right-2r',
        value: '2rem',
      },
      {
        utility: 'right-3',
        value: '36px',
      },
      {
        utility: 'right-3-5',
        value: '40px',
      },
      {
        utility: 'right-3r',
        value: '3rem',
      },
      {
        utility: 'right-4',
        value: '52px',
      },
      {
        utility: 'right-4-5',
        value: '60px',
      },
      {
        utility: 'right-4r',
        value: '4rem',
      },
      {
        utility: 'right-5',
        value: '70px',
      },
      {
        utility: 'right-5-5',
        value: '76px',
      },
      {
        utility: 'right-5r',
        value: '5rem',
      },
    ],
  },
  {
    name: 'Bottom',
    property: 'bottom',
    usage: {
      syntax: 'bottom-{number}',
      nameClass: 'bottom',
      properties: ['bottom-0', 'bottom-1', 'bottom-1r'],
    },
    values: [
      {
        utility: 'bottom-0',
        value: '0px',
      },

      {
        utility: 'bottom-1',
        value: '4px',
      },
      {
        utility: 'bottom-1-5',
        value: '8px',
      },
      {
        utility: 'bottom-1r',
        value: '1rem',
      },
      {
        utility: 'bottom-2',
        value: '20px',
      },
      {
        utility: 'bottom-2-5',
        value: '28px',
      },
      {
        utility: 'bottom-2r',
        value: '2rem',
      },
      {
        utility: 'bottom-3',
        value: '36px',
      },
      {
        utility: 'bottom-3-5',
        value: '40px',
      },
      {
        utility: 'bottom-3r',
        value: '3rem',
      },
      {
        utility: 'bottom-4',
        value: '52px',
      },
      {
        utility: 'bottom-4-5',
        value: '60px',
      },
      {
        utility: 'bottom-4r',
        value: '4rem',
      },
      {
        utility: 'bottom-5',
        value: '70px',
      },
      {
        utility: 'bottom-5-5',
        value: '76px',
      },
      {
        utility: 'bottom-5r',
        value: '5rem',
      },
    ],
  },
];
export default position;
