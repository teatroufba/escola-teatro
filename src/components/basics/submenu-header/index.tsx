import React, { useState } from 'react'
import { Submenu } from './styles'
import Link from 'next/link'

interface SubmenuOption {
    href: string
    option: string
}

interface SubmenuProps {
    options: SubmenuOption[]
    menuSection: string
    setIsShowingFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SubmenuHeader({
    options,
    menuSection,
    setIsShowingFunction,
}: SubmenuProps) {
    const [section, setSection] = useState<string>('')

    function showSubmenu() {
        if (typeof document != 'undefined') {
            document.getElementById(menuSection)?.classList.add('hover-state')

            switch (menuSection) {
                case 'escola':
                    setIsShowingFunction(true)
                    setSection('escola')
                    break

                case 'ensino':
                    setIsShowingFunction(true)
                    setSection('ensino')
                    break

                case 'extensao':
                    setIsShowingFunction(true)
                    setSection('extensao')
                    break

                case 'espacos':
                    setIsShowingFunction(true)
                    setSection('espacos')
                    break
            }
        }
    }

    function hideSubmenu() {
        if (typeof document != 'undefined') {
            document
                .getElementById(menuSection)
                ?.classList.remove('hover-state')
        }
        setIsShowingFunction(false)
    }

    return (
        <Submenu>
            <ul
                className="submenu"
                onMouseEnter={() => showSubmenu()}
                onMouseLeave={() => hideSubmenu()}
            >
                {options.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} passHref>
                            <a>{item.option}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Submenu>
    )
}
