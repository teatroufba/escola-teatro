/* eslint-disable react/no-unstable-nested-components */
import { SliceZone } from '@prismicio/react'
import { SliceSimulator } from '@prismicio/slice-simulator-react'

import state from '../../.slicemachine/libraries-state.json'
import { components } from '../../slices/index'

function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      state={state}
    />
  )
}

export default SliceSimulatorPage
