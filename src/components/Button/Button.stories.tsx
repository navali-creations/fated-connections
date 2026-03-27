import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		children: "Click me",
		variant: "primary",
		size: "md",
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
};

export const Loading: Story = {
	args: {
		loading: true,
		children: "Loading",
	},
};
