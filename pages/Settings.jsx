import styled from "styled-components";
import UpdateSettingsForm from "../features/settings/updateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const SettingsCard = styled.section`
  width: 100%;
  max-width: 80rem;
`;

function Settings() {
  return (
    <Row type="vertical">
      <Heading as="h1">Update hotel settings</Heading>
      <SettingsCard>
        <UpdateSettingsForm />
      </SettingsCard>
    </Row>
  );
}

export default Settings;