import {Meta, Story} from "@storybook/react";
import {BarChart} from '../components/Bar';

export default {
    title: "ButtonsComponents/BarChart",
    component: BarChart,
} as Meta;

const Template: Story  = args => <BarChart {...args} />
export const LineChart = Template.bind({});

LineChart.args ={
    
}