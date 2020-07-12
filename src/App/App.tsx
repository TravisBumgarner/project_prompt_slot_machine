import React from 'react'
import { css, jsx } from '@emotion/core'

import { SLOT_OPTIONS } from './data'

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
    const [reels, setReels] = React.useState<string[]>([])

    const handleSpinClick = () => {
        shuffleArray(SLOT_OPTIONS)
        setReels(SLOT_OPTIONS.slice(0, 3))
    }

    return (
        <AppWrapper>
            <SlotMachine>
                <Line>
                    <Reel>
                        <Symbol text={reels[0]} />
                    </Reel>
                    <Reel>
                        <Symbol text={reels[1]} />
                    </Reel>
                    <Reel>
                        <Symbol text={reels[2]} />
                    </Reel>
                </Line>
                <Spin onClick={handleSpinClick} />
            </SlotMachine>
        </AppWrapper>
    )
}

export default App