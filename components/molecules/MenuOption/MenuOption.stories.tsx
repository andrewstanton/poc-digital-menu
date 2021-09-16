import { Meta, Story } from "@storybook/react";

import MenuOption, { MenuOptionProps } from "./MenuOption";

export default {
  title: "components/molecules/MenuOption",
  component: MenuOption,
  argTypes: {},
} as Meta;

const Template: Story<MenuOptionProps> = (args) => <MenuOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...MenuOption.defaultProps,
  name: "Demo Item",
  img: "https://source.unsplash.com/random",
};
