import React from 'react'
import { css, jsx } from '@emotion/core'

import slotOptions from './data/slotOptions.json'

const AppWrapperStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

type AppWrapperProps = {
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    return (
        <div css={AppWrapperStyle}>
            {children}
        </div>
    )
}

const SlotMachineStyle = css`
    display: flex;
    width: 500px;
    height: 500px;
    justify-content: space-between;
`

type SlotMachineProps = {
}

const SlotMachine: React.FC<SlotMachineProps> = ({ children }) => {
    return (
        <div css={SlotMachineStyle}>
            {children}
        </div>
    )
}

const SymbolStyle = css`
`

type SymbolProps = {
    text: string
}

const Symbol: React.FC<SymbolProps> = ({ text }) => {
    return (
        <div css={SymbolStyle}>
            {text}
        </div>
    )
}

const ReelStyle = css`
    padding: 30px;
    border: 5px solid black;
    width: 25%;
    box-sizing: border-box;
`

type ReelProps = {
}

const Reel: React.FC<ReelProps> = ({ children }) => {
    return (
        <div css={ReelStyle}>
            {children}
        </div>
    )

}

const fetchData = () => {
    return slotOptions
}

const App = () => {
    return (
        <AppWrapper>
            <SlotMachine>
                <Reel>
                    <Symbol text="foo" />
                </Reel>
                <Reel>
                    <Symbol text="bar" />
                </Reel>
                <Reel>
                    <Symbol text="buzz" />
                </Reel>
            </SlotMachine>
        </AppWrapper>
    )
}

export default App