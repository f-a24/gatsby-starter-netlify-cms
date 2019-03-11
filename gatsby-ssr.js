import React from 'react';
import { Provider } from './src/store';

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
