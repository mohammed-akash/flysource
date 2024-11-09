'use client'
import { Flex } from '@chakra-ui/react'
import React from 'react'
const Loader = () => {
    return (
        <Flex height='100vh' width='100%' alignItems='center' justifyContent='center'>
            <div id="loader-container">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="0" stdDeviation="1.5"
                                flood-color="#fc6767" />
                        </filter>
                    </defs>
                    <circle id="loader-spinner" style={{ fill: 'transparent', stroke: '#000', strokeWidth: '7px', strokeLinecap: 'round', filter: 'url(#shadow)' }} cx="50" cy="50" r="45" />
                </svg>
            </div>
        </Flex>
    )
}

export default Loader
