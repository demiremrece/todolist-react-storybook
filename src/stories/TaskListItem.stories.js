import TaskListItem from "../components/TaskListItem";

export default {
  title: "TaskListItem",
  argTypes: {
    verified: { control: "boolean"},
    label: { control: "text"}
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
