import Layout from "../../../components/Layout";
import PostCard from "../../../components/PostCard";

export default function SavedPostsPage() {
    return (
        <Layout>
            <h1 className="text-5xl mb-4 text-gray-300">Your Saved Posts</h1>
            <PostCard />
            <PostCard />
        </Layout>
    );
}