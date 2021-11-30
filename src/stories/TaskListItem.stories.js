import TaskListItem from "../components/TaskListItem";
import "../index.css"

export default {
  title: "TaskListItem",
  argTypes: {
    verified: { control: "boolean", defaultValue: false},
    label: { control: "text", defaultValue: "Unverified Task"}
  }
}

const Template = args => <TaskListItem {...args}></TaskListItem>


export const Normal = Template.bind({});
Normal.args = {
  verified: false,
  label: "Unverified Task"
};

export const Verified = Template.bind({});
Normal.args = {
  verified: true,
  label: "Verified Task"
};
