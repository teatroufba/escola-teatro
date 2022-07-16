/* eslint-disable react/no-unstable-nested-components */
import { SliceZone } from "@prismicio/react";
import { SliceSimulator } from "@prismicio/slice-simulator-react";

import state from "../../.slicemachine/libraries-state.json";
import { components } from "../../slices/index";

function SliceSimulatorPage() {
  return (
    <SliceSimulator
      state={state}
      sliceZone={({ slices }) => (
        <SliceZone components={components} slices={slices} />
      )}
    />
  );
}

export default SliceSimulatorPage;
