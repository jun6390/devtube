import React from 'react'

import { snsLink } from '../../data/header'

const Sns = () => {
  return (
    <nav className='header__sns' aria-label='소셜 링크'>
        <ul>
            {snsLink.map((sns, key) => (
                <li key={key}>
                    <a 
                    href={sns.url} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    aria-label={`${sns.title} 새 창에서 열기`}
                    >
                        <span aria-hidden="true">
                            {React.cloneElement(sns.icon, {
                                focusable: "false",
                            })}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Sns
