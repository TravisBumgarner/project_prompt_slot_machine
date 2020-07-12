import React from 'react'
import { css, jsx } from '@emotion/core'

import slotOptions from './data/slotOptions.json'

const SpinStyle = css` 
    width: 100%;    
`

const Spin: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button onClick={onClick} css={SpinStyle}>Spin</button>
    )
}

const LineStyle = css`
    display: flex;
    width: 500px;
    height: 500px;
    justify-content: space-between;
`

const Line: React.FC = ({ children }) => {
    return (
        <div css={LineStyle}>
            {children}
        </div>
    )
}

const AppWrapperStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const AppWrapper: React.FC = ({ children }) => {
    return (
        <div css={AppWrapperStyle}>
            {children}
        </div>
    )
}

const SlotMachineStyle = css`
`

const SlotMachine: React.FC = ({ children }) => {
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
    const [reelA, setReelA] = React.useState('')
    const [reelB, setReelB] = React.useState('')
    const [reelC, setReelC] = React.useState('')

    const spin = () => {
        return [Math.random(), Math.random(), Math.random()]
    }

    const handleSpinClick = () => {
        const [a, b, c] = spin()
        setReelA(a)
        setReelB(b)
        setReelC(c)
    }

    console.log(reelA)

    return (
        <AppWrapper>
            <SlotMachine>
                <Line>
                    <Reel>
                        <Symbol text={reelA} />
                    </Reel>
                    <Reel>
                        <Symbol text={reelB} />
                    </Reel>
                    <Reel>
                        <Symbol text={reelC} />
                    </Reel>
                </Line>
                <Spin onClick={handleSpinClick} />
            </SlotMachine>
        </AppWrapper>
    )
}

export default App