import { Button, Flex, Text, Input, Label } from "@aws-amplify/ui-react";
import "../components/resForm.css";
export const ResInput = () => {
  return (
    <Flex
      as="form"
      direction="column"
      width="100%"
      textAlign="center"
      margin="10px auto"
    >
      <Flex direction="column">
        <Label display="block" htmlFor="first_name">
          First Name
          <Text as="span" fontSize="small" color="font.error"></Text>
        </Label>
        <Input
          id="first_name"
          name="first_name"
          type="text"
          isRequired={true}
        />
        <Label display="block" htmlFor="last_name">
          Last Name
          <Text as="span" fontSize="small" color="font.error"></Text>
        </Label>
        <Input id="last_name" name="last_name" type="text" isRequired={true} />
        <Label display="block" htmlFor="email">
          Email
          <Text as="span" fontSize="small" color="font.error"></Text>
        </Label>
        <Input id="email" name="email" type="email" isRequired={true} />
      </Flex>
      <Button type="submit">Submit</Button>
    </Flex>
  );
};
