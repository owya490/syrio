import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import { svlLeagueMessages } from "../messages";

export default function WomensSVL() {
  return (
    <div>
      <Heading level={1}>{svlLeagueMessages.womens.title}</Heading>
      <Text>{svlLeagueMessages.womens.description}</Text>
    </div>
  );
}
