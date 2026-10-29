import { Card } from "../../components/ui/global/Card";
import { Title } from "../../components/ui/typography/Title";
import { Body } from "../../components/ui/typography/Body";
import { Center } from "../../components/ui/global/Center";

export default function Dashboard() {
    return (
        <>
        <Center>
                    <div className="dashboard-stats w-full m-3">
                <Card variant="outlined" padding="medium">
                    <Body size="small">Total certificates</Body>
                    <Title size="large">1,284</Title>
                    <Body size="small">Issued certificates</Body>
                </Card>

                <Card variant="outlined" padding="medium">
                    <Body size="small">Active users</Body>
                    <Title size="large">356</Title>
                    <Body size="small">Registered accounts</Body>
                </Card>

                <Card variant="outlined" padding="medium">
                    <Body size="small">Pending requests</Body>
                    <Title size="large">24</Title>
                    <Body size="small">Awaiting processing</Body>
                </Card>
            </div>
  
        </Center>
    


        </>
    );
}