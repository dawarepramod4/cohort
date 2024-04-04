import { fn } from "@storybook/test";
import RevenueCard from "../components/revenueCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: "Cards/RevenueCard",
    component: RevenueCard,
};

export const primary = {
    render: () => <RevenueCard />,
};
