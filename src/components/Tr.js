import React from 'react';
const Tr = ({ utility, property, value }) => {
  return (
    <tr>
      <td>
        <span className='tag'>.{utility}</span>
      </td>
      <td>
        {utility.includes('px-') || utility.includes('mx-') ? (
          <span>
            {property} :{' '}
            <u>
              {value === '0'
                ? `${value}px`
                : value === 'auto'
                ? '0px auto'
                : `0px ${value}`}
            </u>
            ;{' '}
          </span>
        ) : utility.includes('py-') || utility.includes('my-') ? (
          <span>
            {property} :{' '}
            <u>
              {' '}
              {value === '0'
                ? `${value}px`
                : value === 'auto'
                ? 'auto 0px'
                : `${value} 0px`}
            </u>
            ;
          </span>
        ) : utility.includes('pl-') || utility.includes('ml-') ? (
          <span>
            {property}-left : <u>{value}</u>;{' '}
          </span>
        ) : utility.includes('pr-') || utility.includes('mr-') ? (
          <span>
            {property}-right : <u>{value}</u>;{' '}
          </span>
        ) : utility.includes('pb-') || utility.includes('mb-') ? (
          <span>
            {property}-bottom : <u>{value}</u>;{' '}
          </span>
        ) : utility.includes('pt-') || utility.includes('mt-') ? (
          <span>
            {property}-top : <u>{value}</u>;{' '}
          </span>
        ) : utility.includes('justify-') ? (
          <span>
            justify-content: <u>{value}</u>;{' '}
          </span>
        ) : utility.includes('align-') ? (
          <span>
            align-items: <u>{value}</u>;{' '}
          </span>
        ) : utility.includes('flex') ? (
          <span>
            {property}-direction: <u>{value}</u>;{' '}
          </span>
        ) : (
          <span>
            {property} : <u>{value}</u>;
          </span>
        )}
        <span></span>
      </td>
    </tr>
  );
};
export default Tr;
