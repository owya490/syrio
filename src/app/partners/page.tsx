import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { partnersMessages } from "./messages";

export default function Partners() {
  return (
    <div>
      <Heading level={1}>{partnersMessages.hero.title}</Heading>
      <Text>{partnersMessages.hero.description}</Text>
    </div>
  );
}
