import Link from "next/link";
import Avatar from "../../../components/Avatar";
import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import PostCard from "../../../components/PostCard";

export default function NotificationsPage() {
    return (
        <Layout>
            <h1 className="text-5xl mb-4 text-gray-300">Notifications</h1>
            <Card noPadding={true}>
                <div className="flex gap-3 items-center border-b border-b-gray-100 p-3">
                    <Avatar />
                    <div>
                        <Link href={'/profile'} className="font-semibold mr-1 hover:underline">
                            Béni Vivien
                        </Link>liked
                        <Link href={'/profile/photos'} className="text-red-600 ml-1 hover:underline">
                            your photo
                        </Link>!
                    </div>
                </div>
                <div className="flex gap-3 items-center border-b border-b-gray-100 p-3">
                    <Avatar />
                    <div>Béni Vivien liked your photo!</div>
                </div>
                <div className="flex gap-3 items-center border-b border-b-gray-100 p-3">
                    <Avatar />
                    <div>Béni Vivien liked your photo!</div>
                </div>
                <div className="flex gap-3 items-center border-b border-b-gray-100 p-3">
                    <Avatar />
                    <div>Béni Vivien liked your photo!</div>
                </div>
            </Card>
        </Layout>
    );
}