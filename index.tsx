import { useState } from 'react';

interface ITooltip {
  title?: string;
  text?: string;
}
export default function Tooltip({ title, text }: ITooltip) {
  const [viewTooltip, setViewTooltip] = useState(false);
  return (
    <span
      className={'relative'}
      onMouseOver={() => setViewTooltip(true)}
      onMouseLeave={() => setViewTooltip(false)}
    >
      <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.6'>
        <g clipPath='url(#clip0_174_25949)'>
          <path
            d='M7.5763 7.50033C7.77222 6.94338 8.15893 6.47375 8.66793 6.1746C9.17693 5.87546 9.77538 5.76611 10.3573 5.86592C10.9392 5.96573 11.467 6.26826 11.8472 6.71993C12.2274 7.1716 12.4355 7.74326 12.4346 8.33366C12.4346 10.0003 9.93464 10.8337 9.93464 10.8337M10.0013 14.167H10.0096M18.3346 10.0003C18.3346 14.6027 14.6037 18.3337 10.0013 18.3337C5.39893 18.3337 1.66797 14.6027 1.66797 10.0003C1.66797 5.39795 5.39893 1.66699 10.0013 1.66699C14.6037 1.66699 18.3346 5.39795 18.3346 10.0003Z'
            stroke='#6F767E'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_174_25949'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
      {viewTooltip ? (
        <div
          className={
            'absolute w-[320px] rounded-16 bottom-0 -translate-y-[30px] -left-2.5 p-3 bg-[#272B2E] text-12 leading-base text-white animate-opacity'
          }
        >
          <div className={'flex flex-col gap-1'}>
            {title ? <p className={'font-semibold'}>{title}</p> : null}
            {text ? <p>{text}</p> : null}
          </div>
           <svg
      className={'absolute bottom-0 left-0 translate-y-[calc(100%-2px)]'}
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='9'
      viewBox='0 0 28 9'
      fill='none'
    >
      <path
        d='M26.0711 0.485289C26.962 0.485289 27.4081 1.56243 26.7782 2.1924L20.7071 8.26347C20.3166 8.654 19.6834 8.654 19.2929 8.26347L13.2218 2.1924C12.5919 1.56243 13.038 0.485289 13.9289 0.485289L26.0711 0.485289Z'
        fill='#272B2E'
      />
    </svg>
        </div>
      ) : null}
    </span>
  );
}
