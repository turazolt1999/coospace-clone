import Card from "../../../../components/Card";
import ProfilePage from "../page";

export default function AboutProfilePage() {
    return (
        <ProfilePage>
            <Card>
                <h2 className="text-3xl mb-2">About Me</h2>
                <p className="mb-2 text-sm">Lorem ipsum</p>
                <p className="mb-2 text-sm">Lorem ipsum</p>
            </Card>
        </ProfilePage>
    );
}