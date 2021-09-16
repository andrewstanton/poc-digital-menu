import { Meta, Story } from "@storybook/react";

import NavButton from "./NavButton";

export default {
  title: "components/molecules/NavButton",
  component: NavButton,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...NavButton.defaultProps,
};
