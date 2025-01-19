import Card from "../../../../components/Card";
import FriendInfo from "../../../../components/FriendInfo";
import ProfilePage from "../page";

export default function FriendsProfilePage() {
    return (
        <ProfilePage>
            <Card>
                <h2 className="text-3xl mb-2">Friends</h2>
                <div className="">
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                    <div className="border-b border-b-gray-100 p-4 -mx-4">
                        <FriendInfo />
                    </div>
                </div>
            </Card>
        </ProfilePage>
    );
}