import DropdownItem from "components/Dropdown/DropdownItem";
import DropdownButton from "../../components/Dropdown/DropdownButton";

export default {
  title: "Dropdown",
  component: DropdownButton,
  argType: {
    variant: {
      text: { control: 'text' }
    }
  }
};

export function DropdownStory(args: any) {

  return (
    <DropdownButton {...args}>
        <DropdownItem>Favourites</DropdownItem> 
        <DropdownItem>Monsters</DropdownItem>
        <DropdownItem>Heroes</DropdownItem>     
    </DropdownButton>
  )
}