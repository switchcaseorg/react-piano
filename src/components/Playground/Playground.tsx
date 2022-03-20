import React, { FunctionComponent } from "react"
import { InstrumentContextProvider } from "states/Instrument"
import { InstrumentSelector } from "../InstrumentSelector"
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument"

export const Playground: FunctionComponent = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  )
}
