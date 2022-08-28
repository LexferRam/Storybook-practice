import Stack, { StackProps } from '../components/Stack'
import { Meta, Story } from "@storybook/react";

export default {
    title: "ButtonsComponents/Stack",
    compoent: Stack,
    argTypes: {
        children: { type: "number", defaultValue: 4 },
    },
} as Meta;

const Template: Story<StackProps> = ({ children, ...args }) => (
    <Stack  {...args}>
        {[...Array(children).keys()].map(n => (
            <div
                key={n}
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {n + 1}
            </div>
        ))}
    </Stack>
)


export const Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    // wrap: false,
}


export const Vertical = Template.bind({})
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false,
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false,
}

export const WrapOverflow = Template.bind({})
WrapOverflow.args = {
    children: 40,
    direction: "row",
    spacing: 2,
    wrap: true,
}

export const Empty = Template.bind({})
Empty.args = {
    children: 0,
    direction: "row",
    spacing: 2,
    wrap: false,
}

