import React from 'react'
import { css, jsx } from '@emotion/core'

import { SLOT_OPTIONS } from './data'

const ChangeReelsStyle = css` 
    width: 100%;    
`

type ChangeReelsProps = {
    numberOfReels: number
    setNumberOfReels: (change: number) => void
}

const ChangeReels: React.FC<ChangeReelsProps> = ({ numberOfReels, setNumberOfReels }) => {
    return (
        <>
            <button
                disabled={numberOfReels == SLOT_OPTIONS.length}
                onClick={() => setNumberOfReels(numberOfReels + 1)}
                css={ChangeReelsStyle}
            >
                +
            </button>
            <button
                disabled={numberOfReels == 1}
                onClick={() => setNumberOfReels(numberOfReels - 1)}
                css={ChangeReelsStyle}
            >
                -
            </button>
        </>
    )
}

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

const shuffleArray = <T extends unknown>(arr: T[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

const App = () => {
    const [numberOfReels, setNumberOfReels] = React.useState(4)
    const defaultReelValues = Array(numberOfReels).fill('')
    const [reelValues, setReelValues] = React.useState<string[]>(defaultReelValues)

    const handleSpinClick = () => {
        shuffleArray(SLOT_OPTIONS)
        setReelValues(SLOT_OPTIONS.slice(0, numberOfReels))
    }

    const reels = []
    for (let i = 0; i < numberOfReels; i++) {
        reels.push(<Reel key={i}>
            <Symbol text={reelValues[i]} />
        </Reel>)
    }

    return (
        <AppWrapper>

            <SlotMachine>
                <ChangeReels numberOfReels={numberOfReels} setNumberOfReels={setNumberOfReels} />
                <Line>
                    {reels}
                </Line>
                <Spin onClick={handleSpinClick} />
            </SlotMachine>
        </AppWrapper>
    )
}

export default App