import React, { useEffect } from 'react';
import { Chart } from 'chart.js';
import * as helpers from 'chart.js/helpers';

const LabelPluginProvider = ({ children }) => {
  useEffect(() => {
    window.Chart = Chart;
    Chart.helpers = helpers;
    import('chart.js-plugin-labels-dv');
  }, []);
    return children;
};

export default LabelPluginProvider;