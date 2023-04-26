import React, { useEffect, useRef } from 'react';

export const HeaderSDK = ()=>{
  const headerRef = useRef(null);
  useEffect(()=> {
    (async ()=>{
      try {
        const htmlResponse = await window.fetch("https://localhost/app2/header");
        const { status } = htmlResponse;
        if (status !== 200) {
          throw new Error(`Failed to fetch markup, get status code ${status}`);
        }
        const html = await htmlResponse.text();
        const slotHtml = window.document.createRange().createContextualFragment(html);
        headerRef.current.innerHTML = '';
        headerRef.current.appendChild(slotHtml);
      } catch (e){
        console.error(e)
      }
    })()
  }, []);

  const content = typeof window === 'undefined' && '<!--# include virtual="/app2/header" -->';

  const markup = content ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <div
      ref={headerRef}
      suppressHydrationWarning={true}
      dangerouslySetInnerHTML={{ __html: '' }}
    />
  )

  return (<>{markup}</>)


}